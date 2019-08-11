import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchillerComponent } from './schiller.component';

describe('SchillerComponent', () => {
  let component: SchillerComponent;
  let fixture: ComponentFixture<SchillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
