import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutAnalyzerComponent } from './workout-analyzer/workout-analyzer.component';
import { ExerciseFinderComponent } from './exercise-finder/exercise-finder.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'analyze', component: WorkoutAnalyzerComponent },
  { path: 'find', component: ExerciseFinderComponent },
  { path: 'home', component: MainPageComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
