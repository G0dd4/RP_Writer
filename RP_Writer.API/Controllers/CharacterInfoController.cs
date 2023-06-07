using Microsoft.AspNetCore.Mvc;
using RP_Writer.Domain.Character;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RP_Writer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterInfoController : ControllerBase
    {
        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<CharacterInfo> Get()
        {
            throw new NotImplementedException(); 
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(Guid id)
        {
            throw new NotImplementedException();
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post(CharacterInfo value)
        {
            throw new NotImplementedException();
        }

        [HttpPut("{id:int}")]
        public void Put(Guid Id, [FromBody]CharacterInfo CharacterInfoToUpdate)
        {
            throw new NotImplementedException();
        }
      

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
