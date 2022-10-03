import { Component, OnInit, Input } from '@angular/core';
import { LoanRequestModel } from '../Models/LoanRequestModel';
// import { EmploymentDetailsModel } from 'src/app/models/EmploymentDetailsModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() loan?: LoanRequestModel;
  constructor() { }
  loans = []
  loan = {
    loanRequestId: this.loans.length + 1,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    employmentType: "",
    companyName: "",
    purposeForLoan: "",
    loanAmount: ""
  }

  ngOnInit(): void {
  }


  createLoan(loan) {
    console.log("form submitted", loan);
    this.loans.push(loan);
    console.log(this.loans);
    this.loan = {
      loanRequestId: this.loans.length + 1,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      employmentType: "",
      companyName: "",
      purposeForLoan: "",
      loanAmount: ""
    }
  }


}
