import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-list/to-do-list.component';



@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})

export class ToDoItemComponent implements OnInit {
  @Input() item: ToDoItem | undefined;

  constructor() {

  }
  ngOnInit(): void {
  }

  handleClick(item: ToDoItem): void {
    if (item.finished instanceof Date) {
      item.finished = null;
    }
    else {
      item.finished = new Date();
    }
  }
}
