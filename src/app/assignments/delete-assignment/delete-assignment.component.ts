import { Component, OnInit } from '@angular/core';
import { AssignmentsServicesService } from 'src/app/services/assignments-services.service';
import { Assignment } from '../assignment.model';
import { constants } from '../constants/constants';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent implements OnInit {
  constants = constants
  assignments!: Assignment[]

  constructor(private assignmentService: AssignmentsServicesService) { }

  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(assignment => this.assignments = assignment);
  }
  onDelete(assignment: Assignment): void {
    this.assignmentService.deleteAssignment(assignment).subscribe(msg => console.log(msg))
  }
}
