import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotEditComponent } from './plot-edit.component';

describe('PlotEditComponent', () => {
  let component: PlotEditComponent;
  let fixture: ComponentFixture<PlotEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
