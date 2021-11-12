using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Gpu : BaseModel
    {
        public string chipset { get; set; }
        public string memoria { get; set; }
        public string coreClock { get; set; }
        public string boostClock { get; set; }
    }
}
