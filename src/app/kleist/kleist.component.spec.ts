import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KleistComponent } from './kleist.component';

describe('KleistComponent', () => {
  let component: KleistComponent;
  let fixture: ComponentFixture<KleistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KleistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KleistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
