import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterRoutingModule } from './character.routing.module';
import { CoreModule } from '../core/core.module';
import { CharacterPageComponent } from './components/character-page/character-page.component';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListComponent,
    CharacterPageComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    CoreModule
  ]
})
export class CharacterModule { }
