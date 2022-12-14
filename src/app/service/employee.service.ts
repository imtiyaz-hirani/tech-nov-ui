import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeInfo(token: string): Observable<Employee> {
    let header = {
      'Authorization' : 'Basic ' + localStorage.getItem('token')
    }
    return this.http.get<Employee>(environment.serverUrl + '/employee/details', {headers: header});
  }
}
