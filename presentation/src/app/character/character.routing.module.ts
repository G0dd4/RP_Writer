import { RouterModule, Routes } from "@angular/router";
import { CharacterListComponent } from "./components/character-list/character-list.component";
import { NgModule } from "@angular/core";
import { CharacterPageComponent } from "./components/character-page/character-page.component";

const routes: Routes = [
    {path: 'character-page/:id', component: CharacterPageComponent},
    {path: '', component: CharacterListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CharacterRoutingModule { }
  