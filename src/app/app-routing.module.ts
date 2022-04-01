import { CardsViewComponent } from './modules/glossary/cards-view/cards-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlossaryViewComponent } from './modules/glossary/glossary-view.component';

const routes: Routes = [
  { path: 'glossary', loadChildren: () => import('@glossary/glossary.module').then(m => m.GlossaryModule) },
  { path: '', redirectTo: 'glossary', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
