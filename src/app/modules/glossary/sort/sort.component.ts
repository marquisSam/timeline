import { filteredNodeAction } from './../../../store/loreNode/loreNode.actions';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder, AbstractControl, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit, OnDestroy {

  get groupFG(){ return this.filtersForm.get("group") as FormGroup; };
  get uniqueFG(){ return this.filtersForm.get("unique") as FormGroup; };

  get byNameFilter(){ return this.groupFG?.get("byNameFilter") as FormControl; };
  get byCreationDateFilter(){ return this.groupFG?.get("byCreationDateFilter") as FormControl; };

  get containWordsFilter(){ return this.uniqueFG?.get("containWordsFilter") as FormControl; };
  get ofTypeFilter(){ return this.uniqueFG?.get("ofTypeFilter") as FormControl; };

  private subscription$ : Subscription =  new Subscription();

  public filtersForm : FormGroup = this.fb.group({
    group : this.fb.group({
      byNameFilter : [null],
      byCreationDateFilter : [null],

    }),
    unique : this.fb.group({
      containWordsFilter : [null],
      ofTypeFilter : [null]
    })
  });

  constructor(
    private store:Store,
    private fb:FormBuilder
  ) {
    this.subscription$.add(
      this.filtersForm.controls["group"].valueChanges.subscribe((val) => {
        console.log("val",val.valueOf())
      })
    )
  }
  ngOnInit(): void {}
  ngOnDestroy(): void { this.subscription$.unsubscribe();}

  logger = () => console.log(this.uniqueFG.value);

  private getTriValue = (flag?) => {
    switch(flag) {
      case null:
        flag = "ascending"
        break;
      case "ascending":
        flag = "descending"
        break;
      case "descending":
        flag = null
        break;
      default:
        flag = null
    }
    return flag;
  }

  createFilterConf () {
    const filters = Object.assign({} ,this.groupFG.value, this.uniqueFG.value);
    for (let key in filters){
      const filter = filters[key];
      if( filter === null || filter === undefined || filter === ""){
        delete filters[key];
      }
    }
    return {filters};
  }

  triSort (control : AbstractControl, controlName : string) : void {
    const value = this.getTriValue(control?.value);
    control?.patchValue(value);

    this.resetFlags(control, controlName);
  }

  resetFlags ({parent : {controls}}, controlName : string) : void {
    for (let key in controls){
      if(controlName !== key){
        controls[key]?.patchValue(null)
      }
    }
  }

  sort(){
    console.log('form controls => ',this.filtersForm.value)
    this.store.dispatch(filteredNodeAction(this.createFilterConf()));
  }
}
