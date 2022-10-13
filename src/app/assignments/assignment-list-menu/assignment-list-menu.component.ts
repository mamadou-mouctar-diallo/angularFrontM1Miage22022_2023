import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../assignment.model';

@Component({
  selector: 'app-assignment-list-menu',
  templateUrl: './assignment-list-menu.component.html',
  styleUrls: ['./assignment-list-menu.component.css']
})
export class AssignmentListMenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu('Liste des devoirs', 'home'),
  new Menu('Ajouter un devoir', 'add'),
  new Menu('Modification d\'un devoir', 'update'),
  new Menu('Suppression d\'un devoir','delete'),
  new Menu('Génération de données de test','manage')];
  @Output() itemClicked = new EventEmitter<Menu>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedItem(item: Menu){
    this.itemClicked.emit(item)
    // console.log(item)
    // console.log(item)
  }



}
