import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/character/models/character-card.model';


@Component({
  selector: 'app-nav-character',
  templateUrl: './nav-character.component.html',
  styleUrls: ['./nav-character.component.scss']
})
export class NavCharacterComponent{

  characterInfo : Character = {
    Id : 2,
    Firstname : "Chip",
    Lastname : "O'Brien",
    Image : "../../../../assets/third.jpg",
    Description : "RP Imperium"
  };

  pagesName : Array<{name: string,type: string}> = [
    {name: "First try", type: "note"},
    {name: "Family", type: "tree"},
    {name: "Array", type: "table"},
    {name: "relation ship", type: "relation"}
  ];
  
  
  
  public HasImage() : any {
    if(this.characterInfo.Image.length == 0) 
      return {'background-color': "rgb(199, 199, 199)"};
    return {'background-image' : `url(${this.characterInfo.Image})`};
  }

  public GetRightImage(pageType : string) : string{
    switch(pageType){
      case("note"): return "../../../../assets/i-noter.png";
      case("tree"): return "../../../../assets/i-family-tree.png";
      case("table"): return "../../../../assets/i-noter.png";
      case("relation"):  return"../../../../assets/i-relation.png";
      default: return "";
    }
  }
  
}
