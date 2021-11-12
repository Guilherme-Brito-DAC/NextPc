using Microsoft.EntityFrameworkCore;
using nextgear.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public IList<Ram> ListarRam()
        {
            return Ram.ToList();
        }

        public IList<Armazenamento> ListarArmazenamento()
        {
            return Armazenamento.ToList();
        }

        public IList<Placa_mae> ListarPlacaMae()
        {
            return Placa_mae.ToList();
        }

        public IList<Cpu> ListarCpu()
        {
            return Cpu.ToList();
        }

        public IList<Gpu> ListarGpu()
        {
            return Gpu.ToList();
        }

        public IList<Fonte> ListarFonte()
        {
            return Fonte.ToList();
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

        public IList<Ram> PesquisarRam(string pesquisa)
        {
            return Ram.Where(p => p.nome.Contains(pesquisa)).ToList();
        }
        public IList<Fonte> PesquisarFonte(string pesquisa)
        {
            return Fonte.Where(p => p.nome.Contains(pesquisa)).ToList();
        }
        public IList<Gpu> PesquisarGpu(string pesquisa)
        {
            return Gpu.Where(p => p.nome.Contains(pesquisa)).ToList();
        }
        public IList<Cpu> PesquisarCpu(string pesquisa)
        {
            return Cpu.Where(p => p.nome.Contains(pesquisa)).ToList();
        }
        public IList<Armazenamento> PesquisarArmazenamento(string pesquisa)
        {
            return Armazenamento.Where(p => p.nome.Contains(pesquisa)).ToList();
        }
        public IList<Placa_mae> PesquisarPlaca_mae(string pesquisa)
        {
            return Placa_mae.Where(p => p.nome.Contains(pesquisa)).ToList();
        }
    }
}
