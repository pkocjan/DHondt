import { Quotient } from './../../models/quotient';
import { Committee } from './../../models/committee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {
  private _committees: Committee[];
  lastDivider: number;

  constructor() { }

  convert(form, allVotes: number): void {
    this._committees = new Array<Committee>();
    for (const com of form.value.committees) {
      this._committees.push(new Committee(com.committeeName, com.committeeVotes, com.committeeElectionThreshold,
        this.calculatePercentOfVotes(com.committeeVotes, allVotes)));
    }
    this._committees = this._committees
      .sort((committeeA: Committee, committeeB: Committee) =>
        committeeA.votes < committeeB.votes ? 1 : committeeA.votes > committeeB.votes ? -1 : 0 );
    this.dHondtMethod(form.value.availableMandates);
    this.countMandates();
  }

  calculatePercentOfVotes(committeVotes: number, allVotes: number): number {
    return ( committeVotes / allVotes) * 100;
  }

  dHondtMethod(mandates: number): void {
    let quotientsVotes = new Array<Quotient>();
    quotientsVotes = this.divideVotesByNaturalNumbers(quotientsVotes, mandates);
    this.selectElectoralDividers(quotientsVotes, mandates);
    this.deleteUselessItems();
  }
  divideVotesByNaturalNumbers(quotients: Quotient[], mandates: number): Quotient[] {
    for (const c of this._committees) {
      for (let j = 1; j < mandates + 1; j++) {
        c.quotients.push(new Quotient(j, c.votes / j));
      }
      quotients = quotients.concat(c.quotients);
    }
    return quotients;
  }

  selectElectoralDividers(quotients: Quotient[], mandates: number): void {
    quotients
      .sort((a, b) => (a.votes < b.votes) ? 1 : ((a.votes > b.votes) ? -1 : 0))
      .splice(mandates, quotients.length - 1);

    this.lastDivider = 1;
    for (const q  of quotients) {
      if (this.lastDivider < q.divider) { this.lastDivider = q.divider; }
      q.election = true;
    }
    this.lastDivider++;
  }

  deleteUselessItems(): void {
    for (const c of this._committees) {
      c.quotients.splice(this.lastDivider, c.quotients.length - 1);
    }
  }

  countMandates(): void {
    for (const c of this._committees) {
      c.mandates = c.quotients.reduce((mandates, quotient) => {
        if (quotient.election) { mandates++; }
        return mandates;
      }, 0);
    }
  }

  generateExampleCommittees(): Committee[] {
    const committes = new Array<Committee>();
    committes.push(new Committee('Partia Prawych', 6590, 5, 32.43908442037903, 5));
    committes.push(new Committee('Partia Lewych ', 5489, 5, 27.019443760767903, 8));
    committes.push(new Committee('Partia Centrum', 3658, 8, 22.535072606448438, 6));
    committes.push(new Committee('Partia Wolnych ', 4578, 5, 18.006399212404627, 4));
    // committes.push(new Committee('a a ', 1, 5));
    return committes;
  }

  get committees() {
    // if (!this._committees) { this._committees = this.generateExampleCommittees(); }
    return this._committees;
  }
}
