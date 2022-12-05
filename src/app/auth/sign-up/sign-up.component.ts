import { Component, OnInit } from '@angular/core';
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

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.jobTitleArry= ['Developer',
                        'Sr. Developer',
                        'Software Tester',
                        'Scrum Master'];
     /*
    this.jobTitleArry.push('Developer');
    this.jobTitleArry.push('Sr. Developer');
    this.jobTitleArry.push('Software Tester');
    this.jobTitleArry.push('Scrum Master');
    */

    this.managerService.getAllManagers().subscribe({
      next: (data)=>{
        this.managerArry = data;
      },
      error: ()=>{}
    });
  }

}
