import { RouterModule, Routes } from "@angular/router";
import { CharacterListComponent } from "./components/character-list/character-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', component: CharacterListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CharacterRoutingModule { }
  