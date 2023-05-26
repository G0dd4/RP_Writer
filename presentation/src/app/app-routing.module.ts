import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule)},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'character', loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)},
  {path: '**', redirectTo: 'News'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
