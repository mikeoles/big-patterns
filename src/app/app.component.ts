import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'big-patterns';

  patternOptions: String[] = ['Locomotion', 'Change Of Direction', 'Throwing','Triple Extension', 'Hip Dominant',
  'Knee Dominant', 'Horizontal Push', 'Horizontal Pull', 'Vertical Push', 'Vertical Pull', 'Core, Pelvis',
  'Core, Ribs', 'Breathing'];
  stanceOptions: string[] = ['Bilateral Symmetrical', 'Asymmetrical Front/Back', 'Asymmetrical Lateral'];
  planeOptions: string[] = ['Sagital', 'Frontal', 'Transverse'];
  loadOptions: string[] = ['High', 'Moderate', 'Low'];
  veclocityOptions: string[] = ['High', 'Moderate', 'Low'];
  durationOptions: string[] = ['Long', 'Moderate', 'Short'];

  appliedSorting = new Map<string, string>();

  constructor() {
  }

  ngOnInit() {
  }

  optionPicked(option) {
   this.appliedSorting.set(option.patternName, option.patternUsed);
  }
}
