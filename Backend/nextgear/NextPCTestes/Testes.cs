using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using nextgear;
using nextgear.Controllers;
using nextgear.Models;
using nextgear.Repositories;
using System.Net;
using Xunit;

namespace NextPCTestes
{
    public class Testes
    {
        [Fact]
        public void DadoComandoParaListarPecasRetornaListaComPecas()
        {
            var options = new DbContextOptionsBuilder<ApplicationContext>().UseInMemoryDatabase(databaseName: "NextPcDB").Options;
            var context = new ApplicationContext(options);

            var pecasRepository = new PecasRepository(context);
            var pecasController = new PecasController(pecasRepository);

            var pecas = pecasController.ListarRam("" , "1");

            Assert.NotNull(pecas);
        }

        [Fact]
        public void CadastrarUsuario()
        {
            var options = new DbContextOptionsBuilder<ApplicationContext>().UseInMemoryDatabase(databaseName: "NextPcDB").Options;
            var context = new ApplicationContext(options);

            var usuarioRepository = new UsuarioRepository(context);
            var usuarioController = new UsuarioController(usuarioRepository);

            var usuario = new Usuario();

            var resultado = usuarioController.Cadastrar(usuario);

            Assert.Equal(typeof(OkObjectResult).ToString(),resultado.ToString());
        }

        [Fact]
        public void Login()
        {
            var options = new DbContextOptionsBuilder<ApplicationContext>().UseInMemoryDatabase(databaseName: "NextPcDB").Options;
            var context = new ApplicationContext(options);

            var usuarioRepository = new UsuarioRepository(context);
            var usuarioController = new UsuarioController(usuarioRepository);

            var usuario = new UsuarioLogin();
            usuario.usuario = "teste";
            usuario.usuario = "12345";

            usuarioController.Cadastrar(new Usuario());

            var resultado = usuarioController.Login(usuario);

            var ObjectResult = resultado as ObjectResult;
            Assert.NotNull(ObjectResult);
        }
    }
}
