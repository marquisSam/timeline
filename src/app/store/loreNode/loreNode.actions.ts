import { LoreNodeModel, filtersModel } from './loreNode.models';
import { createAction, props } from "@ngrx/store";

export const fetchAllLoreNode = createAction(
  '[LORE NODE] fetch lore nodes');
export const fetchAllLoreNodeSuccess = createAction(
  '[LORE NODE] fetch lore nodes success',
  props<{ loreNodeCollection : LoreNodeModel[] }>()
);
export const fetchAllLoreNodeFailure = createAction(
  '[LORE NODE] fetch lore nodes failure',
  props<{ err : any }>()
);


export const addLoreNode = createAction(
  '[LORE NODE] Add LoreNode',
  props<{ loreNode : LoreNodeModel }>()
);
export const editLoreNodes = createAction(
  '[LORE NODE] Edit LoreNode',
  props<{ loreNode : LoreNodeModel }>()
);
export const removeLoreNode = createAction(
  '[LORE NODE] Remove LoreNode',
  props<{ nodeId : string }>()
);


export const filteredNodeAction = createAction(
  '[SORT] apply filters',
  props<{ filters : filtersModel }>()
);
export const filteredNodeResultAction = createAction(
  '[SORT] result',
  props<{ filteredLoreNodeCollection : LoreNodeModel[] }>()
);
