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
    }
}