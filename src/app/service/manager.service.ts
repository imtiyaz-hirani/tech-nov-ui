import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getAllManagers() : Observable<Manager[]>{
    return this.http.get<Manager[]>('http://localhost:8989/api/manager/all');
  }
}
