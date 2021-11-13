using nextgear.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nextgear.Models
{
    public class Pc : BaseModel
    {
        public int armazenamento_id { get; set; }
        public int cpu_id { get; set; }
        public int gpu_id { get; set; }
        public int fonte_id { get; set; }
        public int placa_mae_id { get; set; }
        public int ram_id { get; set; }
        public int usuario_id { get; set; }
    }

    public class PcView : BaseModel
    {
        public Armazenamento armazenamento { get; set; }
        public Cpu cpu { get; set; }
        public Gpu gpu { get; set; }
        public Fonte fonte { get; set; }
        public Placa_mae placa_mae { get; set; }
        public Ram ram { get; set; }
        public Usuario usuario { get; set; }

        public PcView(Armazenamento armazenamento, Cpu cpu, Gpu gpu, Fonte fonte, Placa_mae placa_mae, Ram ram, Usuario usuario)
        {
            this.armazenamento = armazenamento;
            this.cpu = cpu;
            this.gpu = gpu;
            this.fonte = fonte;
            this.placa_mae = placa_mae;
            this.ram = ram;
            this.usuario = usuario;
        }
    }
}
