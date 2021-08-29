namespace Nextgear.Models
{
    public abstract class Pc
    { 
        public int id { get; set; }
        public string placa_mae { get; set; }
        public string placa_de_video { get; set; }
        public string processador { get; set; }
        public string hd { get; set; }
        public string ssd { get; set; }
        public string ram { get; set; }
        public string cooler { get; set; }
        public string monitor { get; set; }
        public string usuario_id { get; set; }
        public string fonte { get; set; }
    }
}