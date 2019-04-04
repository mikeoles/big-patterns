import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import Exercise from 'src/app/exercise.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.scss']
})
export class ExerciseLogComponent implements OnInit, OnChanges {

  @Input() chosenExerciseId: number;
  loggedExercises: Exercise[] = [];
  exerciseList: Exercise[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getExercises().subscribe(exercises => {
      this.exerciseList = exercises;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chosenExerciseId'] && this.exerciseList) {
      this.exerciseList.forEach(exercise => {
        if (this.chosenExerciseId === exercise.exerciseId) {
          this.loggedExercises.push(exercise);
        }
      });
    }
  }

  removeExercise(index: number) {
    this.loggedExercises.splice(index, 1);
  }

}
