import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  arrow: string;
  equation: string;
  _I: string;
  _L: string;
  _n: string;
  showContent: boolean;

  constructor() { }

  ngOnInit() {
    this.arrow = 'down';
    this.equation = 'I = \\frac{L}{n}';
    this._I = 'I';
    this._L = 'L';
    this._n = 'n';
    this.showContent = true;
  }

  showDhontInformation(): void {
    this.showContent = !this.showContent;
    this.arrow = (this.arrow === 'down') ? 'up' : 'down';
  }
}
