import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.user$.subscribe({
      next: (data)=>{
          this.user = data;
      }
    })
  }

  logout(){
    localStorage.clear();
    this.authService.msg$.next('Your have Logged Out!!');
    this.authService.user$.next(undefined);
    this.router.navigateByUrl('/');
  }
}
