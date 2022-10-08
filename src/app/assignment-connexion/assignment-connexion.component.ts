import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-connexion',
  templateUrl: './assignment-connexion.component.html',
  styleUrls: ['./assignment-connexion.component.css']
})
export class AssignmentConnexionComponent implements OnInit {
  isConnected: boolean = false;
  @Output() eventEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onClickBtnConnexion(){
    this.isConnected = !this.isConnected;
    this.eventEmitter.emit(this.isConnected);
  }

}
