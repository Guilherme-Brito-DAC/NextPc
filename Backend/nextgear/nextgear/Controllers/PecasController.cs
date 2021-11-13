using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using nextgear.Repositories;
using System;

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
        public IActionResult ListarArmazenamento([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarArmazenamento(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("cpu")]
        public IActionResult ListarCpu([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarCpu(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("gpu")]
        public IActionResult ListarGpu([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarGpu(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("ram")]
        public IActionResult ListarRam([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarRam(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("fonte")]
        public IActionResult ListarFonte([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarArmazenamento(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("placaMae")]
        public IActionResult ListarPlacaMae([FromQuery] string ordenar, [FromQuery] string pesquisa, [FromQuery] string pagina)
        {
            try
            {
                return Ok(IPecasRepository.ListarPlacaMae(ordenar, pesquisa, int.Parse(pagina)));
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }
    }
}
