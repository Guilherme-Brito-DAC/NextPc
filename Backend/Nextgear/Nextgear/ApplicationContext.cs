using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using nextgear.Models;

namespace nextgear
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext([NotNullAttribute] DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Armazenamento>().HasKey(t => t.id);
            modelBuilder.Entity<Cpu>().HasKey(t => t.id);
            modelBuilder.Entity<Gpu>().HasKey(t => t.id);
            modelBuilder.Entity<Fonte>().HasKey(t => t.id);
            modelBuilder.Entity<Placa_mae>().HasKey(t => t.id);
            modelBuilder.Entity<Ram>().HasKey(t => t.id);
            modelBuilder.Entity<Usuario>().HasKey(t => t.id);
        }
    }
}