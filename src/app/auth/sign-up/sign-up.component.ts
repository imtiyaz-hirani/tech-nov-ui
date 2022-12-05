import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      name: new FormControl(''),
      jobTitle: new FormControl(''),
      managerId: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      repassword: new FormControl('')
    });

  }

  onSignUp(){
    console.log(this.signUpForm.value);
  }

}
