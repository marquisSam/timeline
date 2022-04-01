import { GlossaryRoutingModule } from './glossary.routing.module';
import { SharedModule } from './../../core/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlossaryCardComponent } from '@glossary/glossary-collection-table/glossary-card/glossary-card.component';
import { GlossaryCollectionTableComponent } from './glossary-collection-table/glossary-collection-table.component';
import { AddNodeBtnComponent } from './glossary-collection-table/add-node-btn/add-node-btn.component';
import { BasicNodeFormComponent } from './dialog-form/basic-node-form/basic-node-form.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { SortComponent } from './sort/sort.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { GlossaryViewComponent } from './glossary-view.component';


@NgModule({
  declarations: [
    GlossaryViewComponent,
    GlossaryCardComponent,
    GlossaryCollectionTableComponent,
    AddNodeBtnComponent,
    BasicNodeFormComponent,
    DialogFormComponent,
    SortComponent,
    CardsViewComponent
  ],
  imports: [
    SharedModule,
    GlossaryRoutingModule,
    CommonModule,
  ]
})
export class GlossaryModule { }
