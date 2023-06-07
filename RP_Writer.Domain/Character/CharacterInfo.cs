using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace RP_Writer.Domain.Character
{
    public class CharacterInfo
    {
        [BsonId]
        public string? Id { get; set; }
        [BsonIgnore]
        public string? UserId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string? Image { get; set; }
        public string? Description { get; set; }
    }
}
