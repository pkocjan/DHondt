import { Committee } from './../../models/committee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private _colors = {  domain: ['#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2',
  '#B7332F', '#2C83C9', '#9166B8', '#92E7E8' ] };
  // private _chartSize = [];
  constructor() { }

  prepareBarChart(committees: Committee[]): any[] {
    const chartData: any[] = new Array<any>();
    for (let i = 0; i < committees.length; i++) {
      chartData.push({
        'name' : committees[i].name,
        'value' : committees[i].percentageOfVotes,
      });
    }
    return chartData;
  }
  preparePieChart(committees: Committee[]): any[] {
    const chartData: any[] = new Array<any>();
    for (let i = 0; i < committees.length; i++) {
      chartData.push({
        'name' : committees[i].name,
        'value' : committees[i].mandates,
      });
    }
    return chartData;
  }

  get colors() {
    return this._colors;
  }
}
