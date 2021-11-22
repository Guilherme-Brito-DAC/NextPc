namespace nextgear.Models
{
    public class Pc 
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string imagem { get; set; }
        public int armazenamento_id { get; set; }
        public int cpu_id { get; set; }
        public int gpu_id { get; set; }
        public int fonte_id { get; set; }
        public int placa_mae_id { get; set; }
        public int ram_id { get; set; }
        public int usuario_id { get; set; }
    }

    public class PcView
    {
        public PcView(int id, string nome, string imagem, Armazenamento armazenamento, Cpu cpu, Gpu gpu, Fonte fonte, Placa_mae placa_mae, Ram ram, Usuario usuario)
        {
            this.id = id;
            this.nome = nome;
            this.imagem = imagem;
            this.armazenamento = armazenamento;
            this.cpu = cpu;
            this.gpu = gpu;
            this.fonte = fonte;
            this.placa_mae = placa_mae;
            this.ram = ram;
            this.usuario = usuario;
            Preco = armazenamento.preco + cpu.preco + gpu.preco + fonte.preco + placa_mae.preco + ram.preco;
        }

        public int id { get; set; }
        public string nome { get; set; }
        public string imagem { get; set; }
        public Armazenamento armazenamento { get; set; }
        public Cpu cpu { get; set; }
        public Gpu gpu { get; set; }
        public Fonte fonte { get; set; }
        public Placa_mae placa_mae { get; set; }
        public Ram ram { get; set; }
        public Usuario usuario { get; set; }
        public float Preco { get; set; }
    }
}
