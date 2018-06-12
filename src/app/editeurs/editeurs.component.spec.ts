import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeursComponent } from './editeurs.component';

describe('EditeursComponent', () => {
  let component: EditeursComponent;
  let fixture: ComponentFixture<EditeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
