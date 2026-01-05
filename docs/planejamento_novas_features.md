# Planejamento de Novas Funcionalidades - ShowZen

Este documento detalha as novas funcionalidades solicitadas pelo cliente em Janeiro de 2026.

## 1. Novos Campos no Cadastro de Eventos

Abaixo está a lista detalhada de todos os campos que devem ser adicionados ou modificados na tela de cadastro/edição de eventos:

| Campo | Tipo | Descrição/Lógica |
| :--- | :--- | :--- |
| **Parceiro Local** | Select (Client) | Busca de clientes filtrada por `LocalProducer`. |
| **Tipo de contrato** | Enum | Ex: Privado, Público, etc. |
| **Duração** | Time/String | Ex: "02:00". |
| **Início** | Time | Horário de início do show. |
| **Cachê (R$)** | Decimal | Valor total do cachê. |
| **Tem Produção** | Checkbox | Habilita campos de custo de produção. |
| **Valor de Produção** | Decimal | Se preenchido, calcula automaticamente o % sobre o Cachê. |
| **Percentual de Produção** | Decimal | Se preenchido, calcula automaticamente o valor em R$ sobre o Cachê. |
| **Tipo de Negociação** | Enum | Opções: Cachê, Cachê Colocado, Bilheteria, Bilheteria Colocada. |
| **Garantia (R$)** | Decimal | Valor mínimo garantido. |
| **Bilheteria (%)** | Decimal | Percentual de participação na bilheteria. |
| **Desconto (R$)** | Decimal | Valor de desconto aplicado no contrato. |
| **Impostos (%)** | Decimal | Percentual de impostos retidos. |
| **Comissões Internas** | List | Lista de comissões (Secretário, Produtor, etc). |
| **Anexos de Produção** | Files | Upload de arquivos visíveis para Admin e Produtor. |
| **Anexos Gerenciais** | Files | Upload de arquivos visíveis apenas para Admin. |

## 2. Personalização do Artista

Campos para fortalecer a identidade visual:
- **Logo:** Imagem quadrada/circular para identificação rápida.
- **Banner:** Imagem retangular para cabeçalhos de propostas e calendário.
- **Cor do Artista:** Seletor de cores para que os eventos desse artista tenham uma cor específica na agenda.
- **Percentual de Imposto Padrão:** Definir um % fixo que será sugerido automaticamente na criação do evento.

## 3. Detalhamento Financeiro (Deduções)

Para cada evento, além do Cachê bruto, o sistema permitirá detalhar as deduções:
- **Impostos:** Calculado com base no % do artista (editável por evento).
- **Comissões Internas:** Possibilidade de adicionar múltiplos itens informando o nome (ex: "Secretário") e o valor ou % da comissão.
- **Diferença de Produtor Local:** O "Parceiro Local" é uma entidade externa (contratante/parceiro), enquanto as comissões aqui tratadas são custos internos do escritório aplicados sobre o cachê.

- **Permissões:**
  - Acesso à Agenda (`Schedule`).
  - Visualização de detalhes não financeiros.
  - Download de PDF da Agenda.
  - Visualização de Anexos de Produção.
  - **Bloqueio:** Não vê valores de Cachê, Garantia, Lucros. Não pode editar dados.

## 4. Relatórios e Dashboards

- **Mapa de Distribuição (Brasil):**
  - Mapeamento visual por estado.
  - Integração com logradouro via Google Maps para capturar UF automaticamente.
- **Gráfico de Evolução de Cachê:**
  - Histórico temporal dos valores de contrato por artista.

## 5. Integração Google Maps

- Campo de 'Local' agora deve utilizar o Autocomplete do Google Maps API.
- Armazenar `PlaceId` e `FormattedAddress`.

---

**Elaborado por:** Antigravity AI
**Data:** 04/01/2026
