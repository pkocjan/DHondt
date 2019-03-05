import { Committee } from 'src/app/models/committee';
import { ChartService } from './../../shared/services/chart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input()
  committees: Committee[];
  viewHeight: number;
  viewWidth: number;
  view: any[];
  colors: any;
  chartData: any[];
  labels: boolean;
  legend: boolean;
  legendTitle: string;
  legendPosition: string;


  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.view = [1000, 500];
    this.colors = this.chartService.colors;
    this.chartData = this.chartService.preparePieChart(this.committees);
    // this.labels = true;
    this.legend = true;
    this.legendTitle = 'Komitety';
    this.legendPosition = 'below';
  }
}
