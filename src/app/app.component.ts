import { Component } from '@angular/core';
import { LoanRequestModel } from './Models/LoanRequestModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan-Application';
  loan: LoanRequestModel[] = [];
  loanEdit?: LoanRequestModel = new LoanRequestModel();
}
