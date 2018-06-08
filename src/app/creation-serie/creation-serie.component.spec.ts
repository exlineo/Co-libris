import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationSerieComponent } from './creation-serie.component';

describe('CreationSerieComponent', () => {
  let component: CreationSerieComponent;
  let fixture: ComponentFixture<CreationSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
