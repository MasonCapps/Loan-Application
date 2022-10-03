import { Component, OnInit, Input } from '@angular/core';
import { LoanRequestModel } from '../Models/LoanRequestModel';
// import { EmploymentDetailsModel } from 'src/app/models/EmploymentDetailsModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() loan?: LoanRequestModel;
  constructor() { }

  ngOnInit(): void {
  }

  created = false;

  submit(loan) {
    this.created = true;
    console.log("form submitted", loan);
  }

}
