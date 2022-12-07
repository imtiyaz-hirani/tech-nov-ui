import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  loginForm: FormGroup;
  user :User;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

    this.authService.msg$.subscribe({
      next: (data)=>{
        this.msg = data;
      }
    });
  }

  onLogin(){
    //Call Login API
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let token = window.btoa(username + ':' + password);
    this.authService.login(token).subscribe({
      next: (data)=>{
         this.user = data;
         /*
          Save user details for login check
          1. Cache Memory
          2. Subjects
         */

         //Cache Memory
         localStorage.setItem("username",this.user.username);
         localStorage.setItem("role", this.user.role);
         localStorage.setItem("token", token);
         //Subject
        this.authService.user$.next(this.user);

         /* Check the role */
         if(this.user.role == 'MANAGER'){
            this.router.navigateByUrl('/manager');
         }
         else
         if(this.user.role == 'EMPLOYEE'){
            this.router.navigateByUrl('/employee');
         }
      },
      error: (err)=>{
         this.msg = 'Invalid Credentials';
      }
    });
  }
}
//base-64 technique to encode the plain text
