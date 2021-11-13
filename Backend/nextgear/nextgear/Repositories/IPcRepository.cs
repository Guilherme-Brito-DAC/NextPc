using nextgear.Models;

namespace nextgear.Repositories
{
    public interface IPcRepository
    {
        void Criar(Pc Pc);
        void Deletar(Pc Pc);
        void Editar(Pc Pc);
        Paginacao<PcView> ListarPcs(string ordenar, string pesquisa, int pagina);
        PcView ListarUmPc(int id);
        Paginacao<PcView> ListarPcsDoUsuario(string ordenar, int id, int pagina);
    }
}