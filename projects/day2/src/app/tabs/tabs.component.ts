import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @ContentChildren(PanelComponent) panels:QueryList<PanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  setActive(panel : PanelComponent){
    this.panels.forEach( p => p.active = false);
    panel.active = true;
  }

}
