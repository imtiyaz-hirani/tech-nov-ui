import { Component, OnInit } from '@angular/core';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../service/loan.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  loans: Loan[];

  constructor(private loanService: LoanService) {
    console.log('apply loan component')
   }

  ngOnInit(): void {  //component initializes
    this.loanService.getLoans().subscribe({
      next: (data)=>{
        this.loans = data;
        console.log(this.loans)
      },
      error: (error)=>{},
      complete:  ()=>{}
    });
  }

  onClick(loan: Loan){
      this.loanService.loan$.next(loan);
  }
}
