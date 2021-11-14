using System.ComponentModel.DataAnnotations;

namespace nextgear.Models
{
    public class Usuario
    {
        [Key]
        public int id { get; set; }
        [Required]
        [DataType(DataType.Text)]
        [Display(Name = "Nome")]
        [MaxLength(50,ErrorMessage = "O Nome deve ter menos que 50 caracteres"), MinLength(2, ErrorMessage = "O Nome deve ter mais que 2 caracteres")]
        public string nome { get; set; }
        [Required]
        [DataType(DataType.Text)]
        [Display(Name = "Sobrenome")]
        [MaxLength(50, ErrorMessage = "O sobrenome deve ter menos que 50 caracteres"), MinLength(2, ErrorMessage = "O sobrenome deve ter mais que 2 caracteres")]
        public string sobrenome { get; set; }
        [Required]
        [DataType(DataType.Text)]
        [Display(Name = "Usuario")]
        [MaxLength(50, ErrorMessage = "O Usuario deve ter menos que 50 caracteres"), MinLength(2, ErrorMessage = "O Usuario deve ter mais que 2 caracteres")]
        public string usuario { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email")]
        public string email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Senha")]
        [MaxLength(250, ErrorMessage = "A senha deve ter menos que 250 caracteres"), MinLength(5, ErrorMessage = "A senha deve ter mais que 5 caracteres")]
        public string senha { get; set; }
        [Display(Name = "imagem")]
        public string imagem { get; set; }
        [Display(Name = "Modo Noturno")]
        public bool modoNoturno { get; set; }
    }

    public class UsuarioLogin
    {
        [Required]
        [DataType(DataType.Text)]
        [Display(Name = "Usuario")]
        [MaxLength(50, ErrorMessage = "O Usuario deve ter menos que 50 caracteres"), MinLength(2, ErrorMessage = "O Usuario deve ter mais que 2 caracteres")]
        public string usuario { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Senha")]
        [MaxLength(250, ErrorMessage = "A senha deve ter menos que 250 caracteres"), MinLength(5, ErrorMessage = "A senha deve ter mais que 5 caracteres")]
        public string senha { get; set; }
    }
}