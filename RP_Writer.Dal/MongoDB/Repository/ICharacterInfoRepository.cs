using RP_Writer.Domain.Character;

namespace RP_Writer.Dal.MongoDB.Repository
{
    public interface ICharacterInfoRepository
    {
        public IEnumerable<CharacterInfo> GetAll();
        public CharacterInfo GetById(string id);
        public void AddNewCharacter(CharacterInfo character);
        public void UpdateCharacter(string id, CharacterInfo character);
        public void DeleteCharacter(string id);
    }
}
