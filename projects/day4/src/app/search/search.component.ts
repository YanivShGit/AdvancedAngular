import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { filter } from 'minimatch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search$ :Observable<string[]>;
  @ViewChild ('search', {static : true}) inputString :ElementRef
  constructor() { }

  ngOnInit() {
    this.search$ = fromEvent(this.inputString.nativeElement, 'input')
    .pipe(
        debounceTime(600),
        map( (x : any) => x.target['value'] as string),
        filter(str => str.length > 3),
        distinctUntilChanged(),
        switchMap(word=> this.createItems(word))
    );
  }

  createItems(word : string) : Observable<string[]>{
    return new observable
  }


}
