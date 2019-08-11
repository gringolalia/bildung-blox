import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilesiusComponent } from './silesius.component';

describe('SilesiusComponent', () => {
  let component: SilesiusComponent;
  let fixture: ComponentFixture<SilesiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilesiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilesiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
