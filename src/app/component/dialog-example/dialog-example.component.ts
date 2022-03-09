import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  exampleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildExampleForm();
  }

  buildExampleForm() {
    this.exampleForm = this.fb.group({
      businessKey: ['', [Validators.required]],
      variables: this.fb.array([], [Validators.required])
    })
  }

  addFormControl() {
    this.variables.push(this.crateVariable());
    console.log(this.exampleForm);
  }

  removeControl(index) {
    this.variables.removeAt(index);
  }

  crateVariable(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      value: [null, Validators.required]
    });
  }

  get variables(): FormArray {
    return this.exampleForm.get('variables') as FormArray;
  }

  get varaiblesGroup() { return this.variables.controls as FormGroup[]; }

  getItem(value) {
    console.log(value)
  }
}
