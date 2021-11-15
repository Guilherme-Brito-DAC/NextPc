using Microsoft.EntityFrameworkCore;
using nextgear.Formatters;
using nextgear.Models;
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

        public Paginacao<PcView> ListarPcs(string pesquisa, int pagina)
        {
            var pcs = string.IsNullOrEmpty(pesquisa) ? _Pc.ToList() : _Pc.Where(p => p.nome.Contains(pesquisa.ToLower())).ToList();

            var pcsViews = IPcFormatter.ListPcToListPcView(pcs);

            return Paginacao<PcView>.ToPaginacao(pcsViews, pagina);
        }

        public Paginacao<PcView> ListarPcsDoUsuario(int id, int pagina)
        {
            var pcs = _Pc.Where(p => p.id == id).ToList();

            var pcsViews = IPcFormatter.ListPcToListPcView(pcs);

            return Paginacao<PcView>.ToPaginacao(pcsViews, pagina);
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
