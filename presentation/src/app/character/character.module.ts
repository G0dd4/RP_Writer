import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterRoutingModule } from './character.routing.module';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
