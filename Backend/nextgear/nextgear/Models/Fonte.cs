using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Fonte : BaseModel
    {
        public string eficiencia { get; set; }
        public string voltagem { get; set; }
        public string modular { get; set; }
    }
}
