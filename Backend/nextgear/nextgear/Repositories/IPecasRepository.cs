using nextgear.Models;

namespace nextgear.Repositories
{
    public interface IPecasRepository
    {
        Paginacao<Armazenamento> ListarArmazenamento(string pesquisa, int pagina);
        Paginacao<Cpu> ListarCpu(string pesquisa, int pagina);
        Paginacao<Fonte> ListarFonte(string pesquisa, int pagina);
        Paginacao<Gpu> ListarGpu(string pesquisa, int pagina);
        Paginacao<Placa_mae> ListarPlacaMae(string pesquisa, int pagina);
        Paginacao<Ram> ListarRam(string pesquisa, int pagina);
        Cpu ListarUmaCpu(int id);
        Fonte ListarUmaFonte(int id);
        Gpu ListarUmaGpu(int id);
        Placa_mae ListarUmaPlacaMae(int id);
        Ram ListarUmaRam(int id);
        Armazenamento ListarUmArmazenamento(int id);
    }
}