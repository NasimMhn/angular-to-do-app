import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() items: ToDoItem[] | undefined;

  addItem(description: string): void {
    this.items?.unshift(new ToDoItem(description));
  }
  ngOnInit(): void {
  }

}
