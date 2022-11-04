import { Component, OnInit } from '@angular/core';
import { Menu } from '../assignment.model';

@Component({
  selector: 'app-assignment-toolbar',
  templateUrl: './assignment-toolbar.component.html',
  styleUrls: ['./assignment-toolbar.component.css']
})
export class AssignmentToolbarComponent implements OnInit {
  opened: boolean = false;
  typeIcon: String = "menu"
  myAppTitle: String = "Student Assignments"
  receivedItem?: Menu = new Menu("", "All")
  isConnected?: boolean = false;
  routerToComponent: String = this.isConnected? "/home":"/connect"
toogleMenu() {
this.opened = !this.opened
this.typeIcon = this.opened ? "close": "menu";
}

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(item: Menu){
    this.receivedItem = item
  }
  onBtnClicked()
  {
    console.log(this.routerToComponent)
    this.isConnected = !this.isConnected
    this.routerToComponent = this.isConnected? "/home":"/connect"
  }

}
