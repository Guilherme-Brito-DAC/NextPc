using Microsoft.EntityFrameworkCore;
using nextgear.Models;
using System.Linq;

namespace nextgear.Repositories
{
    public class UsuarioRepository : BaseRepository, IUsuarioRepository
    {
        private readonly DbSet<Usuario> _Usuario;

        public UsuarioRepository(ApplicationContext context) : base(context)
        {
            _Usuario = context.Set<Usuario>();
        }

        public bool Login(string p_usuario, string senha)
        {
            var usuario = _Usuario.Where(u => u.usuario.ToLower() == p_usuario.ToLower() && u.senha.ToLower() == senha.ToLower()).ToList().Count();

            return usuario > 0 ? true : false;
        }

        public void Cadastrar(Usuario Usuario)
        {
            _Usuario.Add(Usuario);
            context.SaveChanges();
        }

        public void Editar(Usuario Usuario)
        {
            _Usuario.Update(Usuario);
            context.SaveChanges();
        }

        public void Deletar(Usuario Usuario)
        {
            _Usuario.Remove(Usuario);
            context.SaveChanges();
        }

        public Usuario ListarUmUsuario(string p_usuario, string senha)
        {
            return _Usuario.Where(u => u.usuario.ToLower() == p_usuario.ToLower() && u.senha.ToLower() == senha.ToLower()).ToList().SingleOrDefault();
        }

        public Usuario ListarUmUsuario(int id)
        {
            return _Usuario.Where(u => u.id == id).ToList().SingleOrDefault();
        }
    }
}
