export class Party {
  id: number;
  name: string;
  votes: number;
  electionThreshold: number;

  constructor(id: number, name: string, votes: number, electionThreshold: number) {
    this.id = id;
    this.name = name;
    this.votes = votes;
    this.electionThreshold = electionThreshold;
  }
}
