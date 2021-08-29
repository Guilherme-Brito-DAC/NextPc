using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Nextgear.Models;
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
        [HttpGet]
        public ActionResult Details(int id)
        {
            return Ok("Temoteo é baitola");
        }

        [HttpPost]
        public ActionResult Cadastrar(IFormCollection collection)
        {
            return Ok("Cadastrado");
        }

        [HttpPut]
        public ActionResult Editar(int id, IFormCollection collection)
        {
            return Ok("Atualizar");
        }

        [HttpDelete]
        public ActionResult Deletar(int id, IFormCollection collection)
        {
            return Ok("Deletado");
        }
    }
}
