import { Component, VERSION } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  syllabusForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.syllabusForm = this.fb.group({
      modules: this.fb.array([]),
    });
  }

  modules(): FormArray {
    return this.syllabusForm.get('modules') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([]),
    });
  }

  addEmployee() {
    this.modules().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.modules().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.modules().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.syllabusForm.value);
  }
}
