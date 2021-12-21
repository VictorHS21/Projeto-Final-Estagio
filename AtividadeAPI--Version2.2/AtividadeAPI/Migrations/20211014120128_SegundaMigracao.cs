using Microsoft.EntityFrameworkCore.Migrations;

namespace AtividadeAPI.Migrations
{
    public partial class SegundaMigracao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneUser",
                table: "Usuarios",
                type: "CHAR(15)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "VARCHAR(80)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "PasswordUser",
                table: "Usuarios",
                type: "CHAR(16)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(80)");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "Usuarios",
                type: "VARCHAR(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(80)");

            migrationBuilder.AlterColumn<string>(
                name: "BirthDayUser",
                table: "Usuarios",
                type: "CHAR(17)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(80)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PhoneUser",
                table: "Usuarios",
                type: "VARCHAR(80)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "CHAR(15)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "PasswordUser",
                table: "Usuarios",
                type: "VARCHAR(80)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "CHAR(16)");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "Usuarios",
                type: "VARCHAR(80)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(50)");

            migrationBuilder.AlterColumn<string>(
                name: "BirthDayUser",
                table: "Usuarios",
                type: "VARCHAR(80)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "CHAR(17)");
        }
    }
}
