import { GlossaryCollectionTableComponent } from './glossary-collection-table/glossary-collection-table.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlossaryViewComponent } from './glossary-view.component';

const routes: Routes = [{
  path: 'glossary', component: GlossaryViewComponent, children: [
    { path: 'cards', component: GlossaryCollectionTableComponent },
    { path: 'card/:id', component: CardsViewComponent },
    { path: '', redirectTo: "cards", pathMatch: 'full' },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossaryRoutingModule { }
