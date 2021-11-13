using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using nextgear.Repositories;
using System;
using System.Diagnostics;

namespace nextgear.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("api/pecas")]
    public class PecasController : Controller
    {
        public IPecasRepository IPecasRepository;

        public PecasController(IPecasRepository iPecasRepository)
        {
            IPecasRepository = iPecasRepository;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("armazenamento")]
        public IActionResult ListarArmazenamento([FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarArmazenamento(pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("cpu")]
        public IActionResult ListarCpu([FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarCpu(pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("gpu")]
        public IActionResult ListarGpu([FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarGpu(pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("ram")]
        public IActionResult ListarRam([FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarRam(pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("fonte")]
        public IActionResult ListarFonte([FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarFonte(pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("placaMae")]
        public IActionResult ListarPlacaMae([FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarPlacaMae(pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }
    }
}
