import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedComponent } from './pied.component';

describe('PiedComponent', () => {
  let component: PiedComponent;
  let fixture: ComponentFixture<PiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
