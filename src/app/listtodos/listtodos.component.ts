import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

  todos : Todo[] = []
  successMessage : string = ''

  constructor(private todoService : TodoDataService,
    private router : Router) { }

  ngOnInit() { this.refreshTodos() }

  refreshTodos() {
    
    this.todoService.retrieveAllTodos('mackey720').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id : number) {
    this.todoService.deleteTodo(id, 'mackey720').subscribe(

      response => {
        this.successMessage = `Delete of Todo ${id} Successful!`
        this.refreshTodos()
      }

    )
  }

  updateTodo(id : number) {
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
