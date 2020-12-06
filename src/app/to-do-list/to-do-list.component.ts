import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


export class ToDoItem {
  title: string;
  description: string;
  created: string;
  finished: boolean;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.created = moment(new Date()).format('lll');
    this.finished = false;
  }
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  pageTitle = 'To-Do List';

  items = [
    new ToDoItem('First', 'Description 1'),
    new ToDoItem('Second', 'Description 2'),
    new ToDoItem('Third', 'Description 3'),
    new ToDoItem('Forth', 'Description 4')
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
