import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import Exercise from 'src/app/exercise.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-exercise-log',
  templateUrl: './exercise-log.component.html',
  styleUrls: ['./exercise-log.component.scss']
})
export class ExerciseLogComponent implements OnInit, OnChanges {

  @Input() chosenExerciseId: number;
  @Output() exerciseLogData = new EventEmitter();
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

  runAnalysis() {
    const exerciseVolumes = new Map<Exercise, number>();
    for (let i = 0; i < this.loggedExercises.length; i++) {
      let exerciseTotalVolume = Number((<HTMLInputElement>document.getElementById('reps_' + i)).value);
      exerciseTotalVolume *= Number((<HTMLInputElement>document.getElementById('sets_' + i)).value);
      exerciseTotalVolume *= Number((<HTMLInputElement>document.getElementById('load_' + i)).value);
      if (exerciseVolumes.has(this.loggedExercises[i])) {
        exerciseTotalVolume += exerciseVolumes.get(this.loggedExercises[i]);
      }
      exerciseVolumes.set(this.loggedExercises[i], exerciseTotalVolume);
    }
    this.exerciseLogData.emit(exerciseVolumes);
  }

}
