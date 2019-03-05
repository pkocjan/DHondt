import { CommitteeService } from './../../shared/services/committee.service';
import { Committee } from './../../models/committee';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dhondt-table',
  templateUrl: './dhondt.component.html',
  styleUrls: ['./dhondt.component.scss']
})
export class DHondtComponent implements OnInit {

  @Input()
  committees: Committee[];
  columnName: Array<string>;
  lastDivider: number;

  constructor(private committeeService: CommitteeService) { }

  ngOnInit() {
    this.columnName = new Array<string>();
    this.columnNameFromPartiesName();
  }

  columnNameFromPartiesName(): void {
    this.columnName.push('Dzielnik');
    this.lastDivider = this.committeeService.lastDivider;
    for (let i = 0; i < this.lastDivider; i++) {
      this.columnName.push((i + 1) + '');
    }
  }
}
