using MongoDB.Driver;
using RP_Writer.Dal.MongoDB.Context;
using RP_Writer.Domain.Character;

namespace RP_Writer.Dal.MongoDB.Repository
{
    public class CharacterInfoRepository : ICharacterInfoRepository
    {
        private readonly MongoDBCharacterInfo _context;

        public CharacterInfoRepository(MongoDBCharacterInfo context)
        {
            _context = context;
        }

        public void AddNewCharacter(CharacterInfo character)
        {
            _context.AddItem(character);
        }

        public void DeleteCharacter(string id)
        {
            _context.RemoveItem(id);
        }

        public IEnumerable<CharacterInfo> GetAll()
        {
            return _context.GetFullCollection();
        }

        public CharacterInfo GetById(string id)
        {
            return _context.GetItemById(id); 
        }

        public void UpdateCharacter(string id, CharacterInfo character)
        {
            _context.UpdateItem(id,character);
        }
    }
}