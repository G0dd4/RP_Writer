using RP_Writer.Domain.Character;

namespace RP_Writer.Dal.MongoDB.Context
{
    public interface IMongoDBContext <T> where T : class
    {
        public IEnumerable<T> GetFullCollection();
        public T GetItemById(string id);
        public void RemoveItem(string id);
        public void AddItem(CharacterInfo character);
        public void UpdateItem(string id,CharacterInfo character);

    }
}
