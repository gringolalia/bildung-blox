import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeineComponent } from './heine.component';

describe('HeineComponent', () => {
  let component: HeineComponent;
  let fixture: ComponentFixture<HeineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
