import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../listtodos/listtodos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = this.route.snapshot.params['id']
  todo: Todo = new Todo(1, '', false, new Date())
  
  //= new Todo(this.id, this.description, this.done, this.targetDate)

  constructor(private todoService : TodoDataService, 
    private route : ActivatedRoute) { }

  ngOnInit() {
 
    this.todoService.getTodo(this.id, 'mackeylocal').subscribe(
      data => this.todo = data
    )
  }

  saveTodo(){

  }

}
