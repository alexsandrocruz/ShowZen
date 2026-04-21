# ShowZen - Project Context

## Project Overview

**ShowZen** is a SaaS application built with **ABP Framework 10.0.1** on **.NET 10.0**. It uses a single-layer architecture with an Angular frontend. The project supports multi-tenancy, authentication/authorization via OpenIddict, and is designed for scalability.

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | .NET 10.0, ABP Framework 10.0.1, ASP.NET Core |
| **Frontend** | Angular 20+, ABP Angular packages 10.0.1 |
| **Database** | PostgreSQL 16 (via EF Core) |
| **Caching** | Redis 7 |
| **Auth** | OpenIddict (OAuth2/OpenID Connect, JWT with RSA signing) |
| **UI Theme** | ABP LeptonXLite 5.0.1, Bootstrap 5.3 |
| **Charts** | Chart.js 4.x, ECharts 6.x, ng2-charts 8.x |
| **Calendar** | FullCalendar 6.x |
| **PDF** | iText7 9.0, QuestPDF (latest) |
| **Logging** | Serilog (file + console) |
| **Testing** | xUnit, NSubstitute, Shouldly |
| **Infrastructure** | Docker Compose (PostgreSQL + Redis) |

### Key ABP Modules in Use

- **Account** - Authentication and user management
- **Identity** - User and role management
- **Tenant Management** - Multi-tenancy support
- **Permission Management** - Role-based access control
- **Feature Management** - Feature flag system
- **Setting Management** - Application settings
- **Audit Logging** - Automatic change tracking
- **Blob Storage** - Database-based blob storage (ABP BlobStoring)

## Project Structure

```
ShowZen/
├── ShowZen/                          # .NET solution root
│   ├── ShowZen/                      # Main ASP.NET Core application
│   │   ├── Controllers/              # API endpoints
│   │   ├── Data/                     # DbContext, migrations, seed data
│   │   ├── Entities/                 # Domain entities
│   │   ├── Services/                 # Application services
│   │   ├── Migrations/               # EF Core migrations
│   │   ├── Permissions/              # Permission definitions
│   │   ├── Localization/             # JSON localization files
│   │   ├── Mapping/                  # Object mapping profiles
│   │   ├── HealthChecks/             # Health check configurations
│   │   ├── Program.cs                # Application entry point
│   │   ├── ShowZenModule.cs          # ABP module configuration
│   │   └── appsettings.json          # Configuration
│   ├── ShowZen.Tests/                # xUnit test project
│   ├── angular/                      # Angular frontend application
│   │   ├── src/                      # Angular source code
│   │   ├── src/app/                  # Angular components, services, routes
│   │   ├── package.json              # Node dependencies
│   │   └── angular.json              # Angular CLI configuration
│   ├── etc/                          # Docker build/run scripts
│   │   ├── build/                    # Docker image build scripts
│   │   └── docker/                   # Docker compose run scripts
│   ├── ShowZen.slnx                  # Solution file (new format)
│   ├── docker-compose.yml            # PostgreSQL + Redis services
│   └── common.props                  # Shared MSBuild properties
├── saas-clawds/                      # SaaS business playbook (26 departments)
├── docs/                             # Project documentation
│   ├── deploy-abp-vps.md             # VPS deployment guide
│   ├── entidades-sistema.md          # System entities documentation
│   ├── financial-plan-*.md           # Financial planning documents
│   ├── marketing-plan.md             # Marketing strategy
│   ├── planejamento_novas_features.md # New features planning
│   └── PRD-modulo-eventos-dominus.md # Product requirements doc
└── ABP_PROJECT_KNOWLEDGE_BASE.md     # ABP.io reference guide (Portuguese)
```

## Building and Running

### Prerequisites

- **.NET 10.0+ SDK**
- **Node.js 18 or 20**
- **Docker Desktop** (for PostgreSQL and Redis)
- **ABP CLI**: `dotnet tool install -g Volo.Abp.Cli`

### Initial Setup

```bash
# Install client-side libraries (run once after cloning)
cd ShowZen/ShowZen
abp install-libs

# Generate signing certificate (if not present)
dotnet dev-certs https -v -ep openiddict.pfx -p be952743-47b9-468d-8cbd-02eb436264ef
```

### Start Infrastructure

```bash
# Start PostgreSQL (port 5434) and Redis (port 6381)
cd ShowZen/ShowZen
docker-compose up -d

# Check status
docker-compose ps
```

### Run Backend

```bash
# Run with database migration (first time or after migration changes)
cd ShowZen/ShowZen
dotnet run --project ShowZen -- --migrate-database

# Run normally (after database is set up)
dotnet run --project ShowZen

# Backend available at:
# API: https://localhost:44353
# Swagger: https://localhost:44353/swagger
# Health: https://localhost:44353/health
```

### Run Frontend

```bash
cd ShowZen/ShowZen/angular

# Install dependencies (first time)
npm install

# Start development server
npm start
# or: ng serve

# Frontend available at: http://localhost:4200
```

### Common Commands

#### Backend (.NET)

```bash
# Build
dotnet build ShowZen/ShowZen

# Run tests
dotnet test ShowZen/ShowZen.Tests

# Add EF Core migration
dotnet ef migrations add <MigrationName> --project ShowZen/ShowZen

# Update database
dotnet ef database update --project ShowZen/ShowZen

# Clean and rebuild
dotnet clean && dotnet restore && dotnet build
```

#### Frontend (Angular)

```bash
cd ShowZen/ShowZen/angular

# Build for production
npm run build:prod

# Run tests
npm test

# Lint code
npm run lint

# Watch mode build
npm run watch
```

#### Docker Operations

```bash
# Build Docker images locally
ShowZen/ShowZen/etc/build/build-images-locally.ps1

# Run with Docker Compose
ShowZen/ShowZen/etc/docker/run-docker.ps1

# Stop containers
ShowZen/ShowZen/etc/docker/stop-docker.ps1
```

## Database Configuration

- **PostgreSQL**: `localhost:5434`, database `ShowZen`
- **Credentials**: `postgres` / `showzen123`
- **Redis**: `localhost:6381`
- **Connection string** (dev): configured in `appsettings.json`
- **Migrations**: Managed via EF Core; auto-run with `--migrate-database` flag

### Legacy Timestamp Behavior

Npgsql legacy timestamp behavior is enabled for compatibility:
```csharp
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
```

## Authentication & Authorization

- **OpenIddict** for token-based authentication
- **JWT tokens** with RSA signing certificate (`openiddict.pfx`)
- **Certificate passphrase**: `be952743-47b9-468d-8cbd-02eb436264ef`
- **Built-in multi-tenancy** support
- **Permission-based authorization** system
- **Default admin credentials** (from ABP template): `admin` / `1q2w3E*`

### Password Policy (Relaxed)

Password requirements are relaxed in `appsettings.json`:
- No special characters required
- No lowercase required
- No uppercase required
- No digits required

## Architecture Notes

### Single-Layer ABP Template

This project uses ABP's **single-layer** startup template, meaning Domain, Application, and Infrastructure layers are combined into one project (`ShowZen.csproj`). This is simpler than the multi-layer DDD template but still follows ABP conventions.

### Key Files

| File | Purpose |
|------|---------|
| `ShowZenModule.cs` | Main ABP module - configures all dependencies |
| `Program.cs` | Entry point - handles migration/cleanup flags, Serilog setup |
| `appsettings.json` | Configuration (connection strings, CORS, OpenIddict) |
| `appsettings.Production.json` | Production-specific overrides |
| `ShowZenGlobalFeatureConfigurator.cs` | Global ABP feature configuration |
| `ShowZenModuleExtensionConfigurator.cs` | Module extension configuration |

### Logging

- **Serilog** configured with file output (`Logs/logs.txt`) and console
- **ABP Studio** sink enabled for ABP Studio integration
- Health checks at `/health` endpoint with UI at `/health-ui`

### Blob Storage

Uses ABP's **BlobStoring.Database** module for storing files/images in the database (not filesystem).

## Development Conventions

### Code Style

- Follow ABP Framework conventions (naming, DI, async/await)
- Use `Nullable` and `ImplicitUsings` enabled (C# 10+ features)
- Entities go in `Entities/`, services in `Services/`, controllers in `Controllers/`

### Testing

- Test project uses **xUnit**, **NSubstitute** (mocking), and **Shouldly** (assertions)
- Tests are in `ShowZen.Tests/`

### Localization

- JSON-based localization files in `Localization/ShowZen/`
- Embedded as resources in the project

## Deployment

- Docker images built via PowerShell scripts in `etc/build/`
- Docker Compose deployment via scripts in `etc/docker/`
- Health checks and readiness probes configured
- Database migrations auto-run on startup with `--migrate-database`
- Production settings in `appsettings.Production.json`

## Related Resources

### SaaS Playbook (`saas-clawds/`)

The `saas-clawds/` directory contains a comprehensive **SaaS Playbook** with 26 departments covering the full SaaS lifecycle (Idea → Validation → Planning → Development → Launch → Growth → Scaling). This is a **separate business planning framework** and is not part of the codebase. Use it for reference when working on business logic or feature planning.

### ABP Knowledge Base (`ABP_PROJECT_KNOWLEDGE_BASE.md`)

A comprehensive ABP.io reference guide in Portuguese, created from experience with a previous project (ZenDoctor). Covers DDD patterns, EF Core configuration, Application Services, API controllers, troubleshooting, and project checklists.

### Project Documentation (`docs/`)

Contains planning documents including:
- VPS deployment guide
- System entity definitions
- Financial plans
- Marketing plan
- Feature planning documents
- Product requirements documents

## Important Notes

1. **HTTPS certificate** is only valid for `localhost` domain (use LetsEncrypt for production)
2. **CORS origins** configured for `http://localhost:4200` (Angular dev server)
3. **Self URL** is `https://localhost:44353`
4. The solution uses `.slnx` format (new .NET solution file format) instead of `.sln`
5. **ABP install-libs** must be run after cloning to install client-side dependencies
