import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Input()
  isClickedBtnAdd: boolean = false
  nomDevoir!: string
  dateDeRendu!: Date
  rendu?: boolean
  @Output() NewAssignment = new EventEmitter<Assignment>()
  constructor() { }

  ngOnInit(): void {
  }
  onSumbit() {
    const newAssignment = new Assignment();
    newAssignment.name = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    this.NewAssignment.emit(newAssignment)
    console.log("In add componement "+newAssignment)
  }

}

