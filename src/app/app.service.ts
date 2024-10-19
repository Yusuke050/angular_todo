import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { todo } from './todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // Todo一覧を取得する
  getTodos(): Observable<todo[]> {
    return this.http.get<todo[]>(this.url);
  }

  // 新しいTodoを作成する
  addTodo(todo: todo): Observable<todo> {
    return this.http.post<todo>(this.url, todo);
  }

  // Todoを削除する
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  // Todoを更新する
  updateTodo(todo: todo): Observable<todo> {
    return this.http.put<todo>(`${this.url}/${todo.id}`, todo);
  }
}
