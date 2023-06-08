import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character-card.model';
import { CharacterInfoService } from '../../services/characterInfo.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit{

  characterInfo$!: Observable<Character[]>

  constructor(
    private characterInfoService:CharacterInfoService
    ){}

  ngOnInit(): void{
    console.log("Gettting data")
    this.characterInfo$ = this.characterInfoService.getCharacters().pipe();
  } 
}
