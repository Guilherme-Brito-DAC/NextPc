using nextgear.Models;
using System.Collections.Generic;

namespace nextgear.Formatters
{
    public interface IPcFormatter
    {
        IList<PcView> ListPcToListPcView(IList<Pc> Pcs);
        PcView PcToPcView(Pc Pc);
    }
}