import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  msg$ = new BehaviorSubject('');
  constructor(private http: HttpClient) { }

  signup(employee: Employee):Observable<any> {
    return  this.http.post('http://localhost:8989/api/employee/add/'+employee.managerId,employee);
  }
}
