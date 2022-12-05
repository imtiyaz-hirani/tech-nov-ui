import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-pending',
  templateUrl: './todo-pending.component.html',
  styleUrls: ['./todo-pending.component.css']
})
export class TodoPendingComponent implements OnInit {

  todoArry : Todo[];

  constructor(private todoService: TodoService) { }
  //injecting the service

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe({
      next: (data)=>{
        console.log(data);
        this.todoArry = data;
        /*
        this.todoArry = this.todoArry
                    .filter(t=>t.completed == false);
        */
      },
      error: (error)=>{
        console.log(error);
      },
      complete: ()=>{

      }
    });
  }


}
