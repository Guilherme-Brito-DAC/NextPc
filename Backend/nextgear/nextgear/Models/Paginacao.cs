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

        public static Paginacao<T> ToPaginacao(IList<T> lista,int pagina)
        {
            var totalPaginas = (int)Math.Ceiling((double)lista.Count() / 100);
            var resultado = new Paginacao<T>
            {
                total = lista.Count(),
                tamanho_pagina = 100,
                numero_pagina = pagina,
                total_paginas = totalPaginas,
                resultado = lista.Skip(100 * (pagina - 1)).Take(100).ToList()
            };

            return resultado;
        }
    }
}
