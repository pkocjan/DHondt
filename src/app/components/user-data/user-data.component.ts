import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommitteeService } from './../../shared/services/committee.service';
import { Committee } from 'src/app/models/committee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  mandates: number;
  committees: Committee[];
  committeesForm: FormGroup;

  constructor(private committeeService: CommitteeService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.committeesForm = this.formBuilder.group({
      availableMandates : [23, [Validators.required, Validators.min(1)]],
      committees : this.formBuilder.array([])
    });
     // To tests
    // for ( const c of this.committeeService.generateExampleCommittees()) {
    //   this.addFormItem(c);
    // }
    this.addCommittee();
    this.addCommittee();
  }

  addCommittee(): void {
    this.addFormItem(new Committee());
  }

  addFormItem(committee: Committee): void {
    const committees = <FormArray>this.committeesForm.controls.committees;
    committees.push(this.createFormItem(committee));
  }
  removeFormItem(index: number): void {
    const committees = <FormArray>this.committeesForm.controls.committees;
    committees.removeAt(index);
  }
  convert(form: FormGroup): void {
    if (form.status === 'VALID') {
      const allVotes = this.sumVotes();
      this.committeeService.convert(form, allVotes);
      this.router.navigateByUrl('/charts');
    }
  }

  sumVotes(): number {
    let votes = 0;
    for ( const com of this.allCommittes.controls) {
      votes += com.get('committeeVotes').value;
    }
    return votes;
  }

  createFormItem(committee: Committee): FormGroup {
    return this.formBuilder.group({
      committeeName: [committee.name, Validators.required],
      committeeVotes: [committee.votes, [Validators.required, Validators.min(0)]],
      committeeElectionThreshold: [committee.electionThreshold, Validators.required]
    });
  }

  get allCommittes() {
    return this.committeesForm.get('committees') as FormArray;
  }
}
