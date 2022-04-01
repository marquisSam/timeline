import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoreNodeService } from '@core/services/lore-node.service';
import { LoreNodeModel } from '@store/loreNode/loreNode.models';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossary-card',
  templateUrl: './glossary-card.component.html',
  styleUrls: ['./glossary-card.component.scss']
})
export class GlossaryCardComponent implements OnInit {

  constructor( private router : Router) { }

  @Input() loreNode : LoreNodeModel;
  @HostListener('click', ['$event.target'])
  onClick(card) {
    const { nodeId } = this.loreNode;
    this.router.navigate([`glossary/card/${nodeId}`])
  }
  ngOnInit(): void {}
}
