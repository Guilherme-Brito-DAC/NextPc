using nextgear.Models;

namespace nextgear.Repositories
{
    public interface IPecasRepository
    {
        void CriarArmazenamento(Armazenamento armazenamento);
        void CriarCpu(Cpu cpu);
        void CriarFonte(Fonte fonte);
        void CriarGpu(Gpu gpu);
        void CriarPlaca_mae(Placa_mae placa_mae);
        void CriarRam(Ram ram);
        void DeletarArmazenamento(Armazenamento armazenamento);
        void DeletarCpu(Cpu cpu);
        void DeletarFonte(Fonte fonte);
        void DeletarGpu(Gpu gpu);
        void DeletarPlaca_mae(Placa_mae placa_mae);
        void DeletarRam(Ram ram);
        void EditarArmazenamento(Armazenamento armazenamento);
        void EditarCpu(Cpu cpu);
        void EditarFonte(Fonte fonte);
        void EditarGpu(Gpu gpu);
        void EditarPlaca_mae(Placa_mae placa_mae);
        void EditarRam(Ram ram);
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