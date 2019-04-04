import { Component, OnInit } from '@angular/core';
import Exercise from '../exercise.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-finder',
  templateUrl: './exercise-finder.component.html',
  styleUrls: ['./exercise-finder.component.scss']
})
export class ExerciseFinderComponent implements OnInit {

  title = 'big-patterns';

  patternOptions: String[] = ['Locomotion', 'Change Of Direction', 'Throwing', 'Triple Extension', 'Hip Dominant',
  'Knee Dominant', 'Horizontal Push', 'Horizontal Pull', 'Vertical Push', 'Vertical Pull', 'Core Pelvis',
  'Core Ribs', 'Breathing'];
  stanceOptions: string[] = ['Bilateral Symmetrical', 'Asymmetrical Front/Back', 'Asymmetrical Lateral'];
  planeOptions: string[] = ['Sagittal', 'Frontal', 'Transverse'];
  loadOptions: string[] = ['High', 'Moderate', 'Low'];
  veclocityOptions: string[] = ['High', 'Moderate', 'Low'];
  durationOptions: string[] = ['Long', 'Moderate', 'Short'];

  appliedSorting = new Map<string, string>();
  exercises: Exercise[];
  foundExercise: Exercise;

  constructor(private router: Router) {
    this.exercises = [];
    this.exercises.push(
      {
        exerciseId: 1,
        exerciseName: 'Split Squat W/ Hip Shift',
        pattern: 'Knee Dominant',
        stance: 'Asymmetrical Front/Back',
        plane: 'Frontal',
        load: 'Moderate',
        velocity: 'Moderate',
        duration: 'Short'
      }
    );
    this.exercises.push(
      {
        exerciseId: 2,
        exerciseName: '90/90 Hip Lift w/Right Heel Tap',
        pattern: 'Core Pelvis',
        stance: 'Asymmetrical Front/Back',
        plane: 'Sagittal',
        load: 'Low',
        velocity: 'Low',
        duration: 'Moderate'
      }
    );
    this.exercises.push(
      {
        exerciseId: 3,
        exerciseName: 'Adductor Draw Back',
        pattern: 'Core Pelvis',
        stance: 'Bilateral Symmetrical',
        plane: 'Frontal',
        load: 'Low',
        velocity: 'Low',
        duration: 'Moderate'
      }
    );
    this.exercises.push(
      {
        exerciseId: 4,
        exerciseName: '90% Barbell Deadlift',
        pattern: 'Hip Dominant',
        stance: 'Bilateral Symmetrical',
        plane: 'Sagittal',
        load: 'High',
        velocity: 'Low',
        duration: 'Short'
      }
    );

    this.exercises.push(
      {
        exerciseId: 5,
        exerciseName: '5 Minute Slideboard',
        pattern: 'Change Of Direction',
        stance: 'Asymmetrical Lateral',
        plane: 'Frontal',
        load: 'Low',
        velocity: 'Moderate',
        duration: 'Long'
      }
    );
    this.exercises.push(
      {
        exerciseId: 6,
        exerciseName: 'Rotational Medball Throw',
        pattern: 'Throwing',
        stance: 'Asymmetrical Lateral',
        plane: 'Transverse',
        load: 'Moderate',
        velocity: 'High',
        duration: 'Short'
      }
    );
    this.exercises.push(
      {
        exerciseId: 7,
        exerciseName: 'Jacobs Ladder, 10 Minutes',
        pattern: 'Locomotion',
        stance: 'Asymmetrical Front/Back',
        plane: 'Sagittal',
        load: 'Low',
        velocity: 'Low',
        duration: 'Long'
      }
    );
  }

  ngOnInit() {
  }

  optionPicked(option) {
   this.appliedSorting.set(option.patternexerciseName, option.patternUsed);
  }

  getExercises() {
    this.foundExercise = null;
    this.exercises.forEach(exercise => {
      if (exercise.pattern === this.appliedSorting.get('Pattern')  &&
        exercise.stance === this.appliedSorting.get('Stance')  &&
        exercise.plane === this.appliedSorting.get('Plane')  &&
        exercise.load === this.appliedSorting.get('Load')  &&
        exercise.velocity === this.appliedSorting.get('Velocity')  &&
        exercise.duration === this.appliedSorting.get('Duration')) {
        this.foundExercise = exercise;
      }
    });
    if (!this.foundExercise) {
      alert('No exercise found matching these conditions');
    }
  }

  goToAnalyzer() {
    this.router.navigate(['analyze/']);
  }
}
