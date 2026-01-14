# Entidades do Sistema - ShowZen

Este documento descreve as principais entidades do sistema ShowZen, organizadas por módulo. Todas as entidades principais utilizam o ABP Framework e suportam **Multi-Tenancy**.

---

## 🎨 Módulo de Artistas (Artists)

Responsável pela gestão dos artistas, suas especialidades e disponibilidade.

### 1. Artist
A entidade principal que representa um artista ou performer.
- **Propriedades:** `Name`, `Type` (Enum), `Biography`, `PhotoUrl`, `IsActive`, `InstagramHandle`, `WebsiteUrl`.
- **Customização Visual:** `LogoUrl`, `BannerUrl`, `HexColor`.
- **Coleções:** `Specialties` (N:N), `Availabilities`.

### 2. ArtistSpecialty
Relaciona artistas com suas especialidades ou gêneros.

### 3. Availability & AvailabilityType
Gerencia a agenda de disponibilidade do artista.
- **Tipos:** Bloqueio de agenda, férias, viagem, etc.

---

## 🤝 Módulo de Clientes (Clients)

Gerencia os contratantes e o funil de vendas (CRM).

### 1. Client
Representa o contratante (pessoa física ou jurídica).
- **Propriedades:** `Name`, `Type` (Enum), `Document` (CPF/CNPJ), `Email`, `Phone`, `Address`, `City`, `State`, `Notes`, `IsActive`.
- **CRM:** `LeadStatus` (Enum), `FirstContactDate`, `LastContactDate`.

### 2. ClientType (Enum)
Categoriza o tipo de cliente:
- Prefeitura, Governo Estadual, Sebrae, Empresa Privada, Agência, etc.

---

## 📅 Módulo de Eventos (Events)

O coração do sistema, onde os shows e agendamentos são gerenciados.

### 1. Event
Entidade que representa um show ou compromisso agendado.
- **Relacionamentos:** 
    - `ArtistId` (Obrigatório)
    - `ClientId` (Obrigatório)
    - `LocalPartnerId` (Parceiro comercial local)
    - `LocationId` (Local/Venue)
- **Detalhes:** `Title`, `Type` (Enum), `Status` (Enum), `StartDateTime`, `EndDateTime`, `Fee` (Cachê), `Description`.
- **Financeiro:** `TaxPercentage`, `TaxValue`, `ContractType` (Public/Private), `NegotiationType` (Fee, Box Office, etc.).
- **Conflitos:** `HasConflict`, `SuggestedAlternativeArtistId`.

### 2. Location
Representa o local físico onde o evento ocorre.
- **Propriedades:** `Name`, `Address`, `City`, `State`, `Capacity`.

### 3. EventCommission
Comissões internas distribuídas por cada evento (Ex: Produtor, Vendedor).

---

## 📚 Outros (Boilerplate)

### 1. Book & BookType
Entidades de exemplo provenientes do template base do sistema.
