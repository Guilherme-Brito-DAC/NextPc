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

        public Paginacao<Ram> ListarRam(string ordenar, string pesquisa, int pagina)
        {
            var ram = new List<Ram>();

            if (string.IsNullOrEmpty(pesquisa))
            {
                ram = Ram.OrderBy(ordenar).ToList();
            }
            else
            {
                ram = Ram.OrderBy(ordenar).Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)ram.Count() / 100);
            var resultado = new Paginacao<Ram>
            {
                total = ram.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"ram?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"ram?pagina={pagina + 1}" : "",
                resultado = ram.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Armazenamento> ListarArmazenamento(string ordenar, string pesquisa, int pagina)
        {
            var armazenamento = new List<Armazenamento>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                armazenamento = Armazenamento.OrderBy(ordenar).ToList();
            }
            else
            {
                armazenamento = Armazenamento.OrderBy(ordenar).Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();
            }

            var totalPaginas = (int)Math.Ceiling((double)armazenamento.Count() / 100);
            var resultado = new Paginacao<Armazenamento>
            {
                total = armazenamento.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"armazenamento?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"armazenamento?pagina={pagina + 1}" : "",
                resultado = armazenamento.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Placa_mae> ListarPlacaMae(string ordenar, string pesquisa, int pagina)
        {
            var placa_mae = new List<Placa_mae>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                placa_mae = Placa_mae.OrderBy(ordenar).ToList();
            }
            else
            {
                placa_mae = Placa_mae.OrderBy(ordenar).Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();
            }
            placa_mae = Placa_mae.OrderBy(ordenar).ToList();

            var totalPaginas = (int)Math.Ceiling((double)placa_mae.Count() / 100);
            var resultado = new Paginacao<Placa_mae>
            {
                total = placa_mae.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"placaMae?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"placaMae?pagina={pagina + 1}" : "",
                resultado = placa_mae.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Cpu> ListarCpu(string ordenar, string pesquisa, int pagina)
        {
            var cpu = new List<Cpu>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                cpu = Cpu.OrderBy(ordenar).ToList();
            }
            else
            {
                cpu = Cpu.OrderBy(ordenar).Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();
            }
            cpu = Cpu.OrderBy(ordenar).ToList();

            var totalPaginas = (int)Math.Ceiling((double)cpu.Count() / 100);
            var resultado = new Paginacao<Cpu>
            {
                total = cpu.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"cpu?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"cpu?pagina={pagina + 1}" : "",
                resultado = cpu.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Gpu> ListarGpu(string ordenar, string pesquisa, int pagina)
        {
            var gpu = new List<Gpu>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                gpu = Gpu.OrderBy(ordenar).ToList();
            }
            else
            {
                gpu = Gpu.OrderBy(ordenar).Where(p => p.chipset.Contains(pesquisa.ToLower())).ToList();
            }
            gpu = Gpu.OrderBy(ordenar).ToList();

            var totalPaginas = (int)Math.Ceiling((double)gpu.Count() / 100);
            var resultado = new Paginacao<Gpu>
            {
                total = gpu.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"gpu?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"gpu?pagina={pagina + 1}" : "",
                resultado = gpu.Skip(100 * (pagina - 1)).Take(100).ToList()
            };
            return resultado;
        }

        public Paginacao<Fonte> ListarFonte(string ordenar, string pesquisa, int pagina)
        {
            var fonte = new List<Fonte>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                fonte = Fonte.OrderBy(ordenar).ToList();
            }
            else
            {
                fonte = Fonte.OrderBy(ordenar).Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();
            }
            fonte = Fonte.OrderBy(ordenar).ToList();

            var totalPaginas = (int)Math.Ceiling((double)fonte.Count() / 100);
            var resultado = new Paginacao<Fonte>
            {
                total = fonte.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"fonte?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"fonte?pagina={pagina + 1}" : "",
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
