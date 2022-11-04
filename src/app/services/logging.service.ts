import { Injectable } from '@angular/core';
import { User } from '../assignments/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoggingService
{
  user: User = {
    usernme: 'diallo',
    password: '123456'
  }

  constructor() { }

  log(assignmentname: String, action: any){
    console.log("Assignment "+assignmentname+" "+action)
  }
  connect(): void
  {

  }
}
