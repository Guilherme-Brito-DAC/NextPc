using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Cpu : BaseModel
    {
        public string clock { get; set; }
        public string boost { get; set; }
        public string tdp { get; set; }
        public string gpu { get; set; }
    }
}
