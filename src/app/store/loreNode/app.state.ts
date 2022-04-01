import { LoreNodeModel } from './loreNode.models';
export interface AppState {
  fullNodeCollection: ReadonlyArray<LoreNodeModel>;
  filteredNodeCollection: ReadonlyArray<LoreNodeModel>;
}
