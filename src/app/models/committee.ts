import { Quotient } from './quotient';
export class Committee {
  name: string;
  votes: number;
  electionThreshold: number;
  percentageOfVotes: number;
  quotients: Quotient[];
  mandates: number;

  constructor(name?: string, votes?: number, electionThreshold?: number, percentageOfVotes?: number, mandates?: number) {
    this.name = name;
    this.votes = votes;
    this.electionThreshold = electionThreshold;
    this.quotients = new Array<Quotient>();
    this.percentageOfVotes = percentageOfVotes;
    this.mandates = mandates;
  }
}
