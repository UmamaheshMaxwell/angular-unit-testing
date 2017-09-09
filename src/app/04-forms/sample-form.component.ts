import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class SampleFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email]
    });
  }
}
