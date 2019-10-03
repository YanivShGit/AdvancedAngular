import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  counterNum:number=0
  counterClass:string="even";
  constructor() { }

  ngOnInit() {
  }
encrease(){
  this.counterNum++;
  this.setCounterClass();
}

decrease(){
  this.counterNum++;
  this.setCounterClass();
}

setCounterClass(){
  this.counterNum %2 ==0?"odd":"even";
}
}
