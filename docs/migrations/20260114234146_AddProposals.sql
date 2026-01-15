-- Migration: AddProposals
-- Date: 2026-01-14
-- Description: Adds Proposal system tables and ProposalTemplateUrl to Artists

-- 1. Add ProposalTemplateUrl column to AppArtists
ALTER TABLE "AppArtists" ADD COLUMN IF NOT EXISTS "ProposalTemplateUrl" VARCHAR(500) NULL;

-- 2. Create AppProposals table
CREATE TABLE IF NOT EXISTS "AppProposals" (
    "Id" UUID PRIMARY KEY,
    "EventId" UUID NOT NULL,
    "UniqueToken" VARCHAR(100) NOT NULL,
    "GeneratedAt" TIMESTAMP NOT NULL,
    "ExpiresAt" TIMESTAMP NOT NULL,
    "ViewCount" INT DEFAULT 0,
    "PdfPath" VARCHAR(500),
    "Status" INT NOT NULL,
    "ConcurrencyStamp" VARCHAR(40),
    "ExtraProperties" TEXT,
    "CreationTime" TIMESTAMP NOT NULL,
    "CreatorId" UUID,
    "LastModificationTime" TIMESTAMP,
    "LastModifierId" UUID,
    CONSTRAINT "FK_AppProposals_AppEvents_EventId" FOREIGN KEY ("EventId") REFERENCES "AppEvents"("Id") ON DELETE RESTRICT
);

-- 3. Create indexes for AppProposals
CREATE UNIQUE INDEX IF NOT EXISTS "IX_AppProposals_UniqueToken" ON "AppProposals"("UniqueToken");
CREATE INDEX IF NOT EXISTS "IX_AppProposals_EventId" ON "AppProposals"("EventId");
CREATE INDEX IF NOT EXISTS "IX_AppProposals_Status" ON "AppProposals"("Status");

-- 4. Create AppProposalViews table
CREATE TABLE IF NOT EXISTS "AppProposalViews" (
    "Id" UUID PRIMARY KEY,
    "ProposalId" UUID NOT NULL,
    "ViewedAt" TIMESTAMP NOT NULL,
    "IpAddress" VARCHAR(50),
    "UserAgent" VARCHAR(500),
    "ConcurrencyStamp" VARCHAR(40),
    "ExtraProperties" TEXT,
    "CreationTime" TIMESTAMP NOT NULL,
    "CreatorId" UUID,
    CONSTRAINT "FK_AppProposalViews_AppProposals_ProposalId" FOREIGN KEY ("ProposalId") REFERENCES "AppProposals"("Id") ON DELETE CASCADE
);

-- 5. Create indexes for AppProposalViews
CREATE INDEX IF NOT EXISTS "IX_AppProposalViews_ProposalId" ON "AppProposalViews"("ProposalId");
CREATE INDEX IF NOT EXISTS "IX_AppProposalViews_ViewedAt" ON "AppProposalViews"("ViewedAt");

-- 6. Register migration in EF history
INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
SELECT '20260114234146_AddProposals', '9.0.0'
WHERE NOT EXISTS (
    SELECT 1 FROM "__EFMigrationsHistory" 
    WHERE "MigrationId" = '20260114234146_AddProposals'
);
