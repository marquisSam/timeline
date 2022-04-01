import { filteredNodeCollectionSelector } from '@store/loreNode/loreNode.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoreNodeModel } from '@store/loreNode/loreNode.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossary-collection-table',
  templateUrl: './glossary-collection-table.component.html',
  styleUrls: ['./glossary-collection-table.component.scss']
})
export class GlossaryCollectionTableComponent implements OnInit {

  // @Input() tableArray : ReadonlyArray<LoreNodeModel>;

  constructor(private store : Store) {}

  private nodeList$ : Observable<ReadonlyArray<LoreNodeModel>> = this.store.select(filteredNodeCollectionSelector);
  tableArray : ReadonlyArray<LoreNodeModel>;

  ngOnInit(): void {
    this.nodeList$.subscribe(list => {
      this.tableArray = list;
    })
  }

}
