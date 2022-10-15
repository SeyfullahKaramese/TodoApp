import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-example-app',
  templateUrl: './example-app.component.html',
  styleUrls: ['./example-app.component.css'],
})
export class ExampleAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  todoList = [
    { name: 'Task1', id: 1, done: true },
    { name: 'Task2', id: 2, done: false },
    { name: 'Task3', id: 3, done: false },
  ];
  newTodo = '';
  CreateTodo(): void {
    debugger;
    let newid = this.todoList[this.todoList.length - 1].id + 1;
    this.todoList.push({
      name: this.newTodo,
      id: newid,
      done: false,
    });
  }

  DeleteTodo(id: number): void {
    debugger;
    let selector = this.todoList.filter((p) => p.id == id)[0];
    const index: number = this.todoList.indexOf(selector);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}
