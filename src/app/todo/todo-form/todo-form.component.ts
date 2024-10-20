// src/app/todo/todo-form/todo-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  newTodo: string = '';
  @Output() add = new EventEmitter<string>();

  addTodo() {
    if (this.newTodo.trim()) {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
