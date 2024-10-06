import { Component, OnInit } from '@angular/core';
import { DropdownsService } from '../../services/dropdowns.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {
  MyForm: any;
  country: any;
  states: any = [];

  constructor(
    private dropdownservice: DropdownsService,
    private formbuilder: FormBuilder
  ) {
    this.MyForm = this.formbuilder.group({
      Country: ['-select-', [Validators.required, this.validateDropdownSelection]],
      States: ['-select-', [Validators.required, this.validateDropdownSelection]],
    });
  }

  ngOnInit(): void {
    this.dropdownservice.AllCountrys().subscribe((res) => {
      this.country = res;
    });
  }

  countrychange(Data: any) {
    this.dropdownservice.AllStates().subscribe((res: any) => {
      this.states = res.filter((res: any) =>
        res.StatesId == Data ? res : null
      );
    });
  }

  formsubmit(DATA: any) {
    if (this.MyForm.valid) {
      console.log(DATA);
    } else {
      console.log('Form is invalid');
    }
  }

  // Custom validator for dropdowns
  validateDropdownSelection(control: any) {
    return control.value === '-select-' ? { invalidSelection: true } : null;
  }
}
