using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using nextgear.Models;
using nextgear.Repositories;
using System;
using System.Linq;

namespace nextgear.Controllers
{
    [ApiController]
    [Route("api/pc")]
    public class PcController : Controller
    {
        private readonly IPcRepository IPcRepository;

        public PcController(IPcRepository iPcRepository)
        {
            IPcRepository = iPcRepository;
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult ListarPcs([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPcRepository.ListarPcs(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("{id}")]
        public ActionResult Detalhes(int id)
        {
            try
            {
                return Ok(IPcRepository.ListarUmPc(id));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("usuario/{id}")]
        public ActionResult PcUsuario([FromQuery] string ordenar, [FromQuery] string id, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPcRepository.ListarPcsDoUsuario(ordenar, int.Parse(id), int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPost]
        [Authorize]
        public ActionResult Criar([FromBody] Pc Pc)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IPcRepository.Criar(Pc);

                    return Ok("Pc criado com sucesso!");
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
        public ActionResult Editar([FromBody] Pc Pc)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IPcRepository.Editar(Pc);

                    return Ok("Pc editado com sucesso!");
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
        public ActionResult Deletar([FromBody] Pc Pc)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IPcRepository.Deletar(Pc);

                    return Ok("Pc deletado com sucesso!");
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
