import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import Exercise from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ApiService {
  getExercise(exerciseId: number): Exercise {
    let matchingExercise: Exercise = null;
    this.http.get('../assets/exercises.json').pipe(
        map<any, Exercise[]>(exercises => exercises.Exercises.map(exercise => this.createExercise(exercise))),
    ).subscribe(ex => {
        ex.forEach(e => {
            if (e.exerciseId === exerciseId) {
                matchingExercise = e;
            }
        });
    });
    return matchingExercise;
  }

  constructor(private http: HttpClient) {}

  getExercises(): Observable<Exercise[]> {
    return this.http.get('../assets/exercises.json').pipe(
        map<any, Exercise[]>(exercises => exercises.Exercises.map(exercise => this.createExercise(exercise))),
    );
  }

    createExercise(exercise: any): Exercise {
        return {
            exerciseId: exercise.exerciseId,
            exerciseName: exercise.exerciseName,
            pattern: exercise.pattern,
            stance: exercise.stance,
            load: exercise.load,
            plane: exercise.plane,
            velocity: exercise.velocity,
            duration: exercise.duration
        };
    }
}
