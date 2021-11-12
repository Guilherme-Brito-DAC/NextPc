using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Pc : BaseModel
    {
        public Armazenamento armazenamento_id { get; set; }
        public Cpu cpu { get; set; }
        public Gpu gpu { get; set; }
        public Fonte fonte { get; set; }
        public Placa_mae placa_mae { get; set; }
        public Ram ram { get; set; }
        public Usuario usuario { get; set; }
    }
}
