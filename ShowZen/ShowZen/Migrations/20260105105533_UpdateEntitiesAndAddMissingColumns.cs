using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShowZen.Migrations
{
    /// <inheritdoc />
    public partial class UpdateEntitiesAndAddMissingColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ContractType",
                table: "AppEvents",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "DiscountValue",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Duration",
                table: "AppEvents",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "GuaranteeValue",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "HasProduction",
                table: "AppEvents",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "LocalPartnerId",
                table: "AppEvents",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NegotiationType",
                table: "AppEvents",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "ProductionPercentage",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "ProductionValue",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StartTime",
                table: "AppEvents",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "TaxPercentage",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "TaxValue",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "TicketPercentage",
                table: "AppEvents",
                type: "numeric(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BannerUrl",
                table: "AppArtists",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "DefaultTaxPercentage",
                table: "AppArtists",
                type: "numeric(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "HexColor",
                table: "AppArtists",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LogoUrl",
                table: "AppArtists",
                type: "text",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppEventCommissions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    EventId = table.Column<Guid>(type: "uuid", nullable: false),
                    Description = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    Value = table.Column<decimal>(type: "numeric(18,2)", nullable: false),
                    Percentage = table.Column<decimal>(type: "numeric(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppEventCommissions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppEventCommissions_AppEvents_EventId",
                        column: x => x.EventId,
                        principalTable: "AppEvents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppEvents_LocalPartnerId",
                table: "AppEvents",
                column: "LocalPartnerId");

            migrationBuilder.CreateIndex(
                name: "IX_AppEventCommissions_EventId",
                table: "AppEventCommissions",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppEvents_AppClients_LocalPartnerId",
                table: "AppEvents",
                column: "LocalPartnerId",
                principalTable: "AppClients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppEvents_AppClients_LocalPartnerId",
                table: "AppEvents");

            migrationBuilder.DropTable(
                name: "AppEventCommissions");

            migrationBuilder.DropIndex(
                name: "IX_AppEvents_LocalPartnerId",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "ContractType",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "DiscountValue",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "Duration",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "GuaranteeValue",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "HasProduction",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "LocalPartnerId",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "NegotiationType",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "ProductionPercentage",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "ProductionValue",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "StartTime",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "TaxPercentage",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "TaxValue",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "TicketPercentage",
                table: "AppEvents");

            migrationBuilder.DropColumn(
                name: "BannerUrl",
                table: "AppArtists");

            migrationBuilder.DropColumn(
                name: "DefaultTaxPercentage",
                table: "AppArtists");

            migrationBuilder.DropColumn(
                name: "HexColor",
                table: "AppArtists");

            migrationBuilder.DropColumn(
                name: "LogoUrl",
                table: "AppArtists");
        }
    }
}
