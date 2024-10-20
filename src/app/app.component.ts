// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../app/todo.service';
import { Todo } from './shared/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data.slice(0, 10);
    });
  }

  addTodo(newTodoTitle: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: newTodoTitle,
      completed: false
    };
    this.todoService.addTodo(newTodo).subscribe((todo: Todo) => {
      this.todos.push(todo);
    });
  }

  removeTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  updateTodo(updatedTodo: Todo) {
    this.todoService.updateTodo(updatedTodo).subscribe();
  }
}
