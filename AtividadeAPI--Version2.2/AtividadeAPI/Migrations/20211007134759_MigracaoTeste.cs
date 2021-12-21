using Microsoft.EntityFrameworkCore.Migrations;

namespace AtividadeAPI.Migrations
{
    public partial class MigracaoTeste : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<string>(type: "VARCHAR(80)", nullable: false),
                    FirstName = table.Column<string>(type: "VARCHAR(80)", nullable: false),
                    LastName = table.Column<string>(type: "VARCHAR(80)", nullable: false),
                    EmailUser = table.Column<string>(type: "VARCHAR(80)", nullable: false),
                    PhoneUser = table.Column<string>(type: "VARCHAR(80)", nullable: true),
                    BirthDayUser = table.Column<string>(type: "VARCHAR(80)", nullable: false),
                    PasswordUser = table.Column<string>(type: "VARCHAR(80)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
