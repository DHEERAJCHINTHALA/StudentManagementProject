import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  MyForm: any;
  constructor(
    private formbuilder: FormBuilder,
    private loggerservicesL: LoginService,
    private routing: Router
  ) {
    this.MyForm = formbuilder.group({
      Username: [''],
      Password: [''],
    });
  }
  formSubmit(DATA: any) {
    this.loggerservicesL.logger(DATA).subscribe((res: any) => {
      if (res == 1) {
        this.routing.navigate(['/app-students']);
      } else {
        this.routing.navigate(['/']);
      }
    });
  }
}
