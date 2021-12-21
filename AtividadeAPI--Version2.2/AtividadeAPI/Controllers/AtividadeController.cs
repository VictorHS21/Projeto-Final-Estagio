using AtividadeAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AtividadeAPI.Controllers
{
    [Route("api/atividade")]
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Usuarios> Get()
        {
            using var db = new ApplicationContext();
            return db.Usuarios.ToList();
        }

        [HttpGet("{id}")]
        public Usuarios Get(string id)
        {
            using var db = new ApplicationContext();
            var usuario = db.Usuarios.Find(id);

            return usuario;
        }

        [HttpPost]
        public ActionResult Add([FromBody] Usuarios usuarios)
        {
            try
            {
                using var db = new ApplicationContext();
                db.Usuarios.Add(usuarios);
                db.SaveChanges();

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public ActionResult Edit(string id, Usuarios usuarios)
        {
            try
            {
                using var db = new ApplicationContext();
                var usuario = db.Usuarios.Find(id);

                usuario.FirstName = usuarios.FirstName;
                usuario.LastName = usuarios.LastName;
                usuario.EmailUser = usuarios.EmailUser;
                usuario.PhoneUser = usuarios.PhoneUser;
                usuario.BirthDayUser = usuarios.BirthDayUser;
                usuario.PasswordUser = usuarios.PasswordUser;
                    
                db.Usuarios.Update(usuario);
                db.SaveChanges();

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                using var db = new Controllers.ApplicationContext();
                var usuario = new Usuarios { Id = id };
                db.Usuarios.Remove(usuario);
                db.SaveChanges();

                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
