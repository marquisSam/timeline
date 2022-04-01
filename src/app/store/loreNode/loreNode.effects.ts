import { FiltersService } from './../../core/services/filters.service';
import { fullNodeCollection } from '@store/loreNode/loreNode.selectors';
import { filteredNodeAction, filteredNodeResultAction, fetchAllLoreNode, fetchAllLoreNodeSuccess } from './loreNode.actions';
import { LoreNodeService } from './../../core/services/lore-node.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, withLatestFrom, tap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class loreNodeEffect {

  constructor(
    private actions$: Actions,
    private filtersService: FiltersService,
    private loreNodeService: LoreNodeService,
    private store: Store
  ) { }

  fetchAllLoreNode$ = createEffect(() => this.actions$.pipe(
    ofType(fetchAllLoreNode),
    switchMap(() => this.loreNodeService.getLoreNodesCollections()
      .pipe(
        map(loreNodeCollection => {
          return fetchAllLoreNodeSuccess({loreNodeCollection})
        }),
        catchError(() => EMPTY)
      ))
  ));
  fetchAllLoreNodeSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fetchAllLoreNodeSuccess),
    map(({loreNodeCollection})=>{
      return filteredNodeAction(null)
    })
  ));
  // ), { dispatch: false });


  filteredNodeAction$ = createEffect(() => this.actions$.pipe(
    ofType(filteredNodeAction),
    withLatestFrom(
      this.store.select(fullNodeCollection)
    ),
    switchMap(([action, loreNodeCollection])=> {
      return this.filtersService.filterNodesList(action, loreNodeCollection).pipe(
        map((filteredLoreNodeCollection)=>{
          return filteredNodeResultAction({filteredLoreNodeCollection})
        })
      )
    })
  ))
}
