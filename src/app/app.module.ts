import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatternSelectorComponent } from './exercise-finder/pattern-selector/pattern-selector.component';
import { WorkoutAnalyzerComponent } from './workout-analyzer/workout-analyzer.component';
import { ExerciseSearchComponent } from './workout-analyzer/exercise-search/exercise-search.component';
import { ExerciseLogComponent } from './workout-analyzer/exercise-log/exercise-log.component';
import { AnalysisComponent } from './workout-analyzer/analysis/analysis.component';
import { ExerciseFinderComponent } from './exercise-finder/exercise-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternSelectorComponent,
    WorkoutAnalyzerComponent,
    ExerciseSearchComponent,
    ExerciseLogComponent,
    AnalysisComponent,
    ExerciseFinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
