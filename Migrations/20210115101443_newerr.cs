using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessNewsReact.Migrations
{
    public partial class newerr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Authors_Users_UserId",
                table: "Authors");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Readers_ReaderId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "ReaderId",
                table: "Users",
                newName: "ReaderForeignKey");

            migrationBuilder.RenameIndex(
                name: "IX_Users_ReaderId",
                table: "Users",
                newName: "IX_Users_ReaderForeignKey");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Authors",
                newName: "UserForeignKey");

            migrationBuilder.RenameIndex(
                name: "IX_Authors_UserId",
                table: "Authors",
                newName: "IX_Authors_UserForeignKey");

            migrationBuilder.AddForeignKey(
                name: "FK_Authors_Users_UserForeignKey",
                table: "Authors",
                column: "UserForeignKey",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Readers_ReaderForeignKey",
                table: "Users",
                column: "ReaderForeignKey",
                principalTable: "Readers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Authors_Users_UserForeignKey",
                table: "Authors");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Readers_ReaderForeignKey",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "ReaderForeignKey",
                table: "Users",
                newName: "ReaderId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_ReaderForeignKey",
                table: "Users",
                newName: "IX_Users_ReaderId");

            migrationBuilder.RenameColumn(
                name: "UserForeignKey",
                table: "Authors",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Authors_UserForeignKey",
                table: "Authors",
                newName: "IX_Authors_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Authors_Users_UserId",
                table: "Authors",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Readers_ReaderId",
                table: "Users",
                column: "ReaderId",
                principalTable: "Readers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
