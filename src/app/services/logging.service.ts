import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(assignmentname: String, action: any){
    console.log("Assignment "+assignmentname+" "+action)
  }
}
