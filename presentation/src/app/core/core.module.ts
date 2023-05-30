import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavCharacterComponent } from './components/nav-character/nav-character.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    HeaderComponent,
    NavCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    NavCharacterComponent
  ]
})
export class CoreModule { }
