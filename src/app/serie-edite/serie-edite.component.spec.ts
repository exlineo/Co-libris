import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieEditeComponent } from './serie-edite.component';

describe('SerieEditeComponent', () => {
  let component: SerieEditeComponent;
  let fixture: ComponentFixture<SerieEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
