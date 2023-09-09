import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() formFields: Array<FormField> = [];

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public formReset = false;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnChanges(): void {
    this.form = this.formBuilder.group(this.buildFormControls());
  }

  get f() {
    return this.form.controls;
  }

  public getFormControl(controlName: string) {
    return this.form.controls[controlName] as FormControl;
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.formReset) {
      if (!this.f['email'].value) {
        this.f['email'].setErrors({ required: true });
      }

      if (!this.f['password'].value) {
        this.f['password'].setErrors({ required: true });
      }
    }

    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);

      this.submitted = false;
      this.resetForm(this.form);
    }
  }

  private buildFormControls(): any {
    const controls: any = {};

    for (let field of this.formFields) {
      controls[field.name] = field.formControl;
    }

    return controls;
  }

  private resetForm(form: FormGroup<any>): void {
    this.formReset = true;
    form.reset();
    Object.keys(form.controls).forEach((key) => {
      form.controls[key].setErrors(null);
    });
  }
}

export interface FormField {
  formControl: FormControl;
  label: string;
  name: string;
  type: string;
  validationMessages: Array<FormValidationMessage>;
}

export interface FormValidationMessage {
  message: string;
  type: string;
}
