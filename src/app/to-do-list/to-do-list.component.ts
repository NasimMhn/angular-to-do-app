import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


export class ToDoItem {
  description: string;
  created: Date;
  finished: Date | null;
  constructor(description: string, created = new Date(), finished: Date | null = null) {
    this.description = description;
    this.created = created;
    this.finished = finished;
  }

  public getCreated = () => {
    return moment(this.created).format('MMM Do hh:mm');
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
    new ToDoItem('Redovisa', new Date('2020-12-07T23:59:19')),
    new ToDoItem('Minst två komponenter', new Date('2020-12-07T22:11:19'), new Date('2020-12-07T23:08:14')),
    new ToDoItem('Använd output/input', new Date('2020-12-07T19:35:14'), new Date('2020-12-07T14:05:34')),
    new ToDoItem('Implementera klickhändelse', new Date('2020-12-07T10:59:35'), new Date('2020-12-07T18:30:04')),
    new ToDoItem('Skapa en lista', new Date('2020-12-07T08:01:04'), new Date('2020-12-07T12:00:04')),
  ];

  constructor() { }

  addItem(description: string): void {
    this.items.push(new ToDoItem(description));
  }

  ngOnInit(): void {
  }

}

