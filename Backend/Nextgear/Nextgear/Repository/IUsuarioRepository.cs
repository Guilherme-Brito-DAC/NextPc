using Nextgear.Models;
using System.Collections.Generic;

namespace Nextgear.Repository
{
    public interface IUsuarioRepository
    {
        void CadastrarUsuario(Usuario usuario);
        void EditarUsuario(Usuario usuario);
        void DeletarUsuario(Usuario usuario);
        List<Usuario> RecuperarTodosUsuario();
        Usuario RecuperarPorUsuario(int id);
    }
}