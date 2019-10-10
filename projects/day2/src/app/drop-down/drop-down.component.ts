import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'm-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @ContentChild('tabTemplate' , {read:TemplateRef, static:true} ) tabTemplate;
@Input() items : Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
