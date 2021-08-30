using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nextgear.Models;
using Nextgear.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nextgear.Controllers
{
    [ApiController]
    [Route("api/usuarios")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository IUsuarioRepository;

        public UsuarioController(IUsuarioRepository _IUsuarioRepository)
        {
            IUsuarioRepository = _IUsuarioRepository;
        }

        [HttpGet]
        public IActionResult RecuperarTudo()
        {
            return Ok(IUsuarioRepository.RecuperarTodosUsuario());
        }

        [HttpGet("{id}")]
        public IActionResult RecuperarId(int id)
        {
            var usuario = IUsuarioRepository.RecuperarPorUsuario(id);

            if (usuario == null) return NotFound();

            return Ok(usuario);
        }

        [HttpPost]
        public IActionResult Cadastrar([FromForm] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                IUsuarioRepository.CadastrarUsuario(usuario);
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public IActionResult Editar([FromForm] Usuario usuario, IFormCollection collection)
        {
            if (ModelState.IsValid)
            {
                IUsuarioRepository.EditarUsuario(usuario);
                return Ok();
            }

            return BadRequest();
        }

        [HttpDelete]
        public IActionResult Deletar([FromForm] Usuario usuario, IFormCollection collection)
        {
            if (ModelState.IsValid)
            {
                IUsuarioRepository.DeletarUsuario(usuario);
                return Ok();
            }

            return BadRequest();
        }
    }
}
