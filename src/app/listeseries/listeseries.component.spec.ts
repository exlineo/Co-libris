import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSeriesComponent } from './listeseries.component';

describe('ListeseriesComponent', () => {
  let component: ListeSeriesComponent;
  let fixture: ComponentFixture<ListeSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
