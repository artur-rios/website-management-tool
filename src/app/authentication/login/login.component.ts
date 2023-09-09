import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormField } from 'src/app/shared/form/form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private validationMessages = {
    email: [
      { type: 'required', message: 'Type your e-mail' },
      { type: 'email', message: 'Enter a valid e-mail' },
    ],
    password: [{ type: 'required', message: 'Type your password' }],
  };

  public formFields: Array<FormField> = [
    {
      formControl: new FormControl('', [Validators.required, Validators.email]),
      label: 'E-mail',
      name: 'email',
      type: 'email',
      validationMessages: this.validationMessages.email,
    },
    {
      formControl: new FormControl('', Validators.required),
      label: 'Password',
      name: 'password',
      type: 'password',
      validationMessages: this.validationMessages.password,
    },
  ];

  public onSubmit(event: any): void {
    //TODO
    console.log('SUBMITTED FORM:', event);
  }
}
