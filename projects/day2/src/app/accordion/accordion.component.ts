import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { ExpenderComponent } from '../expender/expender.component';

@Component({
  selector: 'm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @ContentChildren(ExpenderComponent) panels:QueryList<ExpenderComponent>;

  constructor() { }

  ngOnInit() {
  }
  setActive(panel : ExpenderComponent){
    this.panels.forEach( p => p.active = false);
    panel.active = true;
  }
}
