import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenderComponent } from './expender.component';

describe('ExpenderComponent', () => {
  let component: ExpenderComponent;
  let fixture: ComponentFixture<ExpenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
