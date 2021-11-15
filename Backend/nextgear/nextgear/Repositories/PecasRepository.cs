using Microsoft.EntityFrameworkCore;
using nextgear.Models;
using System.Linq;
using System.Linq.Dynamic.Core;

namespace nextgear.Repositories
{
    public class PecasRepository : BaseRepository, IPecasRepository
    {
        private readonly DbSet<Ram> Ram;
        private readonly DbSet<Placa_mae> Placa_mae;
        private readonly DbSet<Cpu> Cpu;
        private readonly DbSet<Gpu> Gpu;
        private readonly DbSet<Fonte> Fonte;
        private readonly DbSet<Armazenamento> Armazenamento;

        public PecasRepository(ApplicationContext context) : base(context)
        {
            Ram = context.Set<Ram>();
            Placa_mae = context.Set<Placa_mae>();
            Cpu = context.Set<Cpu>();
            Gpu = context.Set<Gpu>();
            Fonte = context.Set<Fonte>();
            Armazenamento = context.Set<Armazenamento>();
        }

        public Paginacao<Ram> ListarRam(string pesquisa, int pagina)
        {
            var ram = string.IsNullOrEmpty(pesquisa) ? Ram.ToList() : Ram.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();

            return Paginacao<Ram>.ToPaginacao(ram, pagina);
        }

        public Paginacao<Armazenamento> ListarArmazenamento(string pesquisa, int pagina)
        {
            var armazenamento = string.IsNullOrEmpty(pesquisa) ? Armazenamento.ToList() : Armazenamento.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();

            return Paginacao<Armazenamento>.ToPaginacao(armazenamento, pagina);
        }

        public Paginacao<Placa_mae> ListarPlacaMae(string pesquisa, int pagina)
        {
            var placa_mae = string.IsNullOrEmpty(pesquisa) ? Placa_mae.ToList() : Placa_mae.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();

            return Paginacao<Placa_mae>.ToPaginacao(placa_mae, pagina);
        }

        public Paginacao<Cpu> ListarCpu(string pesquisa, int pagina)
        {
            var cpu = string.IsNullOrEmpty(pesquisa) ? Cpu.ToList() : Cpu.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();

            return Paginacao<Cpu>.ToPaginacao(cpu, pagina);
        }

        public Paginacao<Gpu> ListarGpu(string pesquisa, int pagina)
        {
            var gpu = string.IsNullOrEmpty(pesquisa) ? Gpu.ToList() : Gpu.Where(p => p.chipset.Contains(pesquisa.ToLower()) == true).ToList();

            return Paginacao<Gpu>.ToPaginacao(gpu, pagina);
        }

        public Paginacao<Fonte> ListarFonte(string pesquisa, int pagina)
        {
            var fonte = string.IsNullOrEmpty(pesquisa) ? Fonte.ToList() : Fonte.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();

            return Paginacao<Fonte>.ToPaginacao(fonte, pagina);
        }

        public Ram ListarUmaRam(int id)
        {
            return Ram.Where(p => p.id == id).SingleOrDefault();
        }

        public Armazenamento ListarUmArmazenamento(int id)
        {
            return Armazenamento.Where(p => p.id == id).SingleOrDefault();
        }

        public Placa_mae ListarUmaPlacaMae(int id)
        {
            return Placa_mae.Where(p => p.id == id).SingleOrDefault();
        }

        public Cpu ListarUmaCpu(int id)
        {
            return Cpu.Where(p => p.id == id).SingleOrDefault();
        }

        public Gpu ListarUmaGpu(int id)
        {
            return Gpu.Where(p => p.id == id).SingleOrDefault();
        }

        public Fonte ListarUmaFonte(int id)
        {
            return Fonte.Where(p => p.id == id).SingleOrDefault();
        }
    }
}
