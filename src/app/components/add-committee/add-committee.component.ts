import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'add-committee',
  templateUrl: './add-committee.component.html',
  styleUrls: ['./add-committee.component.scss']
})
export class AddCommitteeComponent implements OnInit {

  @Input()
  formGroup: FormGroup;
  electionThresholds: number[];

  constructor() { }

  ngOnInit() {
    this.electionThresholds = [5, 8];
   }
}
