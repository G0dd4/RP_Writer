import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharacterModule { }
