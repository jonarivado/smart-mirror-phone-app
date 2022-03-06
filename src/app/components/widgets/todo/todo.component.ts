import { Component, OnInit } from '@angular/core';
import { IWidget } from 'src/app/services/firestore.service';

export const todoDefault: IWidget = {
  id: 'todo',
  name: 'to-do list',
  height: 1,
  width: 1,
  properties: {
    entries: ['todo1', 'todo2', 'todo3']
  },
  classes: 'aspect-w-1 aspect-h-1 bg-gradient-to-r from-yellow-300 to-yellow-500',
  style: '',
  description: 'A customizable to-do list.',
};
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
