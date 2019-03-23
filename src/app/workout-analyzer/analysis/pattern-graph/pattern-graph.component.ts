import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pattern-graph',
  templateUrl: './pattern-graph.component.html',
  styleUrls: ['./pattern-graph.component.scss']
})
export class PatternGraphComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
