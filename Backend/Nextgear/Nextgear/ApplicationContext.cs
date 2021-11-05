using Microsoft.EntityFrameworkCore;
using Nextgear.Models;

namespace Nextgear
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options): base(options) 
        {

        }

        public ApplicationContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pc>().HasKey(t => t.id);

            modelBuilder.Entity<Usuario>().HasKey(t => t.id);
        }
    }
}