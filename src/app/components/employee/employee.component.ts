import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.employeeService.getEmployeeInfo(token).subscribe({
      next: (data)=>{
        this.employee = data;
      },
      error: (err)=>{}
    });
  }

}
