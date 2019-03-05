import { Committee } from './../../models/committee';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'committee-detail',
  templateUrl: './committee-detail.component.html',
  styleUrls: ['./committee-detail.component.scss']
})
export class CommitteeDetailComponent {

  @Input()
  committees: Committee[];

  constructor() { }
}
