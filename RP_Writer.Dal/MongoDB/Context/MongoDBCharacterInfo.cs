using MongoDB.Bson;
using MongoDB.Driver;
using RP_Writer.Domain.Character;
using System.Linq;

namespace RP_Writer.Dal.MongoDB.Context
{
    public class MongoDBCharacterInfo : IMongoDBContext<CharacterInfo>
    {
        private readonly MongoClient _db;

        public MongoDBCharacterInfo(MongoClient db)
        {
            _db = db;
        }
        public void AddItem(CharacterInfo character)
        {
            _db.GetDatabase("DB_RPWriter").GetCollection<CharacterInfo>("Character").InsertOne(character);
        }

        public IEnumerable<CharacterInfo> GetFullCollection()
        {
            var collection = _db.GetDatabase("DB_RPWriter").GetCollection<CharacterInfo>("Character");
            var filter = Builders<CharacterInfo>.Filter.Empty;
            var document = collection.Find(filter).ToList();
            return document;
        }

        public CharacterInfo GetItemById(string id)
        {
            var collection = _db.GetDatabase("DB_RPWriter").GetCollection<CharacterInfo>("Character");
            var filter = Builders<CharacterInfo>.Filter.Eq("_id", id);
            var document = collection.Find(filter).ToList().First();
            
            return document;
        }

        public void RemoveItem(string id)
        {
            var collection = _db.GetDatabase("DB_RPWriter").GetCollection<CharacterInfo>("Character");
            var filter = Builders<CharacterInfo>.Filter.Eq("_id", id.ToString());
            var document = collection.DeleteOne(filter);
            Console.WriteLine(document.ToString());
        }
        public void UpdateItem(string id, CharacterInfo character)
        {
            var collection = _db.GetDatabase("DB_RPWriter").GetCollection<CharacterInfo>("Character");
            var filter = Builders<CharacterInfo>.Filter.Eq("_id", id);
            var update = Builders<CharacterInfo>.Update
                .Set(x => x.Firstname, character.Firstname)
                .Set(x => x.Lastname, character.Lastname)
                .Set(x => x.Image, character.Image)
                .Set(x => x.Description, character.Description);
            collection.UpdateOne(filter, update);
        }
    }
}
