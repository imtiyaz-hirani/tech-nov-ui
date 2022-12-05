import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //use HttpClient service
  constructor(private http: HttpClient) { } //injecting the service

  getAllTodos() : Observable<Todo[]>{
    //call the api from here...
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
// HttpClient http
/*
    M i ready to handle the response coming from the api???
    - array of objects(todo)???
    - do u have a class for Todo????? NO   (Create a Class - Model)

    YES : and I have also saved the response in Observable
*/
