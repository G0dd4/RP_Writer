import { Component } from '@angular/core';
import { Character } from '../../models/character-card.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  public characters : Character[] = [
    {
      Id : 0,
      Firstname : "Jimmy",
      Lastname : "Jones",
      Image : "",
      Description : ""
    },
    {
      Id : 1,
      Firstname : "Archibal",
      Lastname : "McKenzies",
      Image : "",
      Description : ""
    },
    {
      Id : 2,
      Firstname : "Chip",
      Lastname : "O'Brien",
      Image : "",
      Description : ""
    },
    {
      Id : 3,
      Firstname : "Dave",
      Lastname : "Rumjacks",
      Image : "",
      Description : ""
    }
  ]

  
}
