import { AppState } from './app.state';
import { createSelector, createFeatureSelector, Selector } from "@ngrx/store";
import { LoreNodeModel } from './loreNode.models';


export const fullNodeCollection = createSelector(
  (state: AppState) : any => state.fullNodeCollection,
  (fullNodeCollection: Array<LoreNodeModel>) => fullNodeCollection
);
export const filteredNodeCollectionSelector = createSelector(
  (state: AppState) : any => state.filteredNodeCollection,
  (filteredNodeCollection: Array<LoreNodeModel>) => {
    return filteredNodeCollection
  }
);
export const nodeByIdSelector = (id) => createSelector(
  (state: AppState) : any => state.fullNodeCollection,
  (fullNodeCollection: Array<LoreNodeModel>) => {
    const filteredarr = fullNodeCollection.filter(node => node.nodeId === id);
    console.log('filteredarr',filteredarr)
    return filteredarr[0]
  }
);
