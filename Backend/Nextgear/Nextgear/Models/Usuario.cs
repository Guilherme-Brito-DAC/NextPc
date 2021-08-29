using System;
using System.ComponentModel.DataAnnotations;

namespace Nextgear.Models
{
    public class Usuario
    {
        public int id { get; set; }

        [Required]
        [MinLength(1,ErrorMessage = "O seu nome tem que ter pelo menos 1 dígito")]
        [MaxLength(50, ErrorMessage = "O seu nome tem que ter menos que 50 dígitos")]
        public string nome { get; set; }

        [Required]
        [MinLength(1, ErrorMessage = "O seu sobrenome tem que ter pelo menos 1 dígito")]
        [MaxLength(50, ErrorMessage = "O seu sobrenome tem que ter menos que 50 dígitos")]
        public string sobrenome { get; set; }

        [Required]
        [MinLength(5, ErrorMessage = "O seu login de usuario tem que ter pelo menos 5 dígitos")]
        [MaxLength(50, ErrorMessage = "O seu login de usuario tem que ter menos que 50 dígitos")]
        public string usuario { get; set; }

        [Required]
        [MinLength(5, ErrorMessage = "A sua senha tem que ter pelo menos 5 dígitos")]
        [MaxLength(250, ErrorMessage = "O seu nome tem que ter menos que 250 dígitos")]
        public string senha { get; set; }

        [Required]
        public string email { get; set; }

        public DateTime data_de_cadastro { get; set; }
    }
}