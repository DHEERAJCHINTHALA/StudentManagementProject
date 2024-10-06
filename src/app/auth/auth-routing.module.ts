import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [{ path:"", component: LoginComponent },{ path: 'app-login', component: LoginComponent },{ path: 'app-registration', component: RegistrationComponent },{ path: 'app-students', component:StudentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
