import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     //if true: path will be activated, component will loaded
     //if false: path will not be activated
     let username = localStorage.getItem('username');
     if(username == null){
        this.router.navigateByUrl('/');
        return false;
     }
     else{
        return true;
     }

  }
}
