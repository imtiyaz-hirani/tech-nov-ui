import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manager } from 'src/app/model/manager.model';
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

  constructor(private managerService: ManagerService) { }

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
    console.log(this.signUpForm.value);
  }

}
