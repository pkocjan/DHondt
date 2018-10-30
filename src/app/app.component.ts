import { Quotient } from './models/quotient';
import { Party } from './models/party';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parties: Party[];
  mandates: number;

  constructor() {
    this.parties = new Array<Party>();
    this.mandates = 15;
    this.generateParties();
  }

  generateParties() {
    // for (let i = 1; i < 7; i++) {
    //   this.parties.push(new Party('V' + i, i * 100, 5));
    // }
    // this.parties.push(new Party(1, 'KOALICYJNY KOMITET WYBORCZY PLATFORMA.NOWOCZESNA KOALICJA OBYWATELSKA', 5832, 5));
    // this.parties.push(new Party(2, 'KOMITET WYBORCZY PRAWO I SPRAWIEDLIWOŚĆ', 4627	, 5));
    // this.parties.push(new Party(3, 'KOALICYJNY KOMITET WYBORCZY PLATFORMA.NOWOCZESNA KOALICJA OBYWATELSKA', 5832, 5));
    // this.parties.push(new Party(4, 'KOMITET WYBORCZY PRAWO I SPRAWIEDLIWOŚĆ', 14718	, 5));
    // this.parties.push(new Party(5, 'KOMITET WYBORCZY WYBORCÓW ODNOWA - KONTYNUACJA', 10643, 5));
    // this.parties.push(new Party(6, 'KOMITET WYBORCZY WYBORCÓW WSPÓLNOTA SAMORZĄDOWA POWIATU OLKUSKIEGO', 8259, 5));
    // this.parties.push(new Party(7, 'KOALICYJNY KOMITET WYBORCZY PLATFORMA.NOWOCZESNA KOALICJA OBYWATELSKA', 5486	, 5));
    this.parties.push(new Party(1, 'Partia Prawych', 6590, 5));
    this.parties.push(new Party(2, 'Partia Lewych', 5489, 5));
    this.parties.push(new Party(3, 'Partia Centrum', 3658, 5));
    this.parties.push(new Party(4, 'Partia Wolnych', 4578, 5));
  }

  convert() {
    // console.log('Before: ' + JSON.stringify(this.parties));
    this.parties.sort((a: Party, b: Party) => {
      if (a.votes > b.votes) {
        return -1;
      } else if (a.votes < b.votes) {
        return 1;
      } else {
        return 0;
      }
    });
    // console.log('After: ' + JSON.stringify(this.parties));
    const quotient: Quotient[] = new Array<Quotient>();
    for (let i = 0; i < 4; i++) {
      for ( let j = 0; j < this.parties.length; j++) {
        quotient.push(new Quotient(this.parties[j], i, this.parties[j].votes / i));
      }
    }
  }
}
