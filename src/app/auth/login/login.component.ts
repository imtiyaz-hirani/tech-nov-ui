import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.msg$.subscribe({
      next: (data)=>{
        this.msg = data;
      }
    });
  }

}
