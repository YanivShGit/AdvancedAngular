import { Injectable, NgZone } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private hotSource = new Subject<number>();

  public ticks$    = this.hotSource.asObservable(); 

  constructor( private zone  : NgZone ){

      zone.runOutsideAngular( () => { 

          interval(400).pipe(
              tap( n => this.hotSource.next(n) )
          ).subscribe();

      });
  }
}
