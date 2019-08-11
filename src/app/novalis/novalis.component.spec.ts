import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovalisComponent } from './novalis.component';

describe('NovalisComponent', () => {
  let component: NovalisComponent;
  let fixture: ComponentFixture<NovalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
