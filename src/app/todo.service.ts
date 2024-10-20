// src/app/todo/todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../app/shared/models/todo.model'; 

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // Todoリストを取得
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  // 新しいTodoを追加
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  // Todoを削除
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  // Todoを更新
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo);
  }
}
