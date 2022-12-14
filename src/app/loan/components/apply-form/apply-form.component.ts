import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Amount } from '../../model/amount.model';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../service/loan.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {

  loan: Loan;
  loanGroup: FormGroup;
  amount: Amount;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {

    this.loanService.loan$.subscribe({
      next: (data)=>{
          this.loan = data;
          this.loanGroup = new FormGroup({
            type: new FormControl(this.loan.type),
            amount: new FormControl('')
          });
      }
    });
  }
u
  onLoanSubmit(){
    this.loanService.applyLoan(this.loan.id, this.loanGroup.value.amount).subscribe({
      next: (data)=>{
          this.amount = data;
      },
      error: (error)=>{}
    });
  }
}
