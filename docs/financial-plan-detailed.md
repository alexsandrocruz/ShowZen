# Planejamento Financeiro Detalhado - ShowZen

Este documento apresenta o estudo detalhado de custos de desenvolvimento (investimento), custos operacionais (infraestrutura) e estratégia de precificação para o SaaS **ShowZen**.

O objetivo é amortizar o investimento realizado durante o desenvolvimento e sustentar a operação do sistema para o artista William Sanfona e futuros clientes indicados.

---

## 1. 🏗️ Investimento em Desenvolvimento (CAPEX)

Esta seção estima o valor do "Custo de Oportunidade" ou investimento realizado em horas de trabalho para criar a versão atual do software.

**Base de Cálculo:**
- **Senioridade:** Desenvolvedor Full-stack Sênior (.NET/Angular)
- **Valor Hora (Mercado Estimado):** R$ 120,00 / hora
- **Tempo Estimado (MVP):** 280 horas (aprox. 1.5 a 2 meses full-time ou 3-4 meses part-time)

| Fase do Projeto | Horas Estimadas | Custo Estimado (R$) | Descrição |
| :--- | :---: | :---: | :--- |
| **Arquitetura & Setup** | 40h | R$ 4.800 | Configuração ABP.io, Docker, Repositórios, CI/CD. |
| **Backend (API)** | 80h | R$ 9.600 | Módulos (Artistas, Clientes, Eventos), Segurança, Multi-tenancy. |
| **Frontend (Web App)** | 120h | R$ 14.400 | UI/UX, Dashboards, Integração API, Responsividade. |
| **QA e Ajustes** | 40h | R$ 4.800 | Testes, correção de bugs, ajustes de layout (Mobile). |
| **TOTAL GERAL** | **280h** | **R$ 33.600** | **Valor do "Ativo de Software" criado.** |

> 💡 **Nota:** Este valor de **R$ 33.600,00** é o montante que precisaria ter sido pago a uma consultoria externa para entregar este software. Ele deve ser a meta de recuperação (ROI) ao longo de 12 a 24 meses.

---

## 2. ☁️ Custos Operacionais Mensais (OPEX)

Custos recorrentes para manter o sistema online, seguro e performático para múltiplos clientes (SaaS).

### Infraestrutura (Estimativa para até ~50 artistas ativos)

Utilizando provedores de excelente custo-benefício como **Hetzner (VPS)** e serviços de suporte.

| Item | Serviço / Providor | Custo Mensal (Est.) | Notas |
| :--- | :--- | :---: | :--- |
| **Servidor VPS** | Hetzner (CPX31 - 4 vCPU / 8GB RAM) | ~R$ 90,00 | (€14-16) Suporta .NET API + Postgres + Redis. |
| **Storage / Backups** | AWS S3 ou Wasabi | ~R$ 35,00 | Armazenamento de contratos, fotos e backup de DB. |
| **Domínio** | Registro.br (.com.br) | R$ 3,50 | R$ 40/ano rateado. |
| **E-mail Transacional** | Resend / SendGrid (Plano Starter) | R$ 0,00 / R$ 50,00 | Gratuito até certo volume, depois pago. |
| **Monitoramento** | UptimeRobot / Sentry | Gratuito | Planos free atendem inicialmente. |
| **Total Infraestrutura** | | **~R$ 130,00 / mês** | Custo fixo base. |

### Suporte e Manutenção

| Item | Descrição | Custo Mensal (Est.) |
| :--- | :--- | :---: |
| **Suporte Técnico** | 4h mensais (bugs, dúvidas críticas) | R$ 480,00 |
| **Atualizações** | Atualizações de segurança e patchs | R$ 300,00 |
| **Total Serviços** | | **R$ 780,00 / mês** |

> **Custo Fixo Mensal Total:** **~R$ 910,00** (Infra + Mão de obra mínima de manutenção)

---

## 3. 💰 Estratégia de Precificação (SaaS)

Baseado no concorrente *AnotaShow*, sugerimos uma estrutura de planos que incentive o crescimento. Recomenda-se cobrar um **Setup Inicial** para ajudar na amortização imediata.

### Tabela de Preços Sugerida

| Plano | Valor Mensal | Setup Único | Perfil de Cliente | Diferenciais |
| :--- | :---: | :---: | :--- | :--- |
| **Essencial** | **R$ 149,90** | R$ 299,00 | Artista Solo / Iniciante | Agenda, Contratos Simples, PDF. |
| **Pro** | **R$ 249,90** | R$ 499,00 | Bandas Médias / Duplas | + CRM, Relatórios Financeiros, 2 usuários. |
| **Master** | **R$ 449,90** | R$ 899,00 | Escritórios / Grandes Bandas | + Logística, Multi-usuários, Auditoria, Suporte Prioritário. |

*Dica: Oferecer desconto de 15% a 20% para pagamento anual antecipado.*

---

## 4. 📈 Análise de Viabilidade e Amortização

Objetivo: Recuperar o investimento de **R$ 33.600** e cobrir o custo mensal de **R$ 910,00**.

### Cenário 1: Crescimento Conservador (1 ano)
*Meta: 10 Clientes (Mix: 5 Essencial, 3 Pro, 2 Master)*

- **Faturamento Mensal Recorrente (MRR):**
    - 5 x R$ 149,90 = R$ 749,50
    - 3 x R$ 249,90 = R$ 749,70
    - 2 x R$ 449,90 = R$ 899,80
    - **Total MRR:** **R$ 2.399,00**

- **Lucro Operacional Mensal:** R$ 2.399 - R$ 910 (Custo) = **R$ 1.489,00 / mês**.
- **Amortização do Investimento:** Em 24 meses, acumula-se ~R$ 35.700 de lucro.
    - O projeto se paga em aproximadamente **2 anos** neste ritmo lento.

### Cenário 2: Crescimento com Indicação (William Sanfona)
*Meta: 20 Clientes em 6 meses (Mix Otimista)*

- **Faturamento Mensal Estimado:** ~R$ 5.000,00
- **Lucro Mensal:** ~R$ 4.000,00
- **Amortização:** O investimento inicial (R$ 33.600) é recuperado em **~8-9 meses** após atingir essa base.

---

## 5. ✅ Conclusão e Próximos Passos

1.  **Validar Preços:** Confirmar se os valores estão condizentes com o poder aquisitivo dos parceiros do William Sanfona.
2.  **Infraestrutura:** Subir o ambiente de produção na Hetzner (Docker) para garantir estabilidade e baixo custo.
3.  **Contrato SaaS:** Criar termos de uso para isentar responsabilidade sobre negociações perdidas (blindagem jurídica).
4.  **Venda Consultiva:** Utilizar o "Setup" cobrado para realizar o onboarding do cliente, garantindo que ele use o sistema e não cancele (Churn).
