import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssignmentsServicesService } from '../services/assignments-services.service';

@Component({
  selector: 'app-assignment-connexion',
  templateUrl: './assignment-connexion.component.html',
  styleUrls: ['./assignment-connexion.component.css']
})
export class AssignmentConnexionComponent implements OnInit {
  isConnected: boolean = false;
  @Output() eventEmitter = new EventEmitter<boolean>();

  constructor(private assignmentService: AssignmentsServicesService) { }

  ngOnInit(): void {
  }
  connect(): void
  {
    
  }

}
