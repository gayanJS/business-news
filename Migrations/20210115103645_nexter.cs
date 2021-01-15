using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessNewsReact.Migrations
{
    public partial class nexter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Readers_ReaderForeignKey",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_ReaderForeignKey",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ReaderForeignKey",
                table: "Users");

            migrationBuilder.AddColumn<int>(
                name: "UserForeignKey",
                table: "Readers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Readers_UserForeignKey",
                table: "Readers",
                column: "UserForeignKey",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Readers_Users_UserForeignKey",
                table: "Readers",
                column: "UserForeignKey",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Readers_Users_UserForeignKey",
                table: "Readers");

            migrationBuilder.DropIndex(
                name: "IX_Readers_UserForeignKey",
                table: "Readers");

            migrationBuilder.DropColumn(
                name: "UserForeignKey",
                table: "Readers");

            migrationBuilder.AddColumn<int>(
                name: "ReaderForeignKey",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ReaderForeignKey",
                table: "Users",
                column: "ReaderForeignKey",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Readers_ReaderForeignKey",
                table: "Users",
                column: "ReaderForeignKey",
                principalTable: "Readers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
