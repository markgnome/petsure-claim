using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Models;
namespace server.Controllers
{
    [Route("api/[controller]")]
    public class PetsController : Controller
    {
        // GET api/pets
        [HttpGet]
        public IEnumerable<PetModel> Get()
        {
            return new List<PetModel>{
                new PetModel(){ Id = 1, Name = "Rover" },
                new PetModel() { Id = 2, Name = "Fido" },
                new PetModel() {Id = 3, Name = "Pixie" }
            };
        }

        // GET api/pets/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/pets
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/pets/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/pets/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
