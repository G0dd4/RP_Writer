import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
    {name: "Relation ship", type: "relation"},
    {name: "Add new", type: "add"}
  ];
  
  
  constructor(private matIconRegistry : MatIconRegistry,
    private domSanitizer: DomSanitizer
    ){
    matIconRegistry.addSvgIcon('note', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/i-noter.svg'));
    matIconRegistry.addSvgIcon('tree', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/i-family.svg'));
    matIconRegistry.addSvgIcon('relation', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/i-relation.svg'));
    matIconRegistry.addSvgIcon('add', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/i-plus.svg'));

  }

  public HasImage() : any {
    if(this.characterInfo.Image.length == 0) 
      return {'background-color': "rgb(199, 199, 199)"};
    return {'background-image' : `url(${this.characterInfo.Image})`};
  }
}
