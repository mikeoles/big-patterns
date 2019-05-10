import { Component, OnInit } from '@angular/core';
import Exercise from '../exercise.model';

@Component({
  selector: 'app-workout-analyzer',
  templateUrl: './workout-analyzer.component.html',
  styleUrls: ['./workout-analyzer.component.scss']
})
export class WorkoutAnalyzerComponent implements OnInit {

  chosenExerciseId: number;
  exerciseLogVolumes: Map<Exercise, number>;

  constructor() { }

  ngOnInit() {
  }

  exerciseClicked(exerciseId: number) {
    this.chosenExerciseId = exerciseId;
  }

  exerciseLogData(exerciseVolumes: Map<Exercise, number>) {
    this.exerciseLogVolumes = exerciseVolumes;
  }

}
