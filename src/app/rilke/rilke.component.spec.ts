import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RilkeComponent } from './rilke.component';

describe('RilkeComponent', () => {
  let component: RilkeComponent;
  let fixture: ComponentFixture<RilkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RilkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RilkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
