import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-analyzer',
  templateUrl: './workout-analyzer.component.html',
  styleUrls: ['./workout-analyzer.component.scss']
})
export class WorkoutAnalyzerComponent implements OnInit {

  chosenExerciseId: number;

  constructor() { }

  ngOnInit() {
  }

  exerciseClicked(exerciseId: number) {
    this.chosenExerciseId = exerciseId;
  }

}
