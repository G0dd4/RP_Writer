using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using RP_Writer.Dal.MongoDB.Context;
using RP_Writer.Dal.MongoDB.Repository;
using RP_Writer.Domain.Character;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RP_Writer.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharacterInfoController : ControllerBase
    {
        private readonly CharacterInfoRepository _context;

        public CharacterInfoController()
        {
            CharacterInfoRepository context = new CharacterInfoRepository(new MongoDBCharacterInfo(new MongoClient("mongodb://127.0.0.1:27017")));
            _context = context;
        }


        // GET: api/<ValuesController>
        [HttpGet]
        public IActionResult Get()
        {
            var characters = _context.GetAll();
            return Ok(characters);
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public CharacterInfo Get(string id)
        {
            return _context.GetById(id);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post(CharacterInfo character)
        {
            character.Id = Guid.NewGuid().ToString(); 
            _context.AddNewCharacter(character);
        }

        [HttpPut("{id}")]
        public void Put(string id, [FromBody]CharacterInfo newCharacterInfo)
        {
            _context.UpdateCharacter(id, newCharacterInfo);
        }
      

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _context.DeleteCharacter(id);
        }
    }
}
