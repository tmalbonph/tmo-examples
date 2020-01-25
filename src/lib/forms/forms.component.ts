import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'tmo-examples-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  themeClasses = ['', 'tmo-dark-theme'];
  restrictedStyleIsOn = false;

  contactForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  isInvalid(control: FormControl): boolean {
    return control && control.invalid && (control.dirty || control.touched);
  }

  getEmailErrorMessage() {
    if (this.email) {
      return this.email.hasError('required')
        ? 'You must enter a value'
        : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
    } else {
      return null;
    }
  }
}
