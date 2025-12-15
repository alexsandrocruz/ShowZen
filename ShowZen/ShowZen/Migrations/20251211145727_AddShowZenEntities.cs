using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShowZen.Migrations
{
    /// <inheritdoc />
    public partial class AddShowZenEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppArtists",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<Guid>(type: "uuid", nullable: true),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Biography = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: false),
                    PhotoUrl = table.Column<string>(type: "text", nullable: true),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    InstagramHandle = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    WebsiteUrl = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    ExtraProperties = table.Column<string>(type: "text", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uuid", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppArtists", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppClients",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<Guid>(type: "uuid", nullable: true),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Document = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Phone = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Address = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    City = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: true),
                    State = table.Column<string>(type: "character varying(2)", maxLength: 2, nullable: true),
                    Notes = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    LeadStatus = table.Column<int>(type: "integer", nullable: false),
                    FirstContactDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastContactDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    ExtraProperties = table.Column<string>(type: "text", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uuid", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppClients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppLocations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<Guid>(type: "uuid", nullable: true),
                    Name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Address = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    City = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    State = table.Column<string>(type: "character varying(2)", maxLength: 2, nullable: false),
                    ZipCode = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: true),
                    Capacity = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    Notes = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppLocations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppArtistSpecialties",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ArtistId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppArtistSpecialties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppArtistSpecialties_AppArtists_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "AppArtists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppAvailabilities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<Guid>(type: "uuid", nullable: true),
                    ArtistId = table.Column<Guid>(type: "uuid", nullable: false),
                    StartDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    EndDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Notes = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppAvailabilities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppAvailabilities_AppArtists_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "AppArtists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppEvents",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    TenantId = table.Column<Guid>(type: "uuid", nullable: true),
                    Title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    StartDateTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    EndDateTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    ArtistId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClientId = table.Column<Guid>(type: "uuid", nullable: false),
                    LocationId = table.Column<Guid>(type: "uuid", nullable: false),
                    Description = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    ExpectedAudience = table.Column<int>(type: "integer", nullable: true),
                    Fee = table.Column<decimal>(type: "numeric(18,2)", nullable: true),
                    Notes = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: true),
                    HasConflict = table.Column<bool>(type: "boolean", nullable: false),
                    SuggestedAlternativeArtistId = table.Column<Guid>(type: "uuid", nullable: true),
                    ExtraProperties = table.Column<string>(type: "text", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uuid", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppEvents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppEvents_AppArtists_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "AppArtists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AppEvents_AppClients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "AppClients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AppEvents_AppLocations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "AppLocations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppArtists_Name",
                table: "AppArtists",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_AppArtists_TenantId",
                table: "AppArtists",
                column: "TenantId");

            migrationBuilder.CreateIndex(
                name: "IX_AppArtistSpecialties_ArtistId",
                table: "AppArtistSpecialties",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_AppAvailabilities_ArtistId",
                table: "AppAvailabilities",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_AppAvailabilities_ArtistId_StartDate_EndDate",
                table: "AppAvailabilities",
                columns: new[] { "ArtistId", "StartDate", "EndDate" });

            migrationBuilder.CreateIndex(
                name: "IX_AppAvailabilities_TenantId",
                table: "AppAvailabilities",
                column: "TenantId");

            migrationBuilder.CreateIndex(
                name: "IX_AppClients_LeadStatus",
                table: "AppClients",
                column: "LeadStatus");

            migrationBuilder.CreateIndex(
                name: "IX_AppClients_Name",
                table: "AppClients",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_AppClients_TenantId",
                table: "AppClients",
                column: "TenantId");

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_ArtistId",
                table: "AppEvents",
                column: "ArtistId");

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_ArtistId_StartDateTime",
                table: "AppEvents",
                columns: new[] { "ArtistId", "StartDateTime" });

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_ClientId",
                table: "AppEvents",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_LocationId",
                table: "AppEvents",
                column: "LocationId");

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_Status",
                table: "AppEvents",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_TenantId",
                table: "AppEvents",
                column: "TenantId");

            migrationBuilder.CreateIndex(
                name: "IX_AppLocations_TenantId",
                table: "AppLocations",
                column: "TenantId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppArtistSpecialties");

            migrationBuilder.DropTable(
                name: "AppAvailabilities");

            migrationBuilder.DropTable(
                name: "AppEvents");

            migrationBuilder.DropTable(
                name: "AppArtists");

            migrationBuilder.DropTable(
                name: "AppClients");

            migrationBuilder.DropTable(
                name: "AppLocations");
        }
    }
}
