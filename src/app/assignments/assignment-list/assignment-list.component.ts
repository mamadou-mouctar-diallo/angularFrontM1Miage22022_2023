import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AssignmentsServicesService } from 'src/app/services/assignments-services.service';
import { Assignment } from '../assignment.model';
import { constants } from '../constants/constants';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit, OnChanges {
  constants = constants
  @Input()
  isClickedBtnAll: boolean = true
  @Input()
  addedAssignment!: Assignment
  nomDevoir!: string
  dateDeRendu!: Date
  rendu?: boolean
  assignmentSelectionne!: Assignment;
  clicked: boolean = false;
  assignments!: Assignment[] ;

  constructor(private assignmentsServices: AssignmentsServicesService) { }

  ngOnInit(): void {
    // this.assignments = this.assignmentsServices.getAssignments();
    this.getAssignments();

  }
  getAssignments(){
    this.assignmentsServices.getAssignments().subscribe(assignments => this.assignments  = assignments)
  }

  assignmentClique(assignment: Assignment){
    this.assignmentSelectionne = assignment
    console.log(assignment);
    this.clicked = !this.clicked
  }


  ngOnChanges(changes: SimpleChanges): void{
    let newAssignment
    for(let indexOfAssignment in changes){
      newAssignment = changes[indexOfAssignment].currentValue
    }
    if(newAssignment != undefined){
      console.log(newAssignment)
      this.assignmentsServices.addAssignment(this.addedAssignment).subscribe(message => console.log(message))
    }
  }

}
