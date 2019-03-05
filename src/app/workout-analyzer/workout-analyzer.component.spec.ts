import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAnalyzerComponent } from './workout-analyzer.component';

describe('WorkoutAnalyzerComponent', () => {
  let component: WorkoutAnalyzerComponent;
  let fixture: ComponentFixture<WorkoutAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
