using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessNewsReact.Migrations
{
    public partial class removename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "03b6a554-e45f-4fa8-9e9c-309cd109046a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "a51d12d5-789f-4244-9254-1879d606d05b");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Users",
                newName: "Name");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8d1a9d9f-bd2e-4488-995e-5aca05a6bd1a", "474a0665-d593-469f-ad29-fd306c3198b6", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e6b903ca-bf6a-4b24-bf3e-20323bac47c5", "6974a2d3-2e0e-4dde-93fc-ea249ad06bb5", "Administrator", "ADMINISTRATOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "8d1a9d9f-bd2e-4488-995e-5aca05a6bd1a");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "e6b903ca-bf6a-4b24-bf3e-20323bac47c5");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Users",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "03b6a554-e45f-4fa8-9e9c-309cd109046a", "65669aa2-8196-443b-8dde-5b955248cd9a", "Visitor", "VISITOR" });

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a51d12d5-789f-4244-9254-1879d606d05b", "d917b0aa-d5ef-4950-99a1-40e8eeb62a68", "Administrator", "ADMINISTRATOR" });
        }
    }
}
