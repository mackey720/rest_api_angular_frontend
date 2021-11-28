import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../listtodos/listtodos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = this.route.snapshot.params['id']
  todo: Todo = new Todo(this.id, '', false, new Date())
  
  //= new Todo(this.id, this.description, this.done, this.targetDate)

  constructor(private todoService : TodoDataService, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    if(this.id != -1) {
      this.todoService.getTodo(this.id, 'mackeylocal').subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo(){
    if(this.id === -1) {
      this.todoService.createTodo('mackeylocal', this.todo).subscribe(
        data => this.router.navigate(['todos'])
      )
    } else {
      this.todoService.updateTodo(this.id, 'mackeylocal', this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }

  }

}
