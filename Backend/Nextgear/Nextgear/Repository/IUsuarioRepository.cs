using Nextgear.Models;
using System.Collections.Generic;

namespace Nextgear.Repository
{
    public interface IUsuarioRepository
    {
        //CRUD
        void CadastrarUsuario(Usuario usuario);
        void EditarUsuario(Usuario usuario);
        void DeletarUsuario(Usuario usuario);
        List<Usuario> RecuperarTodosUsuario();
        Usuario RecuperarPorUsuario(UsuarioLogin usuario);
        Usuario RecuperarPorUsuario(int id);

        //Sistema de login
        bool Login(UsuarioLogin usuario);
    }
}