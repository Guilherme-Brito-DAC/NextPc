using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
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
            try
            {
                var usuario = IUsuarioRepository.RecuperarPorUsuario(id);

                if (usuario == null) return NotFound();

                return Ok(usuario);
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu um erro -> " + e.Message);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromForm] UsuarioLogin usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (IUsuarioRepository.Login(usuario))
                    {
                        return Ok("Usuário logado com sucesso!");
                    }
                    else
                    {
                        return BadRequest("Usuário ou senha incorretos!");
                    }
                }

                return BadRequest("Dados Inválidos");
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu um erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Logout()
        {
            //deslogado
            return Ok("Deslogado!");
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Cadastrar([FromForm] Usuario usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IUsuarioRepository.CadastrarUsuario(usuario);
                    return Ok("Usuário cadastrado com sucesso!");
                }

                return BadRequest("Dados inválidos");
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu um erro -> " + e.Message);
            }
        }

        [HttpPut]
        public IActionResult Editar([FromForm] Usuario usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IUsuarioRepository.EditarUsuario(usuario);
                    return Ok("Usuário editado com sucesso!");
                }

                return BadRequest("Dados inválidos");
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu um erro -> " + e.Message);
            }
        }

        [HttpDelete]
        public IActionResult Deletar([FromForm] Usuario usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IUsuarioRepository.DeletarUsuario(usuario);
                    return Ok("Usuário deletado com sucesso!");
                }

                return BadRequest("Dados inválidos");
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu um erro -> " + e.Message);
            }
        }
    }
}
