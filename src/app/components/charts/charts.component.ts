import { ChartService } from './../../shared/services/chart.service';
import { Committee } from './../../models/committee';
import { CommitteeService } from './../../shared/services/committee.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  committees: Committee[];
  chartHeight: number;
  chartWidth: number;

  constructor(private committeeService: CommitteeService,
    private chartService: ChartService) {  }

  ngOnInit() {
    this.committees = this.committeeService.committees;
    this.chartSize();
  }

  @HostListener('window:resize', ['$event'])
  chartSize(): void {
    this.chartHeight = window.innerHeight / 2;
    this.chartWidth = window.innerWidth;
    }
}
