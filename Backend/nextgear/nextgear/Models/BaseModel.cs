using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public abstract class BaseModel
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string imagem { get; set; }
        public float preco { get; set; }
    }
}
