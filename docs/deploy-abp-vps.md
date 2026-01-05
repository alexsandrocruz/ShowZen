# Deploy de Aplicações ABP.io em VPS

Este guia documenta o processo completo de deploy de uma aplicação ABP.io (Angular + .NET API) em uma VPS com Ubuntu, baseado na experiência do projeto ShowZen.

---

## Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Arquitetura de Deploy](#arquitetura-de-deploy)
3. [Configuração Inicial do Servidor](#configuração-inicial-do-servidor)
4. [Configuração do Docker e Serviços](#configuração-do-docker-e-serviços)
5. [Configuração do Nginx](#configuração-do-nginx)
6. [Configuração SSL/HTTPS](#configuração-sslhttps)
7. [Configuração do OpenIddict](#configuração-do-openiddict)
8. [GitHub Actions CI/CD](#github-actions-cicd)
9. [Troubleshooting](#troubleshooting)

---

## Pré-requisitos

### No Servidor VPS
- Ubuntu 22.04 LTS ou superior
- 4GB RAM mínimo (recomendado 8GB)
- Docker e Docker Compose instalados
- .NET SDK 8.0+ instalado
- Certbot para SSL

### No Repositório
- Código fonte da aplicação ABP.io
- Workflows do GitHub Actions configurados
- Secrets configurados no GitHub

---

## Arquitetura de Deploy

```
┌─────────────────────────────────────────────────────────────┐
│                        Internet                              │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │  Cloudflare │  (DNS + CDN opcional)
                    │   ou DNS    │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   Nginx     │  :443 (HTTPS)
                    │   (Docker)  │  :80 → redirect
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
  ┌─────▼─────┐     ┌──────▼──────┐    ┌──────▼──────┐
  │  Angular  │     │   .NET API  │    │  PostgreSQL │
  │  (static) │     │  (systemd)  │    │  (Docker)   │
  │           │     │   :5000     │    │   :5432     │
  └───────────┘     └─────────────┘    └─────────────┘
                           │
                    ┌──────▼──────┐
                    │    Redis    │
                    │  (Docker)   │
                    │   :6379     │
                    └─────────────┘
```

---

## Configuração Inicial do Servidor

### 1. Conectar ao Servidor

```bash
ssh root@SEU_IP
```

### 2. Atualizar Sistema

```bash
apt update && apt upgrade -y
apt install -y curl wget git unzip
```

### 3. Instalar Docker

```bash
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker
```

### 4. Instalar .NET SDK

```bash
wget https://dot.net/v1/dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --channel 8.0

# Adicionar ao PATH
echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
echo 'export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools' >> ~/.bashrc
source ~/.bashrc
```

### 5. Criar Estrutura de Diretórios

```bash
mkdir -p /opt/NOME_PROJETO/{api,angular,ssl}
```

---

## Configuração do Docker e Serviços

### docker-compose.prod.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: NOME_PROJETO-postgres
    restart: always
    environment:
      POSTGRES_DB: NOME_PROJETO
      POSTGRES_USER: SEU_USUARIO
      POSTGRES_PASSWORD: SUA_SENHA_FORTE
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "127.0.0.1:5432:5432"

  redis:
    image: redis:7-alpine
    container_name: NOME_PROJETO-redis
    restart: always
    ports:
      - "127.0.0.1:6379:6379"
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    container_name: NOME_PROJETO-nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro
      - /opt/NOME_PROJETO/angular:/opt/NOME_PROJETO/angular:ro
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  postgres_data:
  redis_data:
```

### Iniciar Serviços

```bash
cd /opt/NOME_PROJETO
docker compose up -d
```

---

## Configuração do Nginx

### nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # Redirecionar HTTP para HTTPS
    server {
        listen 80;
        server_name SEU_DOMINIO.com.br;
        
        location / {
            return 301 https://$server_name$request_uri;
        }
    }

    # Servidor HTTPS
    server {
        listen 443 ssl;
        http2 on;
        server_name SEU_DOMINIO.com.br;

        # Certificados SSL
        ssl_certificate /etc/letsencrypt/live/SEU_DOMINIO.com.br/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/SEU_DOMINIO.com.br/privkey.pem;

        # Configurações SSL modernas
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        
        # Headers de segurança
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        client_max_body_size 100M;

        # Root para Angular
        root /opt/NOME_PROJETO/angular;
        index index.html;

        # API
        location /api/ {
            proxy_pass http://host.docker.internal:5000;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # OpenIddict OAuth/OIDC
        location /connect/ {
            proxy_pass http://host.docker.internal:5000;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # ABP Account UI (Login)
        location /Account/ {
            proxy_pass http://host.docker.internal:5000;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # ABP Bundles (CSS/JS)
        location /__bundles/ {
            proxy_pass http://host.docker.internal:5000;
        }

        # ABP Client Libs
        location /libs/ {
            proxy_pass http://host.docker.internal:5000;
        }

        # ABP Scripts
        location /Abp/ {
            proxy_pass http://host.docker.internal:5000;
        }

        # OpenID Discovery
        location /.well-known/ {
            proxy_pass http://host.docker.internal:5000;
        }

        # Health Check
        location /health-status {
            proxy_pass http://host.docker.internal:5000;
        }

        # Angular SPA Fallback
        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

> **IMPORTANTE:** O `host.docker.internal` permite que o Nginx no Docker se comunique com a API rodando no host via systemd.

---

## Configuração SSL/HTTPS

### 1. Instalar Certbot

```bash
apt install -y certbot
```

### 2. Parar Nginx Temporariamente

```bash
docker compose stop nginx
```

### 3. Gerar Certificado

```bash
certbot certonly --standalone -d SEU_DOMINIO.com.br
```

### 4. Reiniciar Nginx

```bash
docker compose up -d nginx
```

### 5. Renovação Automática

```bash
# Adicionar ao crontab
crontab -e

# Adicionar linha:
0 0 1 * * certbot renew --quiet && docker restart NOME_PROJETO-nginx
```

---

## Configuração do OpenIddict

### appsettings.Production.json

```json
{
  "App": {
    "SelfUrl": "https://SEU_DOMINIO.com.br",
    "ClientUrl": "https://SEU_DOMINIO.com.br",
    "CorsOrigins": "https://SEU_DOMINIO.com.br",
    "RedirectAllowedUrls": "https://SEU_DOMINIO.com.br"
  },
  "AuthServer": {
    "Authority": "https://SEU_DOMINIO.com.br/",
    "RequireHttpsMetadata": true
  },
  "OpenIddict": {
    "DisableTransportSecurityRequirement": true
  },
  "ConnectionStrings": {
    "Default": "Host=localhost;Port=5432;Database=NOME_PROJETO;Username=..;Password=.."
  },
  "Redis": {
    "Configuration": "localhost:6379"
  }
}
```

### Certificado OpenIddict

O ABP usa um certificado PFX para assinar tokens. Em produção:

1. Gere o certificado localmente:
```bash
dotnet dev-certs https -ep ./openiddict.pfx -p SUA_SENHA
```

2. Converta para base64 e salve como GitHub Secret:
```bash
base64 -i openiddict.pfx | tr -d '\n'
```

3. No workflow, restaure o certificado:
```yaml
- name: Restore OpenIddict Certificate
  run: |
    echo "${{ secrets.OPENIDDICT_CERTIFICATE }}" | base64 --decode > openiddict.pfx
```

### ConfigureAuthentication no Module

Adicione suporte a forwarded headers:

```csharp
public override void OnApplicationInitialization(ApplicationInitializationContext context)
{
    var app = context.GetApplicationBuilder();
    
    // IMPORTANTE: Deve vir antes de UseAuthentication
    app.UseForwardedHeaders(new ForwardedHeadersOptions
    {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
    });
    
    // ... resto da configuração
}
```

---

## GitHub Actions CI/CD

### Secrets Necessários

| Secret | Descrição |
|--------|-----------|
| `SSH_HOST` | IP ou domínio do servidor |
| `SSH_USER` | Usuário SSH (geralmente `root`) |
| `SSH_PRIVATE_KEY` | Chave privada SSH |
| `OPENIDDICT_CERTIFICATE` | Certificado PFX em base64 |

### deploy-api.yml

```yaml
name: Deploy API

on:
  push:
    branches: [main]
    paths:
      - 'PROJETO/**'
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: Restore dependencies
        run: dotnet restore PROJETO/PROJETO.csproj

      - name: Install ABP CLI
        run: dotnet tool install -g Volo.Abp.Cli

      - name: Install Libs
        run: abp install-libs
        working-directory: PROJETO

      - name: Build
        run: dotnet build PROJETO/PROJETO.csproj -c Release --no-restore

      - name: Restore OpenIddict Certificate
        run: |
          echo "${{ secrets.OPENIDDICT_CERTIFICATE }}" | base64 --decode > PROJETO/openiddict.pfx

      - name: Publish
        run: dotnet publish PROJETO/PROJETO.csproj -c Release --no-build -o ./publish

      - name: Copy wwwroot libs to publish
        run: cp -r PROJETO/wwwroot/libs ./publish/wwwroot/libs

      - name: Copy files to server
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: "publish/*"
          target: "/opt/NOME_PROJETO/deploy-temp"
          strip_components: 1

      - name: Deploy on server
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            rm -rf /opt/NOME_PROJETO/api/*
            mv /opt/NOME_PROJETO/deploy-temp/* /opt/NOME_PROJETO/api/
            rm -rf /opt/NOME_PROJETO/deploy-temp
            systemctl restart NOME_PROJETO-api
```

### deploy-angular.yml

```yaml
name: Deploy Angular

on:
  push:
    branches: [main]
    paths:
      - 'PROJETO/angular/**'
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: PROJETO/angular/package-lock.json

      - name: Install dependencies
        run: npm ci --legacy-peer-deps
        working-directory: PROJETO/angular

      - name: Build
        run: npm run build -- --configuration=production
        working-directory: PROJETO/angular

      - name: Generate dynamic-env.json
        run: |
          cat > angular-publish/dynamic-env.json << 'EOF'
          {
            "production": true,
            "application": {
              "baseUrl": "https://SEU_DOMINIO.com.br"
            },
            "oAuthConfig": {
              "issuer": "https://SEU_DOMINIO.com.br/",
              "clientId": "NOME_PROJETO_App",
              "scope": "offline_access openid profile email phone NOME_PROJETO"
            }
          }
          EOF

      - name: Copy files to server
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: "angular-publish/*"
          target: "/opt/NOME_PROJETO/angular"
          strip_components: 1
```

### systemd Service

Crie `/etc/systemd/system/NOME_PROJETO-api.service`:

```ini
[Unit]
Description=NOME_PROJETO API
After=network.target

[Service]
WorkingDirectory=/opt/NOME_PROJETO/api
ExecStart=/usr/local/bin/dotnet /opt/NOME_PROJETO/api/NOME_PROJETO.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=NOME_PROJETO-api
User=root
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=ASPNETCORE_URLS=http://0.0.0.0:5000
Environment=ConnectionStrings__Default=Host=localhost;Port=5432;...
Environment=Redis__Configuration=localhost:6379

[Install]
WantedBy=multi-user.target
```

Ativar:
```bash
systemctl daemon-reload
systemctl enable NOME_PROJETO-api
systemctl start NOME_PROJETO-api
```

---

## Troubleshooting

### Erro: "Token doesn't contain any audience"

**Causa:** O token OAuth não contém a audiência esperada.

**Solução:**
1. Adicione o scope no `environment.prod.ts`:
```typescript
oAuthConfig: {
  scope: 'offline_access openid profile email phone NOME_PROJETO',
}
```
2. Verifique no banco se o scope existe:
```sql
SELECT * FROM "OpenIddictScopes" WHERE "Name" = 'NOME_PROJETO';
SELECT * FROM "OpenIddictApplications" WHERE "ClientId" = 'NOME_PROJETO_App';
```

### Erro: "RequestVerificationToken is not present"

**Causa:** ABP exige token CSRF para POST requests.

**Solução:** Adicione `[IgnoreAntiforgeryToken]` no endpoint:
```csharp
[IgnoreAntiforgeryToken]
public async Task<ResultDto> MeuMetodoPostAsync([FromBody] InputDto input)
```

### Erro: MIME type 'text/html' for CSS/JS

**Causa:** Nginx está servindo Angular SPA para rotas ABP.

**Solução:** Adicione proxies antes do fallback:
```nginx
location /__bundles/ { proxy_pass http://...; }
location /libs/ { proxy_pass http://...; }
location /Abp/ { proxy_pass http://...; }
```

### API não inicia

Verifique logs:
```bash
journalctl -u NOME_PROJETO-api -n 100 --no-pager
```

### Nginx não encontra API

Verifique se API está ouvindo em `0.0.0.0:5000`:
```bash
ss -tlnp | grep 5000
```

Se estiver em `127.0.0.1:5000`, ajuste no systemd:
```ini
Environment=ASPNETCORE_URLS=http://0.0.0.0:5000
```

---

## Checklist de Deploy

- [ ] Docker e Docker Compose instalados
- [ ] PostgreSQL e Redis rodando
- [ ] Certificado SSL gerado
- [ ] Nginx configurado com todas as rotas
- [ ] API rodando via systemd
- [ ] GitHub Secrets configurados
- [ ] Workflows de CI/CD funcionando
- [ ] OpenIddict com certificado em produção
- [ ] Scope correto no frontend
- [ ] Health check respondendo

---

## Comandos Úteis

```bash
# Ver logs da API
journalctl -u NOME_PROJETO-api -f

# Reiniciar API
systemctl restart NOME_PROJETO-api

# Reiniciar Nginx
docker restart NOME_PROJETO-nginx

# Ver todos os containers
docker ps

# Acessar PostgreSQL
docker exec -it NOME_PROJETO-postgres psql -U usuario -d banco

# Testar health check
curl -k https://localhost/health-status
```

---

*Documento gerado em dezembro/2025 baseado no deploy do projeto ShowZen.*
