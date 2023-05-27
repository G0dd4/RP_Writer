import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/character-card.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit{
  @Input()
  character!: Character;

  private maxDescriptionLength = 10
  private maxFirstnameLength = 5

  ngOnInit(){
    console.log(this.character.Firstname);
  }

  public ShortenDescription() : string {
    if(this.character.Description.length > this.maxDescriptionLength)
      return this.character.Description.substring(0, this.maxDescriptionLength) + ' ...';
    return this.character.Description;
  }

  public ShortenFirstname() : string {
    if(this.character.Firstname.length > this.maxFirstnameLength)
      return this.character.Firstname.substring(0, this.maxFirstnameLength) + ' ...';
    return this.character.Firstname;
  }

  public HasImage() : any {
    if(this.character.Image.length == 0) 
      return {'background-color': "rgb(199, 199, 199)"};
    return {'background-image' : `url(${this.character.Image})`};
  }
}
