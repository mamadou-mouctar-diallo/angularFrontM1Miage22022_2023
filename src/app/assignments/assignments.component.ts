import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import {constants } from './constants/constants'

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title = "Mon application sur les Assignments 2 !"
  constants = constants
  assignments: Assignment [] =  [new Assignment("JAVA/Spring-boot",new Date('2022-10-13'),true
  ),
  new Assignment("Web Component",new Date('2022-11-13'),false
  ),
  new Assignment("Mini projet Angular",new Date('2023-01-07'),false
  )]
  formVisible: boolean = false
  nomDevoir!: string
  dateDeRendu!: Date
  rendu?: boolean
  assignmentSelectionne: any;
  constructor() {
  }

  ngOnInit(): void {
  }
  onAddAssignmentBtnClick(){
    this.formVisible = true
  }

  assignmentClique(assignment: Assignment){
    this.assignmentSelectionne = assignment
  }
  OnNouvelAssignment(event: Assignment){
    this.assignments.push(event)
    this.formVisible = false // on veut voir la liste avec le nouvel assignment
  }

}
