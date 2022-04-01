
export interface LoreNodeModel {
  nodeId : string,
  createTime : number,
  nodeType : string,
  nodeKeyWords : string[],
  nodeName : string,
  text : string,
  gallery? : any,
  featuredImg? : string,
  refIn? : string[],
  refOut? : string[],
  metaData : metaData
}

export interface filtersModel {
  allNodesFilters? : {
    byNameFilter? : string,
    byCreationDateFilter? : string
  }
  containWordsFilter? : string[]
}

export interface metaData {
  color : string
}
