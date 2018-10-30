import { Party } from './party';

export class Quotient {
  party: Party;
  divider: number;
  votes: number;

  constructor(party: Party, divider: number, votes: number) {
    this.party = party;
    this.divider = divider;
    this.votes = votes;
  }
}
