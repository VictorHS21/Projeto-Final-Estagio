﻿// <auto-generated />
using AtividadeAPI.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AtividadeAPI.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AtividadeAPI.Models.Usuarios", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("VARCHAR(80)");

                    b.Property<string>("BirthDayUser")
                        .IsRequired()
                        .HasColumnType("CHAR(17)");

                    b.Property<string>("EmailUser")
                        .IsRequired()
                        .HasColumnType("VARCHAR(80)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("VARCHAR(80)");

                    b.Property<string>("PasswordUser")
                        .IsRequired()
                        .HasColumnType("CHAR(16)");

                    b.Property<string>("PhoneUser")
                        .HasColumnType("CHAR(15)");

                    b.HasKey("Id");

                    b.ToTable("Usuarios");
                });
#pragma warning restore 612, 618
        }
    }
}
