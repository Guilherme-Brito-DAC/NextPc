using Microsoft.EntityFrameworkCore;
using nextgear.Models;
using System;
using System.Collections.Generic;
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
            var ram = new List<Ram>();

            if (string.IsNullOrEmpty(pesquisa))
            {
                ram = Ram.ToList();
            }
            else
            {
                ram = Ram.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)ram.Count() / 100);
            var resultado = new Paginacao<Ram>
            {
                total = ram.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = ram.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Armazenamento> ListarArmazenamento(string pesquisa, int pagina)
        {
            var armazenamento = new List<Armazenamento>();

            if (string.IsNullOrEmpty(pesquisa))
            {
                armazenamento = Armazenamento.ToList();
            }
            else
            {
                armazenamento = Armazenamento.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)armazenamento.Count() / 100);
            var resultado = new Paginacao<Armazenamento>
            {
                total = armazenamento.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = armazenamento.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Placa_mae> ListarPlacaMae(string pesquisa, int pagina)
        {
            var placa_mae = new List<Placa_mae>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                placa_mae = Placa_mae.ToList();
            }
            else
            {
                placa_mae = Placa_mae.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)placa_mae.Count() / 100);
            var resultado = new Paginacao<Placa_mae>
            {
                total = placa_mae.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = placa_mae.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Cpu> ListarCpu(string pesquisa, int pagina)
        {
            var cpu = new List<Cpu>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                cpu = Cpu.ToList();
            }
            else
            {
                cpu = Cpu.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)cpu.Count() / 100);
            var resultado = new Paginacao<Cpu>
            {
                total = cpu.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = cpu.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Gpu> ListarGpu(string pesquisa, int pagina)
        {
            var gpu = new List<Gpu>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                gpu = Gpu.ToList();
            }
            else
            {
                gpu = Gpu.Where(p => p.chipset.Contains(pesquisa.ToLower()) == true).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)gpu.Count() / 100);
            var resultado = new Paginacao<Gpu>
            {
                total = gpu.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = gpu.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Fonte> ListarFonte(string pesquisa, int pagina)
        {
            var fonte = new List<Fonte>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                fonte = Fonte.ToList();
            }
            else
            {
                fonte = Fonte.Where(p => p.nome.Contains(pesquisa.ToLower()) == true).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)fonte.Count() / 100);
            var resultado = new Paginacao<Fonte>
            {
                total = fonte.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = fonte.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
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
