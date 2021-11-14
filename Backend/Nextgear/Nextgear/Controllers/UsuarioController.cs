using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using nextgear.Models;
using nextgear.Repositories;
using nextgear.Services;
using System;
using System.Linq;

namespace nextgear.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository IUsuarioRepository;

        public UsuarioController(IUsuarioRepository iUsuarioRepository)
        {
            IUsuarioRepository = iUsuarioRepository;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("cadastrar")]
        public ActionResult Cadastrar([FromBody] Usuario Usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IUsuarioRepository.Cadastrar(Usuario);

                    return Ok(new[] { "Usuario cadastrado com sucesso!" });
                }

                string error = string.Join("; ", ModelState.Values
                                       .SelectMany(x => x.Errors)
                                       .Select(x => x.ErrorMessage));

                return BadRequest("Dados Inválidos - > " + error);
            }
            catch (Exception e)
            {
                return BadRequest("Erro -> " + e.Message);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("login")]
        public ActionResult Login([FromBody] UsuarioLogin Usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (IUsuarioRepository.Login(Usuario.usuario, Usuario.senha))
                    {
                        var token = TokenService.GerarToken(Usuario);

                        var retorno = new
                        {
                            usuario = IUsuarioRepository.ListarUmUsuario(Usuario.usuario, Usuario.senha),
                            token = token
                        };

                        return Ok(retorno);
                    }
                    else
                    {
                        return BadRequest("Usuario ou senha incorretos");
                    }
                }

                string error = string.Join("; ", ModelState.Values
                                       .SelectMany(x => x.Errors)
                                       .Select(x => x.ErrorMessage));

                return BadRequest("Dados Inválidos - > " + error);
            }
            catch (Exception e)
            {
                return BadRequest("Erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public ActionResult Editar([FromBody]Usuario Usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IUsuarioRepository.Editar(Usuario);

                    return Ok("Usuario editado com sucesso!");
                }

                string error = string.Join("; ", ModelState.Values
                                       .SelectMany(x => x.Errors)
                                       .Select(x => x.ErrorMessage));

                return BadRequest("Dados Inválidos - > " + error);
            }
            catch (Exception e)
            {
                return BadRequest("Erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Authorize]
        public ActionResult Deletar([FromBody] Usuario Usuario)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IUsuarioRepository.Deletar(Usuario);

                    return Ok("Usuario deletado com sucesso!");
                }

                string error = string.Join("; ", ModelState.Values
                                       .SelectMany(x => x.Errors)
                                       .Select(x => x.ErrorMessage));

                return BadRequest("Dados Inválidos - > " + error);
            }
            catch (Exception e)
            {
                return BadRequest("Erro -> " + e.Message);
            }
        }
    }
}
