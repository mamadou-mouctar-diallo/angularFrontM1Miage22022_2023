import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule, MatSelectionList} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentToolbarComponent } from './assignments/assignment-toolbar/assignment-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AssignmentListMenuComponent } from './assignments/assignment-list-menu/assignment-list-menu.component';
import { AssignmentListComponent } from './assignments/assignment-list/assignment-list.component';
import { DeleteAssignmentComponent } from './assignments/delete-assignment/delete-assignment.component';
import { UpdateAssignmentComponent } from './assignments/update-assignment/update-assignment.component';
import { ManageAssignmentComponent } from './assignments/manage-assignment/manage-assignment.component';
import { AssignmentConnexionComponent } from './assignment-connexion/assignment-connexion.component';

const routes: Routes = [
  {path: '', component: AssignmentsComponent},
  {path: 'home', component: AssignmentListComponent},
  {path: 'add', component: AddAssignmentComponent},
  {path: 'delete', component: DeleteAssignmentComponent},
  {path: 'update', component: UpdateAssignmentComponent},
  {path: 'manage', component: ManageAssignmentComponent },
  {path: 'connect', component: AssignmentConnexionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    AssignmentToolbarComponent,
    AssignmentListMenuComponent,
    AssignmentListComponent,
    DeleteAssignmentComponent,
    UpdateAssignmentComponent,
    ManageAssignmentComponent,
    AssignmentConnexionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
