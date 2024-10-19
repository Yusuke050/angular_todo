import { Component, OnInit } from '@angular/core';
import { TodoService } from './app.service';
import { todo } from './todo.models';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class TodoComponent implements OnInit {
  todos: todo[] = [];  // 型情報を追加
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  // 新しいTodoを追加する
  addTodo() {
    if (this.newTodo.trim()) {
      const newTodoItem: todo = {
        title: this.newTodo,
        completed: false,
        userId: 1,
        id: this.todos.length + 1,  // 仮のIDを設定
      };
      this.todoService.addTodo(newTodoItem).subscribe((data: todo) => {
        this.todos.push(data);  // サーバーから返ってきたデータを追加
      });
      this.newTodo = '';
    }
  }

  // Todoを削除する
  removeTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  // Todoを更新する
  updateTodo(todo: todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe((updatedTodo: todo) => {
      // 更新後に必要な処理を記述（例：通知やメッセージ）
    });
  }

  // コンポーネント初期化時にTodoを取得
  ngOnInit() {
    this.todoService.getTodos().subscribe((data: todo[]) => {
      this.todos = data.slice(0, 10);  // 表示件数を10件に制限
    });
  }
}
