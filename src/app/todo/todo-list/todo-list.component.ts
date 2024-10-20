// src/app/todo/todo-list/todo-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() updateTodo = new EventEmitter<Todo>();

  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
  }

  onUpdateTodo(todo: Todo) {
    this.updateTodo.emit(todo);
  }
}
