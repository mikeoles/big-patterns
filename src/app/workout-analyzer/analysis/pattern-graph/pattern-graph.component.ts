import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pattern-graph',
  templateUrl: './pattern-graph.component.html',
  styleUrls: ['./pattern-graph.component.scss']
})
export class PatternGraphComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() data: Map<string, number>;
  categories: string[];
  loadValues: number[];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.categories = Array.from(this.data.keys());
      this.loadValues = Array.from(this.data.values());
    }

  }


}
