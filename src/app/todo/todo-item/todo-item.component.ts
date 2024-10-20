// src/app/todo/todo-item/todo-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo = {id: 0, title: '', completed: false };
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Todo>();

  toggleComplete() {
    this.todo.completed = !this.todo.completed;
    this.update.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo.id);
  }
}
