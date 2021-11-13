using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Paginacao<T>
    {
        public int total { get; set; }
        public int tamanho_pagina { get; set; }
        public int numero_pagina { get; set; }
        public int total_paginas { get; set; }
        public IList<T> resultado { get; set; }
    }
}
