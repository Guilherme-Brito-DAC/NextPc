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
        public IActionResult ListarArmazenamento()
        {
            try
            {
                return Ok(IPecasRepository.ListarArmazenamento());
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("cpu")]
        public IActionResult ListarCpu()
        {
            try
            {
                return Ok(IPecasRepository.ListarCpu());
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("gpu")]
        public IActionResult ListarGpu()
        {
            try
            {
                return Ok(IPecasRepository.ListarGpu());
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("ram")]
        public IActionResult ListarRam()
        {
            try
            {
                return Ok(IPecasRepository.ListarRam());
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("fonte")]
        public IActionResult ListarFonte()
        {
            try
            {
                return Ok(IPecasRepository.ListarArmazenamento());
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("placaMae")]
        public IActionResult ListarplacaMae()
        {
            try
            {
                return Ok(IPecasRepository.ListarPlacaMae());
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }
    }
}
