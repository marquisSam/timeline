import { LoreNodeModel } from '../../../../store/loreNode/loreNode.models';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-node-form',
  templateUrl: './basic-node-form.component.html',
  styleUrls: ['./basic-node-form.component.scss']
})
export class BasicNodeFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  @Output() formContent = new EventEmitter<{}>();
  @Input() node : LoreNodeModel;

  public nodeForm : FormGroup = this.fb.group({
    nodeName : ["", Validators.required],
    nodeType : ["", Validators.required],
    nodeKeyWords : [""],
    text : [""]
  })

  private formListner : Subscription;

  formResponce = () : any => {

    const nodeId = this.node && this.node.nodeId || "";
    return {
      valid : this.nodeForm.valid,
      formValue : this.nodeForm.value,
      node : this.node
    }
  }

  patchForm = () : void => {
    const data = this.node;
    if(data){
      this.nodeForm.patchValue({
        nodeName : data.nodeName,
        nodeType :data.nodeType,
        nodeKeyWords :data.nodeKeyWords,
        text : data.text,
      });
    }
  }

  ngOnInit(): void {
    this.formListner = this.nodeForm.valueChanges.subscribe(change => {
      this.formContent.emit(this.formResponce());
    });
    this.formContent.emit(this.formResponce());
    this.patchForm();
  }

  ngOnDestroy() {
    this.formListner.unsubscribe();
  }
}
