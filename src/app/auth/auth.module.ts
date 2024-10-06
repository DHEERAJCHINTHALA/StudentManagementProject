import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StudentsComponent } from './components/students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryComponent } from './components/country/country.component';
import { StatesComponent } from './components/states/states.component';
import { CityComponent } from './components/city/city.component';
import { UniversityComponent } from './components/university/university.component';
import { CollegeComponent } from './components/college/college.component';
import { ProgramComponent } from './components/program/program.component';
 

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    StudentsComponent,
    CountryComponent,
    StatesComponent,
    CityComponent,
    UniversityComponent,
    CollegeComponent,
    ProgramComponent,
 
 
 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
 
  ]
  
})
export class AuthModule { }
