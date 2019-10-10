import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-expender',
  templateUrl: './expender.component.html',
  styleUrls: ['./expender.component.scss']
})
export class ExpenderComponent implements OnInit {

  @Input() title:string;
  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  setActive()
  {
    this.active = true;
  }
}
