import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentsServicesService } from 'src/app/services/assignments-services.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input()
  assignmentTransmis!: any;
  @Input()
  isClicked!: boolean;
  isDeleted!: boolean;
  @Output() eventEmitter = new EventEmitter<boolean>();
  constructor(private assignmentsServices: AssignmentsServicesService) { }

  ngOnInit(): void {
  }
  onAssignmentRendu(){
    this.assignmentTransmis.rendu = true;
  }
  onDelete(){
    this.assignmentsServices.deleteAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
    console.log(this.assignmentTransmis)
    this.assignmentTransmis = null
  }
}
