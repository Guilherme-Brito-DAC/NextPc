using Nextgear.Models;
using System.Collections.Generic;
using System.Linq;

namespace Nextgear.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ApplicationContext contexto;

        public UsuarioRepository(ApplicationContext _contexto)
        {
            contexto = _contexto;
        }

        public List<Usuario> RecuperarTodosUsuario()
        {
            return contexto.Usuarios.ToList();
        }

        public Usuario RecuperarPorUsuario(int id)
        {
            return contexto.Usuarios.Where(u => u.id == id).FirstOrDefault();
        }
        
        public void CadastrarUsuario(Usuario usuario)
        {
            contexto.Usuarios.Add(usuario);
            contexto.SaveChanges();
        }

        public void EditarUsuario(Usuario usuario)
        {
            contexto.Usuarios.Update(usuario);
            contexto.SaveChanges();
        }

        public void DeletarUsuario(Usuario usuario)
        {
            contexto.Usuarios.Remove(usuario);
            contexto.SaveChanges();
        }
    }
}
