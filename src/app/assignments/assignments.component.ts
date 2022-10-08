import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Assignment, Menu } from './assignment.model';
import {constants } from './constants/constants'

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit, OnChanges{
  newAssignment!: Assignment
  isClickedBtnAll: boolean = false;
  isClickedBtnAdd: boolean = false;
  isClickedBtnDelete: boolean = false;
  isClickedBtnUpdate: boolean = false;
  isClickedBtnManage: boolean = false;
  @Input()
  receivedItem?: Menu
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    let currentValueOfItemType
    for(let item in changes){
      currentValueOfItemType = changes[item]
    }
    let item = currentValueOfItemType?.currentValue
    console.log(item)
    if(item != undefined){

      if(item.type.trim() == "All"){
        this.isClickedBtnAll = true
        this.isClickedBtnAdd = false
        this.isClickedBtnDelete = false
        this.isClickedBtnUpdate = false
        this.isClickedBtnManage = false
      }
      if(item.type.trim() == "Add"){
        this.isClickedBtnAll = false
        this.isClickedBtnAdd = true
        this.isClickedBtnDelete = false
        this.isClickedBtnUpdate = false
        this.isClickedBtnManage = false
      }
      if(item.type.trim() == "Delete"){
        this.isClickedBtnAll = false
        this.isClickedBtnAdd = false
        this.isClickedBtnDelete = true
        this.isClickedBtnUpdate = false
        this.isClickedBtnManage = false
      }
      if(item.type.trim() == "Update"){
        this.isClickedBtnAll = false
        this.isClickedBtnAdd = false
        this.isClickedBtnDelete = false
        this.isClickedBtnUpdate = true
        this.isClickedBtnManage = false
      }
      if(item.type.trim() == "Manage"){
        this.isClickedBtnAll = false
        this.isClickedBtnAdd = false
        this.isClickedBtnDelete = false
        this.isClickedBtnUpdate = false
        this.isClickedBtnManage = true
      }
    }
  }

  ngOnInit(): void {
  }

  getAddeAssignment(newAssignment: Assignment){
    console.log(newAssignment)
    this.newAssignment = newAssignment
    this.isClickedBtnAll = true
  }


}
