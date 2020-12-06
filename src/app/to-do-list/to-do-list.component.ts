import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

interface ToDoItem {
  title: string;
  description: string;
  created: string;
}

class ToDoItem {
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.created = moment(new Date()).format('lll');
  }
}


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  pageTitle = 'To-Do List';

  items: ToDoItem[] = [
    new ToDoItem('First', 'Description 1'),
    new ToDoItem('Second', 'Description 2'),
    new ToDoItem('Third', 'Description 3')
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
