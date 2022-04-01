import { LoreNodeService } from '@core/services/lore-node.service';
import { Subscription, Observable } from 'rxjs';
import { LoreNodeModel } from '@store/loreNode/loreNode.models';
import { nodeByIdSelector } from './../../../store/loreNode/loreNode.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  public node$ : Observable<LoreNodeModel> = this.store.select(nodeByIdSelector(this.route.snapshot.paramMap.get('id')));

  constructor(
    public loreNodeService : LoreNodeService,
    private store : Store,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot;

    console.log('id',id)
    console.log('this.location',this.location)
  }

}
