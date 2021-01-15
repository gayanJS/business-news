using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessNewsReact.Migrations
{
    public partial class entity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AuthorId",
                table: "News",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "NewsReader",
                columns: table => new
                {
                    NewsId = table.Column<int>(type: "int", nullable: false),
                    ReadersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsReader", x => new { x.NewsId, x.ReadersId });
                    table.ForeignKey(
                        name: "FK_NewsReader_News_NewsId",
                        column: x => x.NewsId,
                        principalTable: "News",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NewsReader_Readers_ReadersId",
                        column: x => x.ReadersId,
                        principalTable: "Readers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_News_AuthorId",
                table: "News",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsReader_ReadersId",
                table: "NewsReader",
                column: "ReadersId");

            migrationBuilder.AddForeignKey(
                name: "FK_News_Authors_AuthorId",
                table: "News",
                column: "AuthorId",
                principalTable: "Authors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_News_Authors_AuthorId",
                table: "News");

            migrationBuilder.DropTable(
                name: "NewsReader");

            migrationBuilder.DropIndex(
                name: "IX_News_AuthorId",
                table: "News");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "News");
        }
    }
}
