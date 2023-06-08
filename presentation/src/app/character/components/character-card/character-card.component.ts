import { Component, Input } from '@angular/core';
import { Character } from '../../models/character-card.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent{
  @Input()
  character!: Character;

  private maxDescriptionLength = 10
  private maxFirstnameLength = 10

  public ShortenDescription() : string {
    if(this.character.description.length > this.maxDescriptionLength)
      return this.character.description.substring(0, this.maxDescriptionLength) + ' ...';
    return this.character.description;
  }

  public ShortenFirstname() : string {
    if(this.character.firstname.length > this.maxFirstnameLength)
      return this.character.firstname.substring(0, this.maxFirstnameLength) + ' ...';
    return this.character.firstname;
  }

  public HasImage() : any {
    if(this.character.image.length == 0) 
      return {'background-color': "rgb(199, 199, 199)"};
    return {'background-image' : `url(${this.character.image})`};
  }
}
