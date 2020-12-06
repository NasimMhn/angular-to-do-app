import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
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

  handleClick(item: ToDoItem) {
    console.log(item);

    if (!item.finished) {
      item.finished = true;
    }
    else {
      item.finished = false;
    }
  }
}
