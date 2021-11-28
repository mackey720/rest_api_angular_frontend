import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/listtodos/listtodos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  retrieveAllTodos(username : string) {
    return this.http.get<Todo[]>(`http://localhost:8080//users/${username}/todos`)
  }

  deleteTodo(id : number, username : string) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  getTodo(id : number, username: string) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(id : number, username: string, todo : Todo) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo : Todo) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo)
  }

}
