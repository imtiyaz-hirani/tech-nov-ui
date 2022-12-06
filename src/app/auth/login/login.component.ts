import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

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
        console.log(data);
      },
      error: (err)=>{
         this.msg = 'Invalid Credentials';
      }
    });
  }
}
//base-64 technique to encode the plain text
