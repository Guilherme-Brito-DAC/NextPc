using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using nextgear.Models;
using nextgear.Repositories;
using System;

namespace nextgear.Controllers
{
    [ApiController]
    [Route("api/pecas")]
    public class PecasController : Controller
    {
        public IPecasRepository IPecasRepository;

        public PecasController(IPecasRepository iPecasRepository)
        {
            IPecasRepository = iPecasRepository;
        }

        [HttpPost]
        [Route("ram")]
        [Authorize(Roles = "admin")]
        public IActionResult CriarRam([FromBody] Ram ram)
        {
            try
            {
                IPecasRepository.CriarRam(ram);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Route("ram")]
        [Authorize(Roles = "admin")]
        public IActionResult EditarRam([FromBody] Ram ram)
        {
            try
            {
                IPecasRepository.EditarRam(ram);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Route("ram")]
        [Authorize(Roles = "admin")]
        public IActionResult DeletarRam([FromBody] Ram ram)
        {
            try
            {
                IPecasRepository.DeletarRam(ram);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPost]
        [Route("cpu")]
        [Authorize(Roles = "admin")]
        public IActionResult CriarCpu([FromBody] Cpu cpu)
        {
            try
            {
                IPecasRepository.CriarCpu(cpu);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Route("cpu")]
        [Authorize(Roles = "admin")]
        public IActionResult EditarCpu([FromBody] Cpu cpu)
        {
            try
            {
                IPecasRepository.EditarCpu(cpu);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Route("cpu")]
        [Authorize(Roles = "admin")]
        public IActionResult DeletarCpu([FromBody] Cpu cpu)
        {
            try
            {
                IPecasRepository.DeletarCpu(cpu);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPost]
        [Route("gpu")]
        [Authorize(Roles = "admin")]
        public IActionResult CriarGpu([FromBody] Gpu gpu)
        {
            try
            {
                IPecasRepository.CriarGpu(gpu);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Route("gpu")]
        [Authorize(Roles = "admin")]
        public IActionResult EditarGpu([FromBody] Gpu gpu)
        {
            try
            {
                IPecasRepository.EditarGpu(gpu);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Route("gpu")]
        [Authorize(Roles = "admin")]
        public IActionResult DeletarGpu([FromBody] Gpu gpu)
        {
            try
            {
                IPecasRepository.DeletarGpu(gpu);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPost]
        [Route("armazenamento")]
        [Authorize(Roles = "admin")]
        public IActionResult CriarArmazenamento([FromBody] Armazenamento armazenamento)
        {
            try
            {
                IPecasRepository.CriarArmazenamento(armazenamento);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Route("armazenamento")]
        [Authorize(Roles = "admin")]
        public IActionResult EditarArmazenamento([FromBody] Armazenamento armazenamento)
        {
            try
            {
                IPecasRepository.EditarArmazenamento(armazenamento);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Route("armazenamento")]
        [Authorize(Roles = "admin")]
        public IActionResult DeletarArmazenamento([FromBody] Armazenamento armazenamento)
        {
            try
            {
                IPecasRepository.DeletarArmazenamento(armazenamento);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPost]
        [Route("placaMae")]
        [Authorize(Roles = "admin")]
        public IActionResult CriarPlacaMae([FromBody] Placa_mae Placa_mae)
        {
            try
            {
                IPecasRepository.CriarPlaca_mae(Placa_mae);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Route("placaMae")]
        [Authorize(Roles = "admin")]
        public IActionResult EditarPlacaMae([FromBody] Placa_mae Placa_mae)
        {
            try
            {
                IPecasRepository.EditarPlaca_mae(Placa_mae);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Route("placaMae")]
        [Authorize(Roles = "admin")]
        public IActionResult DeletarPlacaMae([FromBody] Placa_mae Placa_mae)
        {
            try
            {
                IPecasRepository.DeletarPlaca_mae(Placa_mae);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPost]
        [Route("fonte")]
        [Authorize(Roles = "admin")]
        public IActionResult CriarFonte([FromBody] Fonte fonte)
        {
            try
            {
                IPecasRepository.CriarFonte(fonte);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpPut]
        [Route("fonte")]
        [Authorize(Roles = "admin")]
        public IActionResult EditarFonte([FromBody] Fonte fonte)
        {
            try
            {
                IPecasRepository.EditarFonte(fonte);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
        }

        [HttpDelete]
        [Route("fonte")]
        [Authorize(Roles = "admin")]
        public IActionResult DeletarFonte([FromBody] Fonte fonte)
        {
            try
            {
                IPecasRepository.DeletarFonte(fonte);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("Aconteceu algum erro -> " + e.Message);
            }
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
