import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoetheComponent } from './goethe.component';

describe('GoetheComponent', () => {
  let component: GoetheComponent;
  let fixture: ComponentFixture<GoetheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoetheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoetheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
