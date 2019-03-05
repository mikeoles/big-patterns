import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutAnalyzerComponent } from './workout-analyzer/workout-analyzer.component';
import { ExerciseFinderComponent } from './exercise-finder/exercise-finder.component';

const routes: Routes = [
  { path: 'analyze', component: WorkoutAnalyzerComponent },
  { path: 'find', component: ExerciseFinderComponent },
  { path: '',
  redirectTo: '/find',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
