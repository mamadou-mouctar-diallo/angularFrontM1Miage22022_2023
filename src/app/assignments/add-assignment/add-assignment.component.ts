import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { AssignmentsServicesService } from 'src/app/services/assignments-services.service';
import { Assignment } from '../assignment.model';
import { Router } from '@angular/router';

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
  constructor(private assignmentService: AssignmentsServicesService, private router: Router) { }

  ngOnInit(): void {
  }
  onSumbit() {
    const newAssignment = new Assignment();
    newAssignment.name = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    this.assignmentService.addAssignment(newAssignment).subscribe(msg => console.log(msg))
    console.log("In add componement " + newAssignment.name)
    this.router.navigate(["/home"]);
  }

}

