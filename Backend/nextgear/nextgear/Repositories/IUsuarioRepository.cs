using nextgear.Models;

namespace nextgear.Repositories
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario Usuario);
        void Deletar(Usuario Usuario);
        void Editar(Usuario Usuario);
        Usuario ListarUmUsuario(int id);
        Usuario ListarUmUsuario(string p_usuario, string senha);
        bool Login(string p_usuario, string senha);
    }
}