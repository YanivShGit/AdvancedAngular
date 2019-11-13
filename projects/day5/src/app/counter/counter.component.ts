import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { TimerService } from '../timer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector:'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  value : number = 0;

  constructor(
     private timer : TimerService ,
    private zone  : NgZone,
    private cd    : ChangeDetectorRef
    
    ) { 
     // Bad option 1 
     //setInterval( this.loop.bind(this) , 50 );
    //this.loop();
    timer.ticks$.pipe(
      tap( (n) => this.loop(n) )
    ).subscribe();
  }

  loop(n:number){
    // this.value ++;
    this.value = n % 100;
    this.cd.detectChanges();
    
    // Bad option 2
     // setTimeout( this.loop.bind(this) , 50 );
  }

}

