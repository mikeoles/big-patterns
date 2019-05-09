import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, OnChanges {

  @Input() exerciseLogVolumes: Map<number, number>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['exerciseLogVolumes']) {
      alert(this.exerciseLogVolumes.get(1));
      // todo analyze exercises
    }
  }

}
