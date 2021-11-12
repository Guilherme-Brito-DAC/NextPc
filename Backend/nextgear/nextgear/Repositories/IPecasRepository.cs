using nextgear.Models;
using System.Collections.Generic;

namespace nextgear.Repositories
{
    public interface IPecasRepository
    {
        IList<Armazenamento> ListarArmazenamento();
        IList<Cpu> ListarCpu();
        IList<Fonte> ListarFonte();
        IList<Gpu> ListarGpu();
        IList<Placa_mae> ListarPlacaMae();
        IList<Ram> ListarRam();
        Cpu ListarUmaCpu(int id);
        Fonte ListarUmaFonte(int id);
        Gpu ListarUmaGpu(int id);
        Placa_mae ListarUmaPlacaMae(int id);
        Ram ListarUmaRam(int id);
        Armazenamento ListarUmArmazenamento(int id);
        IList<Armazenamento> PesquisarArmazenamento(string pesquisa);
        IList<Cpu> PesquisarCpu(string pesquisa);
        IList<Fonte> PesquisarFonte(string pesquisa);
        IList<Gpu> PesquisarGpu(string pesquisa);
        IList<Placa_mae> PesquisarPlaca_mae(string pesquisa);
        IList<Ram> PesquisarRam(string pesquisa);
    }
}