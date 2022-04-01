import { LoreNodeModel } from '@store/loreNode/loreNode.models';
import { AppState } from './app.state';
import { fetchAllLoreNode, removeLoreNode, addLoreNode, editLoreNodes, filteredNodeAction, filteredNodeResultAction, fetchAllLoreNodeSuccess } from './loreNode.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const initialLoreNodes : AppState = {
  fullNodeCollection : [],
  filteredNodeCollection : []
};

export const loreNodeReducer = createReducer(
  initialLoreNodes.fullNodeCollection,
  on(fetchAllLoreNodeSuccess, (state, { loreNodeCollection } : any) => {
    return [...loreNodeCollection]
  }),
  on(addLoreNode, (state, { loreNode } : any) => {
    return [...state, loreNode];
  }),
  on(editLoreNodes, (state, { loreNode } : any) => {
    return state.map(node =>  {
      if(node.nodeId === loreNode.nodeId){
        return loreNode;
      }else{
        return node;
      }
    });
  }),
  on(removeLoreNode, (state, { nodeId } : any) => state.filter((loreNode) => loreNode.nodeId !== nodeId)),
);

export const filterNodeReducer = createReducer(
  initialLoreNodes.filteredNodeCollection,
  on(filteredNodeResultAction, (state, { filteredLoreNodeCollection } : any) => {
    return [ ...filteredLoreNodeCollection ];
  })
);
