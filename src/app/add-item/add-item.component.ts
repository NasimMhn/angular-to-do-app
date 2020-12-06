import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() item: ToDoItem | undefined;

  constructor() {
  }


  ngOnInit(): void {
  }

}
