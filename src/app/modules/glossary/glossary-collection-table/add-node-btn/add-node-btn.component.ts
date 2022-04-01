import { DialogFormComponent } from './../../dialog-form/dialog-form.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoreNodeService } from '@core/services/lore-node.service';


@Component({
  selector: 'app-add-node-btn',
  templateUrl: './add-node-btn.component.html',
  styleUrls: ['./add-node-btn.component.scss']
})
export class AddNodeBtnComponent implements OnInit {

  constructor(public loreNodeService : LoreNodeService) { }

  ngOnInit(): void {}
}
