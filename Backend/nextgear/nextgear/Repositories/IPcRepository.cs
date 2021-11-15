using nextgear.Models;

namespace nextgear.Repositories
{
    public interface IPcRepository
    {
        void Criar(Pc Pc);
        void Deletar(Pc Pc);
        void Editar(Pc Pc);
        Paginacao<PcView> ListarPcs(string pesquisa, int pagina);
        Paginacao<PcView> ListarPcsDoUsuario(int id, int pagina);
        PcView ListarUmPc(int id);
    }
}