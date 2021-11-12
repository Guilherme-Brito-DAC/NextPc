using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Placa_mae : BaseModel
    {
        public string formato { get; set; }
        public string maxMemoria { get; set; }
        public string espacosDeMemoria { get; set; }
        public string soquete { get; set; }
    }
}
