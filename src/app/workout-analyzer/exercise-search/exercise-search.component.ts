import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import Exercise from 'src/app/exercise.model';

@Component({
  selector: 'app-exercise-search',
  templateUrl: './exercise-search.component.html',
  styleUrls: ['./exercise-search.component.scss']
})
export class ExerciseSearchComponent implements OnInit {
  exercises: Exercise[];
  term: string;
  @Output() exerciseClicked = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getExercises().subscribe(exercises => {
      this.exercises = exercises;
    });
  }

  chooseExercise(exerciseId: number) {
    this.exerciseClicked.emit(exerciseId);
  }
}
