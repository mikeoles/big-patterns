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
import { PatternGraphComponent } from './workout-analyzer/analysis/pattern-graph/pattern-graph.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    PatternSelectorComponent,
    WorkoutAnalyzerComponent,
    ExerciseSearchComponent,
    ExerciseLogComponent,
    AnalysisComponent,
    ExerciseFinderComponent,
    PatternGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
