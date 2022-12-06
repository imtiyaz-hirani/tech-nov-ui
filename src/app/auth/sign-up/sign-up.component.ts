import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { Manager } from 'src/app/model/manager.model';
import { AuthService } from 'src/app/service/auth.service';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  jobTitleArry: string[];
  managerArry: Manager[];
  signUpForm: FormGroup;
  employee: Employee;
  msg: string;

  constructor(private managerService: ManagerService, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.jobTitleArry= ['Developer',
                        'Sr. Developer',
                        'Software Tester',
                        'Scrum Master'];

    this.managerService.getAllManagers().subscribe({
      next: (data)=>{
        this.managerArry = data;
      },
      error: ()=>{}
    });

    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      jobTitle: new FormControl('', [Validators.required]),
      managerId: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z0-9@%_]+$/)]),
      repassword: new FormControl('', [Validators.required])
    });

  }

  onSignUp(){
    this.employee = {
      name: this.signUpForm.value.name,
      jobTitle: this.signUpForm.value.jobTitle,
      managerId: this.signUpForm.value.managerId,
      user: {
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password
      }
    };
    /* password is == repassword */
    let repassword = this.signUpForm.value.repassword;
    if(! (this.signUpForm.value.password == repassword) ){
      this.msg = 'Passwords do not match';
    }
    else{
      this.authService.signup(this.employee).subscribe({
        next: (data)=>{
          //naviagate the User to Login
          this.authService.msg$.next('SignUp Success!!')
          this.router.navigateByUrl('/');
        },
        error: (err)=>{
          //display error message
        }
      });
    }
  }

}
