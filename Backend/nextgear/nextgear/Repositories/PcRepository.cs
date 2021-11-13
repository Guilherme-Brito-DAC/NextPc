using Microsoft.EntityFrameworkCore;
using nextgear.Formatters;
using nextgear.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;

namespace nextgear.Repositories
{
    public class PcRepository : BaseRepository, IPcRepository
    {
        private readonly DbSet<Pc> _Pc;
        private readonly IPcFormatter IPcFormatter;

        public PcRepository(ApplicationContext context, IPcFormatter _IPcFormatter) : base(context)
        {
            _Pc = context.Set<Pc>();
            IPcFormatter = _IPcFormatter;
        }

        public PcView ListarUmPc(int id)
        {
            var pc = _Pc.Where(p => p.id == id).SingleOrDefault();

            return IPcFormatter.PcToPcView(pc);
        }

        public Paginacao<PcView> ListarPcs(string ordenar, string pesquisa, int pagina)
        {
            var pcs = new List<Pc>();
            if (string.IsNullOrEmpty(pesquisa))
            {
                pcs = _Pc.OrderBy(ordenar).ToList();
            }
            else
            {
                pcs = _Pc.OrderBy(ordenar).Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();
            }
            var pcsViews = IPcFormatter.ListPcToListPcView(pcs);
            var totalPaginas = (int)Math.Ceiling((double)pcsViews.Count() / 100);
            var resultado = new Paginacao<PcView>
            {
                total = pcsViews.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                anterior = (pagina > 1) ? $"ram?pagina={pagina - 1}" : "",
                proximo = (pagina < totalPaginas) ? $"ram?pagina={pagina + 1}" : "",
                resultado = pcsViews.Skip(100 * (pagina - 1)).Take(100).ToList()
            };

            return resultado;
        }

        public void Criar(Pc Pc)
        {
            _Pc.Add(Pc);
            context.SaveChanges();
        }

        public void Editar(Pc Pc)
        {
            _Pc.Update(Pc);
            context.SaveChanges();
        }

        public void Deletar(Pc Pc)
        {
            _Pc.Remove(Pc);
            context.SaveChanges();
        }
    }
}
