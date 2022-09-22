import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  ajoutActive: boolean = true
  nomDevoir!: string
  dateDeRendu!: Date
  rendu?: boolean
  @Output() nouvelAssignment = new EventEmitter<Assignment>()
  constructor() { }

  ngOnInit(): void {
  }
  onSumbit() {
    const newAssignment = new Assignment(this.nomDevoir, this.dateDeRendu, false);
    this.nouvelAssignment.emit(newAssignment)
  }

}

