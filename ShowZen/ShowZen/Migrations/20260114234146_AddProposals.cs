using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShowZen.Migrations
{
    /// <inheritdoc />
    public partial class AddProposals : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProposalTemplateUrl",
                table: "AppArtists",
                type: "text",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppProposals",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EventId = table.Column<Guid>(type: "uuid", nullable: false),
                    UniqueToken = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    GeneratedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    ExpiresAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    ViewCount = table.Column<int>(type: "integer", nullable: false),
                    PdfPath = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    Status = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppProposals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppProposals_AppEvents_EventId",
                        column: x => x.EventId,
                        principalTable: "AppEvents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AppProposalViews",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProposalId = table.Column<Guid>(type: "uuid", nullable: false),
                    ViewedAt = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    IpAddress = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: true),
                    UserAgent = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppProposalViews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppProposalViews_AppProposals_ProposalId",
                        column: x => x.ProposalId,
                        principalTable: "AppProposals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppProposals_EventId",
                table: "AppProposals",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProposals_Status",
                table: "AppProposals",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_AppProposals_UniqueToken",
                table: "AppProposals",
                column: "UniqueToken",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppProposalViews_ProposalId",
                table: "AppProposalViews",
                column: "ProposalId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProposalViews_ViewedAt",
                table: "AppProposalViews",
                column: "ViewedAt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppProposalViews");

            migrationBuilder.DropTable(
                name: "AppProposals");

            migrationBuilder.DropColumn(
                name: "ProposalTemplateUrl",
                table: "AppArtists");
        }
    }
}
