using nextgear.Models;

namespace nextgear.Repositories
{
    public interface IPecasRepository
    {
        Paginacao<Armazenamento> ListarArmazenamento(string ordenar, string pesquisa, int pagina);
        Paginacao<Cpu> ListarCpu(string ordenar, string pesquisa, int pagina);
        Paginacao<Fonte> ListarFonte(string ordenar, string pesquisa, int pagina);
        Paginacao<Gpu> ListarGpu(string ordenar, string pesquisa, int pagina);
        Paginacao<Placa_mae> ListarPlacaMae(string ordenar, string pesquisa, int pagina);
        Paginacao<Ram> ListarRam(string ordenar, string pesquisa, int pagina);
        Cpu ListarUmaCpu(int id);
        Fonte ListarUmaFonte(int id);
        Gpu ListarUmaGpu(int id);
        Placa_mae ListarUmaPlacaMae(int id);
        Ram ListarUmaRam(int id);
        Armazenamento ListarUmArmazenamento(int id);
    }
}