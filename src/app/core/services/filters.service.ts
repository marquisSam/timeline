import { element } from 'protractor';
import { of, Observable } from 'rxjs';
import { LoreNodeModel } from '@store/loreNode/loreNode.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  constructor() { }

  byCreationDateFilter(byCreationDateFilter, nodeList){
    return [...nodeList].sort(( a : LoreNodeModel , b : LoreNodeModel ) : any => {
      if(byCreationDateFilter === "ascending"){
        return a.createTime - b.createTime;
      }else if(byCreationDateFilter === "descending"){
        return b.createTime - a.createTime;
      }else{
        return a.createTime - b.createTime;
      }
    })
  }

  byNameFilter(byNameFilter, nodeList){
    return [...nodeList].sort(( a : LoreNodeModel , b : LoreNodeModel ) : any => {
      if(byNameFilter === "ascending"){
        return a.nodeName.localeCompare(b.nodeName);
      }else if(byNameFilter === "descending"){
        return b.nodeName.localeCompare(a.nodeName);
      }else{
        return a.nodeName.localeCompare(b.nodeName);
      }
    })
  }

  private containWordsFilter = (containWordsFilter,nodeList) => nodeList.filter((node)=>{
    for (let key in node){
      const item = node[key];
      if(typeof item === "string"){
        if(item.toLowerCase().includes(containWordsFilter.toLowerCase())) return true;
      }else if(Array.isArray(item)){
        for (let i = 0; i < item.length; i++) {
          const element = item[i];
          if(typeof element === "string"){
            if(element.toLowerCase().includes(containWordsFilter.toLowerCase())) return true;
          }
        }
      }
    }
    return false
  })


  ofTypeFilter(ofTypeFilter : string[], nodeList : LoreNodeModel[]) : LoreNodeModel[] {
    console.log('ofTypeFilter_',ofTypeFilter)
    console.log('nodeList_',nodeList)
    return nodeList.filter(node => ofTypeFilter.includes(node.nodeType.toLowerCase()))
  }


  private individualFilter(filters, nodeList){
    const {containWordsFilter, ofTypeFilter} = filters;

    if(containWordsFilter) nodeList = this.containWordsFilter(containWordsFilter, nodeList);
    if(ofTypeFilter && ofTypeFilter.length > 0) nodeList = this.ofTypeFilter(ofTypeFilter, nodeList);

    return nodeList;
  }
  private globalFilter(filters, nodeList){
    const {byNameFilter, byCreationDateFilter} = filters;
    console.log('byNameFilter',byNameFilter)
    if(byNameFilter) nodeList = this.byNameFilter(byNameFilter, nodeList);
    if(byCreationDateFilter) nodeList = this.byCreationDateFilter(byCreationDateFilter, nodeList);



    return nodeList;
  }

  filterNodesList({filters},nodeList) : Observable<LoreNodeModel[]> {
    if(filters){
      nodeList = this.individualFilter(filters, nodeList);
      nodeList = this.globalFilter(filters, nodeList);
    }
    return of(nodeList)
  }
}
