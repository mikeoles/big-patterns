import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFinderComponent } from './exercise-finder.component';

describe('ExerciseFinderComponent', () => {
  let component: ExerciseFinderComponent;
  let fixture: ComponentFixture<ExerciseFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
