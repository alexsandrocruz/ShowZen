# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ShowZen is a SaaS application built with ABP Framework (ASP.NET Boilerplate) using a single-layer architecture. The project consists of:
- **Backend**: .NET 10.0 Web API with ABP Framework modules
- **Frontend**: Angular 20+ application
- **Database**: PostgreSQL with Entity Framework Core
- **Caching**: Redis
- **Infrastructure**: Docker containers for development and deployment

## Development Environment Setup

### Prerequisites
- .NET 10.0+ SDK
- Node.js 18 or 20
- Docker Desktop (for PostgreSQL and Redis)
- ABP CLI: `dotnet tool install -g Volo.Abp.Cli`

### Initial Setup
1. **Install client-side libraries**: Run `abp install-libs` in the solution directory
2. **Generate signing certificate** (if needed):
   ```bash
   dotnet dev-certs https -v -ep openiddict.pfx -p be952743-47b9-468d-8cbd-02eb436264ef
   ```
3. **Start infrastructure**: Use `docker-compose up` in the root directory to start PostgreSQL (port 5434) and Redis (port 6381)

## Common Development Commands

### Backend (.NET)
- **Run the application**: `dotnet run --project ShowZen/ShowZen`
- **Run with database migration**: `dotnet run --project ShowZen/ShowZen -- --migrate-database`
- **Run tests**: `dotnet test ShowZen/ShowZen.Tests`
- **Add EF Core migration**: `dotnet ef migrations add <MigrationName> --project ShowZen/ShowZen`
- **Update database**: `dotnet ef database update --project ShowZen/ShowZen`

### Frontend (Angular)
- **Start development server**: `cd ShowZen/angular && npm start` or `ng serve`
- **Build for production**: `cd ShowZen/angular && npm run build:prod`
- **Run tests**: `cd ShowZen/angular && npm test`
- **Lint code**: `cd ShowZen/angular && npm run lint`

### Docker Operations
- **Build images locally**: Run `ShowZen/etc/build/build-images-locally.ps1`
- **Run with Docker Compose**: Run `ShowZen/etc/docker/run-docker.ps1`
- **Stop containers**: Run `ShowZen/etc/docker/stop-docker.ps1`

## Architecture

### ABP Framework Structure
The application follows ABP Framework's single-layer template with these key modules:
- **Account**: Authentication and user management
- **Identity**: User and role management
- **Tenant Management**: Multi-tenancy support
- **Permission Management**: Role-based access control
- **Feature Management**: Feature flag system
- **Setting Management**: Application settings
- **OpenIddict**: OAuth2/OpenID Connect implementation

### Project Structure
- `ShowZen/ShowZen/`: Main .NET application
  - `Controllers/`: API endpoints
  - `Data/`: Database context and migrations
  - `Entities/`: Domain entities
  - `Services/`: Application services
  - `Migrations/`: Entity Framework Core migrations
- `ShowZen/angular/`: Angular frontend application
- `ShowZen/ShowZen.Tests/`: xUnit test project
- `saas-clawds/`: SaaS framework documentation and planning (separate from codebase)
- `docs/`: Project documentation and planning

### Key Dependencies
- **Backend**: ABP Framework 10.0.1, PostgreSQL EF Core provider, OpenIddict, Serilog
- **Frontend**: ABP Angular packages 10.0.1, Bootstrap 5, FullCalendar, Chart.js, ECharts
- **PDF Generation**: iText7, QuestPDF
- **Testing**: xUnit, NSubstitute, Shouldly

## Database Configuration
- **Default connection string**: PostgreSQL at `localhost:5434` with database `ShowZen`
- **Credentials**: `postgres/showzen123`
- **Redis**: `localhost:6381` for caching and distributed locking
- **Migrations**: Managed via Entity Framework Core with automatic migration on startup (when `--migrate-database` flag is used)

## Authentication & Authorization
- Uses OpenIddict for token-based authentication
- JWT tokens with RSA signing certificate (`openiddict.pfx`)
- Built-in multi-tenancy support
- Permission-based authorization system

## SaaS Framework Integration
The repository includes `saas-clawds/` directory which contains a comprehensive SaaS playbook with 26 departments (01-idea through 26-people-and-culture). This is a separate framework for SaaS business planning and should be referenced when working on business logic or feature planning.

## Important Notes
1. **Database timestamps**: Legacy timestamp behavior is enabled for Npgsql compatibility
2. **Health checks**: Available at `/health` endpoint with UI at `/health-ui`
3. **Logging**: Serilog configured with file (`Logs/logs.txt`) and console output
4. **Localization**: JSON-based localization files in `ShowZen/ShowZen/Localization/`
5. **Blob storage**: Database-based blob storage using ABP's BlobStoring module

## Deployment
- Docker images can be built using provided PowerShell scripts in `etc/build/`
- Production deployment uses separate `appsettings.Production.json`
- Health checks and readiness probes configured for container orchestration
- Database migrations run automatically on application startup with `--migrate-database` flag