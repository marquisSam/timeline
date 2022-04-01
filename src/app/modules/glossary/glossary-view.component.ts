import { Component, OnInit } from '@angular/core';

import { filteredNodeCollectionSelector } from '@store/loreNode/loreNode.selectors';
import { fetchAllLoreNode } from '@store/loreNode/loreNode.actions';
import { LoreNodeModel } from '@store/loreNode/loreNode.models';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-glossary-view',
  templateUrl: './glossary-view.component.html',
  styleUrls: ['./glossary-view.component.scss']
})
export class GlossaryViewComponent implements OnInit {

  constructor (private store : Store) {
    this.store.dispatch(fetchAllLoreNode());
  }

  ngOnInit(): void {}
}
