import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.css']
})
export class TodoDoneComponent implements OnInit {
  todoArry: Todo[];
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {

    this.todoService.getAllTodos().subscribe({
      next: (data)=>{
        this.todoArry = data;
      },
      error: (error)=>{},
      complete: ()=>{}
    });
  }

}
