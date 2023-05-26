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
  
  ngOnInit(){
    console.log(this.character.Firstname);
  }

  public HasImage() : any {
    if(this.character.Image.length == 0) 
      return {'background-color': "rgb(199, 199, 199)"};
    return {'background-image' : `url(${this.character.Image})`};
  }
}
