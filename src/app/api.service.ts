import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import Exercise from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements ApiService {
  getExercise(exerciseId: number): Observable<Exercise> {
    return this.http.get('../assets/exercises.json').pipe(
        map<any, Exercise>(exercises => exercises.Exercises.find(exercise => exercise.exerciseId === exerciseId )),
    );
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
