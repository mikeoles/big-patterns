import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pattern-graph',
  templateUrl: './pattern-graph.component.html',
  styleUrls: ['./pattern-graph.component.scss']
})
export class PatternGraphComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() data: Map<string, number>;
  public barChartData: ChartDataSets[] = [];
  public barChartLabels: Label[] = [this.title];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: false,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.barChartData = [];
      Array.from(this.data.keys()).forEach(element => {
        this.barChartData = this.barChartData.concat(
          { data: [this.data.get(element)], label: element }
        );
      });
    }

  }


}
