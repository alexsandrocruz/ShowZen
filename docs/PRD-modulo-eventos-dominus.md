# PRD - Módulo de Eventos do Dominus

> **Versão:** 1.0  
> **Data:** 05/02/2026  
> **Autor:** Produto Digital / Sapienza  
> **Objetivo:** Documento de Requisitos de Produto para implementação do Módulo de Eventos em plataforma Replit

---

## 📋 Sumário Executivo

O **Módulo de Eventos do Dominus** é um sistema de gestão de shows e eventos voltado para produtores artísticos, escritórios de representação e agências de artistas. O sistema centraliza a **Agenda de Eventos** como feature principal, integrando gestão completa de artistas, clientes contratantes, parceiros locais, geração de propostas/orçamentos e relatórios gerenciais.

### Público-Alvo
- Produtores artísticos e managers de bandas/artistas
- Escritórios de representação artística
- Agências de eventos e shows
- Produtoras independentes

### Proposta de Valor
- Visualização unificada da agenda de múltiplos artistas
- Detecção automática de conflitos de agenda
- Geração automática de orçamentos/propostas com visual profissional
- Cálculos financeiros automatizados (impostos, comissões, produções)
- CRM integrado para gestão de leads e clientes

---

## 🎯 Visão do Produto

### Objetivo Principal
Fornecer uma plataforma completa para gestão da agenda de shows e eventos, desde o primeiro contato com o cliente (lead) até a conclusão do evento, incluindo todo o controle financeiro e documental.

### Pilares do Sistema

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MÓDULO DE EVENTOS DOMINUS                        │
├─────────────────────────────────────────────────────────────────────┤
│  📅 AGENDA         │  🎨 ARTISTAS      │  👥 CLIENTES/PARCEIROS     │
│  - Calendário      │  - Cadastro       │  - Contratantes            │
│  - Conflitos       │  - Customização   │  - Parceiros Locais        │
│  - Filtros         │  - Disponibilidade│  - CRM Pipeline            │
├─────────────────────────────────────────────────────────────────────┤
│  💰 FINANCEIRO     │  📄 ORÇAMENTOS    │  📊 RELATÓRIOS             │
│  - Cachês          │  - Propostas PDF  │  - Dashboard KPIs          │
│  - Impostos        │  - Aprovações     │  - Mapa Distribuição       │
│  - Comissões       │  - Histórico      │  - Evolução Receitas       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📅 CORE FEATURE: Agenda de Eventos

A **Agenda** é o coração do sistema. Todas as demais funcionalidades existem para alimentar, complementar ou extrair informações desta entidade central.

### 1.1 Modos de Visualização

| Modo | Descrição | Uso Principal |
|------|-----------|---------------|
| **Calendário Mensal** | Grid mensal com eventos coloridos por artista/status | Visão macro de ocupação |
| **Calendário Semanal** | View detalhada hora-a-hora | Planejamento de logística |
| **Lista/Grid** | Tabela com informações completas | Busca e edição rápida |
| **Kanban por Status** | Colunas: Lead → Proposta → Confirmado → Concluído | Gestão de pipeline |

### 1.2 Filtros Inteligentes

```
┌────────────────────────────────────────────────────────────┐
│  FILTROS DE AGENDA                                          │
├────────────────────────────────────────────────────────────┤
│  [🎨] Artista(s)     │ Multi-select com cor do artista     │
│  [📌] Status         │ Lead, Proposta, Confirmado, etc.    │
│  [📋] Tipo           │ Show, Festival, Corporativo, etc.   │
│  [📆] Período        │ Range de datas personalizável       │
│  [📍] Região/Estado  │ Filtro geográfico                   │
│  [💰] Faixa de Cachê │ Range de valores                    │
└────────────────────────────────────────────────────────────┘
```

**Persistência de Filtros:** Os filtros devem ser salvos em `localStorage` para manter preferências do usuário entre sessões.

### 1.3 Detecção de Conflitos

O sistema deve **automaticamente detectar** quando um artista é agendado para dois eventos simultâneos ou muito próximos:

```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️ CONFLITO DETECTADO                                       │
├─────────────────────────────────────────────────────────────┤
│  O artista "William Sanfona" já possui um evento             │
│  agendado para o dia 15/03/2026 às 20:00                     │
│                                                              │
│  Evento conflitante: Festival de São João - Caruaru/PE       │
│                                                              │
│  [ Cancelar e Ajustar ]  [ Salvar Mesmo Assim ]              │
└─────────────────────────────────────────────────────────────┘
```

**Regras de Conflito:**
- Mesmo artista, mesma data/hora = Conflito Hard
- Mesmo artista, mesma data (horários diferentes) = Aviso
- Artista sugerido como alternativa (campo opcional)

---

## 🎨 Módulo de Artistas

### 2.1 Dados Cadastrais

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | String (200) | ✅ | Nome artístico |
| `type` | Enum | ✅ | Solo, Banda, DJ, Dupla, Grupo, Humorista |
| `biography` | Text (2000) | ❌ | Mini bio para propostas |
| `photoUrl` | URL | ❌ | Foto principal |
| `instagramHandle` | String (50) | ❌ | @ do Instagram |
| `websiteUrl` | URL | ❌ | Site oficial |
| `isActive` | Boolean | ✅ | Ativo no catálogo |

### 2.2 Personalização Visual

Para dar identidade aos eventos de cada artista na agenda e nas propostas:

| Campo | Tipo | Uso |
|-------|------|-----|
| `logoUrl` | Image | Logo quadrado/circular |
| `bannerUrl` | Image | Banner para propostas (1200x300px) |
| `hexColor` | Color Picker | Cor dos eventos na agenda (#FF5733) |
| `proposalTemplateUrl` | PDF | Template personalizado de proposta |

### 2.3 Configurações Financeiras Padrão

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `defaultTaxPercentage` | Decimal | % de imposto sugerido automaticamente |
| `defaultProductionValue` | Decimal | Valor base de produção |

### 2.4 Especialidades (Tags)

Relacionamento N:N com tabela `ArtistSpecialty`:
- Forró
- Sertanejo
- Pagode
- Piseiro
- Axé
- Pop/Rock
- Humor
- Etc.

### 2.5 Gestão de Disponibilidade

Tabela `Availability`:
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `artistId` | FK | Artista |
| `type` | Enum | Férias, Viagem, Bloqueio, Reservado |
| `startDate` | DateTime | Início do período |
| `endDate` | DateTime | Fim do período |
| `notes` | String | Observações |

---

## 👥 Módulo de Clientes e Parceiros

### 3.1 Tipos de Cliente

O sistema diferencia claramente os tipos de contratantes:

```typescript
enum ClientType {
  CityHall = 0,        // Prefeitura
  StateGov = 1,        // Governo Estadual
  FederalGov = 2,      // Governo Federal
  Sebrae = 3,          // SEBRAE/SESI/SENAI
  PrivateCompany = 4,  // Empresa Privada
  Agency = 5,          // Agência de Eventos
  TVRadio = 6,         // Emissora TV/Rádio
  LocalProducer = 7    // Parceiro/Produtor Local
}
```

> **Importante:** Clientes do tipo `LocalProducer` são tratados como **Parceiros Locais** e aparecem em campo separado no formulário de eventos.

### 3.2 Dados Cadastrais do Cliente

| Campo | Tipo | Obrigatório | Notas |
|-------|------|-------------|-------|
| `name` | String (200) | ✅ | Nome/Razão Social |
| `type` | Enum | ✅ | Tipo de cliente |
| `document` | String (20) | ❌ | CPF ou CNPJ (com máscara) |
| `email` | Email | ❌ | E-mail principal |
| `phone` | Phone | ❌ | Telefone/WhatsApp |
| `address` | String (300) | ❌ | Endereço completo |
| `city` | String (100) | ❌ | Cidade |
| `state` | String (2) | ❌ | UF |
| `notes` | Text | ❌ | Observações internas |
| `isActive` | Boolean | ✅ | Status |

### 3.3 CRM - Pipeline de Leads

Campos para gestão do funil de vendas:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `leadStatus` | Enum | New, Contacted, Negotiating, Converted, Lost |
| `firstContactDate` | DateTime | Data do primeiro contato |
| `lastContactDate` | DateTime | Último contato/follow-up |

### 3.4 Cadastro Rápido (Quick Add)

Para agilizar o fluxo de criação de eventos, o sistema oferece **modais de cadastro rápido** que aparecem diretamente no formulário de evento:

```
┌─────────────────────────────────────────────────────────────┐
│  ➕ CADASTRO RÁPIDO DE CLIENTE                               │
├─────────────────────────────────────────────────────────────┤
│  Nome*:     [                                            ]  │
│  Tipo*:     [ Prefeitura           ▼ ]                      │
│  Telefone:  [                                            ]  │
│  Cidade:    [                     ] UF: [ SE ▼ ]            │
│                                                              │
│  [ Cancelar ]                          [ Salvar e Usar ✓ ]  │
└─────────────────────────────────────────────────────────────┘
```

O mesmo padrão se aplica para:
- **Parceiros Locais** (pré-seleciona tipo `LocalProducer`)
- **Locais/Venues** (nome, cidade, capacidade)

---

## 📝 Formulário de Eventos

### 4.1 Seção: Informações Básicas

| Campo | Tipo | Obrigatório | UX Notes |
|-------|------|-------------|----------|
| `title` | String (200) | ✅ | Auto-sugestão: "Show {Artista} - {Cidade}" |
| `type` | Enum | ✅ | Show, Festival, Corporativo, Casamento, Reveillon, SãoJoão, Carnaval |
| `artistId` | Select | ✅ | Dropdown com busca e cor do artista |
| `clientId` | Select | ✅ | Com botão "+ Novo" para Quick Add |
| `localPartnerId` | Select | ❌ | Apenas parceiros locais |
| `locationId` | Select | ❌ | Com botão "+ Novo" |

### 4.2 Seção: Data e Horário

| Campo | Tipo | Obrigatório | UX Notes |
|-------|------|-------------|----------|
| `startDate` | Date | ✅ | Datepicker visual |
| `startTime` | Time | ✅ | Seletor hora:minuto |
| `duration` | Time | ✅ | Duração do show (ex: 01:30) |
| `endDateTime` | Calculated | Auto | `startDateTime + duration` |

### 4.3 Seção: Detalhes do Contrato

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `contractType` | Enum | ✅ | Private, Public |
| `status` | Enum | ✅ | Lead, Proposal, Confirmed, InProgress, Completed, Cancelled, Lost |
| `expectedAudience` | Number | ❌ | Público esperado |
| `description` | Text | ❌ | Observações |

### 4.4 Seção: Financeiro - Negociação

```
┌─────────────────────────────────────────────────────────────────┐
│  💰 DETALHES FINANCEIROS                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Tipo de Negociação:   ○ Cachê Fixo                              │
│                        ○ Cachê Colocado                          │
│                        ○ Bilheteria                              │
│                        ○ Bilheteria Colocada                     │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Cachê (R$):         [     25.000,00    ]               │    │
│  │  Garantia (R$):      [     15.000,00    ]               │    │
│  │  Bilheteria (%):     [        70        ] %             │    │
│  │  Desconto (R$):      [      2.000,00    ]               │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Tipos de Negociação:**
- **Cachê Fixo:** Valor fechado
- **Cachê Colocado:** Valor fixo + despesas de produção por conta do contratante
- **Bilheteria:** Percentual sobre venda de ingressos
- **Bilheteria Colocada:** Percentual + despesas por conta do contratante

### 4.5 Seção: Financeiro - Impostos

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 IMPOSTOS                                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Percentual (%):  [   15,00   ] ←→ Valor (R$):  [   3.750,00  ] │
│                                                                  │
│  ℹ️ Ao editar um campo, o outro é calculado automaticamente     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Comportamento:**
- Se o usuário edita o `%`, calcula automaticamente o `R$`
- Se o usuário edita o `R$`, calcula automaticamente o `%`
- Base de cálculo: valor do Cachê

### 4.6 Seção: Financeiro - Produção

```
┌─────────────────────────────────────────────────────────────────┐
│  🏭 CUSTOS DE PRODUÇÃO                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [ ✓ ] Tem Produção                                              │
│                                                                  │
│  Valor (R$):      [   5.000,00   ] ←→ Percentual:  [   20,00  ]% │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.7 Seção: Comissões Internas

Lista dinâmica de comissões:

```
┌─────────────────────────────────────────────────────────────────┐
│  👥 COMISSÕES INTERNAS                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────────────┐  ┌────────────┐  ┌────────────┐  ┌───┐  │
│  │   Descrição       │  │  Valor R$  │  │     %      │  │ X │  │
│  ├───────────────────┤  ├────────────┤  ├────────────┤  ├───┤  │
│  │ Secretário        │  │   500,00   │  │    2,00    │  │ 🗑 │  │
│  │ Produtor          │  │ 1.250,00   │  │    5,00    │  │ 🗑 │  │
│  │ Vendedor          │  │   750,00   │  │    3,00    │  │ 🗑 │  │
│  └───────────────────┘  └────────────┘  └────────────┘  └───┘  │
│                                                                  │
│  [ + Adicionar Comissão ]                                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📍 Módulo de Locais (Venues)

### 5.1 Dados do Local

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `name` | String (200) | ✅ |
| `address` | String (300) | ✅ |
| `city` | String (100) | ✅ |
| `state` | String (2) | ✅ |
| `zipCode` | String (10) | ❌ |
| `capacity` | Number | ❌ |
| `notes` | Text | ❌ |

### 5.2 Integração Google Maps (Futuro)

- Campo com **Autocomplete** do Google Places API
- Armazenar `placeId` e `formattedAddress`
- Extração automática de cidade/estado

---

## 📄 Módulo de Propostas/Orçamentos

### 6.1 Geração de Proposta

A partir de qualquer evento, o usuário pode gerar uma **Proposta Comercial em PDF**:

```
┌─────────────────────────────────────────────────────────────────┐
│  📄 GERAR PROPOSTA                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Evento: Show William Sanfona - Festa de São João               │
│  Cliente: Prefeitura de Campina Grande/PB                        │
│                                                                  │
│  Validade da proposta: [ 15 ] dias                               │
│                                                                  │
│  [ Visualizar Preview ]        [ Gerar PDF e Enviar ]            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Estrutura do PDF

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              [BANNER DO ARTISTA - 1200x300px]                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   PROPOSTA COMERCIAL                                         │
│   Proposta Nº: 2026-0042                                     │
│   Data: 05/02/2026                                           │
│   Validade: 20/02/2026                                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ARTISTA                                                    │
│   [LOGO]  William Sanfona                                    │
│           @williamsanfona | williamsanfona.com.br            │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   CONTRATANTE                                                │
│   Prefeitura Municipal de Campina Grande                     │
│   CNPJ: 08.993.917/0001-46                                   │
│   Campina Grande/PB                                          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   DETALHES DO EVENTO                                         │
│   ┌──────────────────┬──────────────────────────────────┐   │
│   │ Tipo             │ Festival                          │   │
│   │ Data             │ 24/06/2026 (Terça-feira)          │   │
│   │ Horário          │ 22:00 às 23:30 (1h30)             │   │
│   │ Local            │ Parque do Povo - Centro           │   │
│   │ Público Esperado │ 50.000 pessoas                    │   │
│   └──────────────────┴──────────────────────────────────┘   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   INVESTIMENTO                                               │
│                                                              │
│   Cachê Artístico ........................ R$ 150.000,00     │
│                                                              │
│   * Valores sujeitos a retenção de impostos conforme lei.    │
│   * Hospedagem e alimentação por conta do contratante.       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   [Seção: Rider Técnico resumido - opcional]                 │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   CONDIÇÕES                                                  │
│   • 50% no ato da contratação                                │
│   • 50% até 48h antes do evento                              │
│   • Proposta válida por 15 dias                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   CONTATO                                                    │
│   [Logo Empresa] Dominus Produções                           │
│   contato@dominusproducoes.com.br                            │
│   (79) 99999-9999                                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 Tracking de Propostas

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `uniqueToken` | String | Token único para link de visualização |
| `generatedAt` | DateTime | Data/hora de geração |
| `expiresAt` | DateTime | Data de validade |
| `viewCount` | Number | Quantas vezes foi visualizada |
| `status` | Enum | Draft, Sent, Accepted, Rejected |
| `pdfPath` | String | Caminho do arquivo PDF |

---

## 📊 Dashboard e Relatórios

### 7.1 KPIs Principais

```
┌─────────────────────────────────────────────────────────────────┐
│                    DASHBOARD EXECUTIVO                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │    📅       │  │    💰       │  │    📈       │  │   ✅    │ │
│  │ 47 Eventos  │  │ R$ 1.2M     │  │ R$ 890k     │  │  32     │ │
│  │  No Mês     │  │ Faturamento │  │ Confirmado  │  │Concluídos│ │
│  │  +15% ▲     │  │   Ano       │  │             │  │         │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Gráficos

| Gráfico | Tipo | Dados |
|---------|------|-------|
| Eventos por Status | Doughnut/Pizza | Lead, Proposta, Confirmado, etc. |
| Receita por Mês | Barras | Faturamento mensal |
| Mapa do Brasil | SVG Interativo | Eventos por estado (com cores) |
| Evolução de Cachê | Linha | Histórico temporal por artista |

### 7.3 Filtros do Dashboard

- **Por Artista:** Dropdown multi-select
- **Por Período:** Data inicial → Data final
- **Apenas Confirmados:** Checkbox para ocultar leads/propostas

### 7.4 Lista de Próximos Eventos

Tabela com os eventos dos próximos 30 dias:

| Data | Artista | Evento | Local | Status | Cachê |
|------|---------|--------|-------|--------|-------|
| 15/02 | William Sanfona | Festival Verão | Natal/RN | ✅ Confirmado | R$ 80k |
| 18/02 | Banda XYZ | Corporativo | São Paulo/SP | 📋 Proposta | R$ 45k |
| ... | ... | ... | ... | ... | ... |

---

## 📱 Impressão de Relatórios

### 8.1 Relatório: Agenda do Período

```
┌─────────────────────────────────────────────────────────────────┐
│  📅 AGENDA DE SHOWS - FEVEREIRO/2026                             │
│  Artista: Todos | Status: Confirmados                           │
├────────┬────────────────┬───────────────────┬──────────┬────────┤
│  DATA  │    ARTISTA     │      EVENTO       │   LOCAL  │ CACHÊ  │
├────────┼────────────────┼───────────────────┼──────────┼────────┤
│ 01/02  │ William Sanfona│ Festival Verão    │ Natal/RN │ R$ 80k │
│ 05/02  │ Banda XYZ      │ Carnaval Municipal│ Olinda/PE│ R$ 120k│
│ ...    │ ...            │ ...               │ ...      │ ...    │
├────────┴────────────────┴───────────────────┴──────────┴────────┤
│ TOTAL DO PERÍODO: 15 eventos | R$ 1.250.000,00                  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Relatório: Resumo Financeiro

```
┌─────────────────────────────────────────────────────────────────┐
│  💰 RESUMO FINANCEIRO - JANEIRO A DEZEMBRO/2026                  │
│  Artista: William Sanfona                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Faturamento Bruto:           R$ 2.450.000,00                    │
│  (-) Impostos Retidos:        R$   367.500,00                    │
│  (-) Comissões Internas:      R$   122.500,00                    │
│  (-) Custos de Produção:      R$   245.000,00                    │
│  ────────────────────────────────────────────                    │
│  = Receita Líquida:           R$ 1.715.000,00                    │
│                                                                  │
│  Eventos Realizados: 32                                          │
│  Ticket Médio: R$ 76.562,50                                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Diretrizes de Interface (UI/UX)

### 9.1 Princípios Visuais

- **Design System:** Sapienza Design System com tokens CSS
- **Cores Primárias:** Gradiente azul/roxo moderno
- **Dark Mode:** Suporte completo (toggle no header)
- **Glassmorphism:** Cards com transparência sutil
- **Micro-animações:** Hover effects, transições suaves

### 9.2 Campos Personalizados para Valores

**Requisito Especial:** Todos os campos de valor monetário devem ter comportamento otimizado:

```
┌─────────────────────────────────────────────────────────────────┐
│  DIRETIVA: CurrencyBrlInput                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Comportamento:                                                  │
│  • Input: usuário digita apenas números                          │
│  • Display: formatado como "R$ 25.000,00"                        │
│  • Mascara automática ao digitar                                 │
│  • Suporte a paste de valores                                    │
│  • Alinhamento à direita                                         │
│                                                                  │
│  Exemplo de uso:                                                 │
│  <input currencyBrlInput formControlName="fee" />               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────┐
│  DIRETIVA: PercentageInput                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Comportamento:                                                  │
│  • Input: usuário digita porcentagem                             │
│  • Display: "15,00%"                                             │
│  • Range: 0 a 100                                                │
│  • Decimais: 2 casas                                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Responsividade

| Breakpoint | Comportamento |
|------------|---------------|
| Desktop (>1200px) | Layout completo, sidebar fixa |
| Tablet (768-1199px) | Sidebar colapsável, grid 2 colunas |
| Mobile (<768px) | Menu hamburger, cards full-width, filtros em drawer |

### 9.4 Toast Notifications

Usar sistema de toaster para feedback:
- **Success:** Verde - "Evento salvo com sucesso!"
- **Error:** Vermelho - "Erro ao salvar evento"
- **Warning:** Amarelo - "Conflito de agenda detectado"
- **Info:** Azul - "Proposta enviada por e-mail"

---

## 🔒 Permissões e Roles

### 10.1 Roles do Sistema

| Role | Descrição |
|------|-----------|
| **Admin** | Acesso total, incluindo dados financeiros |
| **Manager** | Gestão de agenda e artistas, vê financeiro |
| **Producer** | Vê agenda, cria eventos, NÃO vê valores |
| **Viewer** | Apenas visualização da agenda |

### 10.2 Matriz de Permissões

| Feature | Admin | Manager | Producer | Viewer |
|---------|:-----:|:-------:|:--------:|:------:|
| Ver Agenda | ✅ | ✅ | ✅ | ✅ |
| Criar Evento | ✅ | ✅ | ✅ | ❌ |
| Editar Evento | ✅ | ✅ | ⚠️ | ❌ |
| Ver Cachê/Valores | ✅ | ✅ | ❌ | ❌ |
| Ver Comissões | ✅ | ✅ | ❌ | ❌ |
| Gerar Proposta | ✅ | ✅ | ❌ | ❌ |
| Ver Dashboard Financeiro | ✅ | ✅ | ❌ | ❌ |
| Gerenciar Artistas | ✅ | ✅ | ❌ | ❌ |
| Gerenciar Clientes | ✅ | ✅ | ⚠️ | ❌ |
| Configurações | ✅ | ❌ | ❌ | ❌ |

⚠️ = Acesso limitado (ver mas não editar todos os campos)

---

## 🗃️ Modelo de Dados

### 11.1 Diagrama ER Simplificado

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   Artist    │       │    Event    │       │   Client    │
├─────────────┤       ├─────────────┤       ├─────────────┤
│ id          │◄──────│ artistId    │       │ id          │
│ name        │       │ clientId    │──────►│ name        │
│ type        │       │ localPartnerId ────►│ type        │
│ hexColor    │       │ locationId  │       │ document    │
│ ...         │       │ title       │       │ leadStatus  │
└─────────────┘       │ type        │       │ ...         │
      │               │ status      │       └─────────────┘
      │               │ startDateTime│              
      ▼               │ fee         │       ┌─────────────┐
┌─────────────┐       │ taxPct/Value│       │  Location   │
│ Availability│       │ ...         │◄──────├─────────────┤
├─────────────┤       └─────────────┘       │ id          │
│ artistId    │              │              │ name        │
│ type        │              │              │ city        │
│ startDate   │              ▼              │ state       │
│ endDate     │       ┌─────────────┐       │ capacity    │
└─────────────┘       │EventCommission      └─────────────┘
                      ├─────────────┤
┌─────────────┐       │ eventId     │       ┌─────────────┐
│ArtistSpecialty      │ description │       │  Proposal   │
├─────────────┤       │ value       │       ├─────────────┤
│ artistId    │       │ percentage  │       │ eventId     │
│ name        │       └─────────────┘       │ uniqueToken │
└─────────────┘                             │ status      │
                                            │ pdfPath     │
                                            └─────────────┘
```

---

## 🛠️ Stack Tecnológica Recomendada (Replit)

### 12.1 Backend

| Componente | Tecnologia | Justificativa |
|------------|------------|---------------|
| Runtime | Node.js 20+ | Amplo suporte no Replit |
| Framework | Express.js ou Fastify | Leve e flexível |
| ORM | Prisma | Type-safe, migrations |
| Banco de Dados | PostgreSQL (Replit DB) | Robusto, JSON support |
| Auth | JWT + bcrypt | Simples e seguro |
| PDF | PDFMake ou Puppeteer | Geração de propostas |

### 12.2 Frontend

| Componente | Tecnologia | Justificativa |
|------------|------------|---------------|
| Framework | React 18+ ou Next.js | Componentização, SSR |
| State | Zustand ou React Query | Simples e performático |
| UI Lib | Radix UI + Tailwind | Flexível e acessível |
| Charts | Chart.js ou Recharts | Gráficos interativos |
| Calendar | FullCalendar | Agenda profissional |
| Forms | React Hook Form + Zod | Validação type-safe |

### 12.3 Infraestrutura

| Componente | Tecnologia |
|------------|------------|
| Hosting | Replit Deployments |
| Database | Replit PostgreSQL ou Neon |
| Storage (PDFs) | Replit Object Storage ou S3 |
| Email | Resend ou SendGrid |

---

## 📅 Roadmap de Implementação

### Fase 1: MVP Core (Semanas 1-3)
- [ ] Setup do projeto (backend + frontend)
- [ ] CRUD de Artistas
- [ ] CRUD de Clientes
- [ ] CRUD de Locais
- [ ] CRUD de Eventos (básico)
- [ ] Visualização de Agenda (lista)

### Fase 2: Agenda Avançada (Semanas 4-5)
- [ ] Calendário Mensal
- [ ] Calendário Semanal
- [ ] Sistema de Filtros
- [ ] Detecção de Conflitos
- [ ] Disponibilidade de Artistas

### Fase 3: Financeiro (Semanas 6-7)
- [ ] Campos financeiros completos
- [ ] Cálculos automáticos (impostos, comissões)
- [ ] Sistema de Comissões Internas

### Fase 4: Propostas e Relatórios (Semanas 8-9)
- [ ] Geração de PDF de Proposta
- [ ] Dashboard com KPIs
- [ ] Gráficos e Mapa do Brasil
- [ ] Relatórios imprimíveis

### Fase 5: Polish e Deploy (Semana 10)
- [ ] Ajustes de UX
- [ ] Testes E2E
- [ ] Deploy em produção
- [ ] Documentação

---

## ✅ Critérios de Aceitação

### Funcionalidades Críticas

1. **Agenda**
   - [ ] Usuário consegue visualizar eventos em formato mensal
   - [ ] Usuário consegue filtrar por artista, status e período
   - [ ] Sistema alerta sobre conflitos de agenda

2. **Eventos**
   - [ ] Usuário consegue criar evento com todos os campos
   - [ ] Cálculos financeiros funcionam corretamente
   - [ ] Quick-add de clientes/parceiros funciona

3. **Propostas**
   - [ ] PDF gerado contém todas as informações corretas
   - [ ] Visual profissional e personalizável por artista

4. **Dashboard**
   - [ ] KPIs calculados corretamente
   - [ ] Gráficos renderizam com dados reais
   - [ ] Filtros afetam todos os widgets

---

## 📝 Notas de Implementação

### Prioridades
1. **Value first:** Foque na agenda e eventos primeiro
2. **Iterativo:** Entregue incrementalmente
3. **Feedback:** Valide com usuários reais cedo

### Cuidados Técnicos
- Implementar soft-delete em todas as entidades
- Usar transações para operações financeiras
- Cachear consultas pesadas (dashboard)
- Logs estruturados para debugging

### Dívidas Técnicas a Evitar
- Não deixar validações apenas no frontend
- Não hardcodar valores de enum
- Não esquecer de indexar campos de busca
- Documentar todas as APIs

---

> **Documento preparado para implementação standalone no Replit.**  
> **Baseado na análise do sistema ShowZen existente.**
