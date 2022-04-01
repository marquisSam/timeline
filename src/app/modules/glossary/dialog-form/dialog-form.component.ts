import { LoreNodeModel } from './../../../store/loreNode/loreNode.models';
import { LoreNodeService } from '@core/services/lore-node.service';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
  constructor(
    public loreNodeService : LoreNodeService,
    @Inject(MAT_DIALOG_DATA) public node: {data: LoreNodeModel}
  ) { }

  form;
  updateForm = (form) : void => {
    this.form = form;
  }

  ngOnInit(): void {}

}
