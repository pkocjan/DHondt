import { Committee } from './../../models/committee';
import { ChartService } from './../../shared/services/chart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  committees: Committee[];
  view: any[];
  colors: any;
  chartData: any[];
  xAxis: boolean;
  yAxis: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  showGridLines: boolean;
  legend: boolean;
  legendTitle: string;
  legendPosition: string;
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.view = [400, 400];
    this.colors = this.chartService.colors;
    this.chartData = this.chartService.prepareBarChart(this.committees);
    this.xAxis = true;
    this.yAxis = true;
    this.showXAxisLabel = true;
    this.showYAxisLabel = true;
    this.xAxisLabel = 'Ilość głosów';
    this.yAxisLabel = 'Komitet';
    this.showGridLines = true;
    this.legend = false;
    this.legendTitle = 'Komitety';
    this.legendPosition = 'below';
  }

}
