import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrechtComponent } from './brecht.component';

describe('BrechtComponent', () => {
  let component: BrechtComponent;
  let fixture: ComponentFixture<BrechtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrechtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrechtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
