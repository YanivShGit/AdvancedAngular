import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() title:string;
  @Input() active : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
