import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


export class ToDoItem {
  description: string;
  created: Date;
  finished: Date | null;
  constructor(description: string) {
    this.description = description;
    this.created = new Date();
    this.finished = null;
  }

  public getCreated = () => {
    return moment(this.created).fromNow();
  }

  public isFinished = () => {
    return this.finished instanceof Date;
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
    new ToDoItem('Description 1'),
    new ToDoItem('Description 2'),
    new ToDoItem('Description 3'),
    new ToDoItem('Description 4')
  ];
  // public sortedList(items: ToDoItem[]): ToDoItem[] {
  //   return items.sort((a, b) => (a.created > b.created) ? 1 : ((b.created > a.created) ? -1 : 0));
  // }

  constructor() { }

  addItem(description: string): void {
    this.items.push(new ToDoItem(description));
  }

  ngOnInit(): void {
  }

}

