import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsServicesService {

  assignments: Assignment [] =  [
    {
      name:"JAVA/Spring-boot",
      dateDeRendu: new Date('2022-10-13'),
      rendu: true
    },
  {
      name:"Web Component",
      dateDeRendu: new Date('2022-11-13'),
      rendu: false
  },
  {
    name:"Mini projet Angular",
    dateDeRendu: new Date('2023-01-07'),
    rendu: false
}
]
  isDeleted: boolean = false;

  constructor() { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }
  deleteAssignment(assignment: Assignment): Observable<String>{
    let positonAssignment = this.assignments.indexOf(assignment);
    this.assignments.splice(positonAssignment, 1);

    return of("Le devoir intitulé "+assignment.name+" a été supprimé")
  }

  addAssignment(assignment: Assignment): Observable<String>{
    this.assignments.push(assignment);
    return of("Le devoir intitulé "+assignment.name+" a été ajouté")
  }
}
