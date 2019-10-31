import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {bufferTime, map, tap, throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'day4';
  @ViewChild('btn',{ static:true }) btn : ElementRef;

  ngOnInit(): void {
    let btnElm = this.btn.nativeElement;
    this.demo2(btnElm);
  }

  demo1( btn : HTMLButtonElement ){
    let sub = fromEvent(btn,'click').pipe(
          tap( e => {
            console.log(`tap`);
          }),
          throttleTime(1000)
        )
        .subscribe( e => {
          console.dir(e);
        });

    // sub.unsubscribe();
  }
  demo1_old(btn : HTMLButtonElement){
    let handler = e =>{
      //
      console.dir(e);
    };

    btn.addEventListener('click',handler );

    // btn.removeEventListener('click',handler)
  }

  demo2( btn : HTMLButtonElement ){
    let sub = fromEvent(btn,'click').pipe(
        bufferTime(1000),
        map( b => b.length ),
        tap( n => this.title = `${n} !` )
    ).subscribe()
  }
}
