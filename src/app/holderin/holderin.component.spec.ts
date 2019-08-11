import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolderinComponent } from './holderin.component';

describe('HolderinComponent', () => {
  let component: HolderinComponent;
  let fixture: ComponentFixture<HolderinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolderinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
