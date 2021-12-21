using AtividadeAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AtividadeAPI.Controllers.Configurations
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuarios>
    {
        public void Configure(EntityTypeBuilder<Usuarios> builder)
        {
            builder.ToTable("Usuarios");
            builder.Property(p => p.Id).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(p => p.FirstName).HasColumnType("VARCHAR(50)").IsRequired();
            builder.Property(p => p.LastName).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(p => p.EmailUser).HasColumnType("VARCHAR(80)").IsRequired();
            builder.Property(p => p.PhoneUser).HasColumnType("CHAR(15)");
            builder.Property(p => p.BirthDayUser).HasColumnType("CHAR(17)").IsRequired();
            builder.Property(p => p.PasswordUser).HasColumnType("CHAR(16)").IsRequired();
        }
    }
}
