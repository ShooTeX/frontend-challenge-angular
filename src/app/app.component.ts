import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // INFO: this form needs proper validation
  public form = new FormGroup({
    personal: new FormGroup(
      {
        firstname: new FormControl(undefined),
        lastname: new FormControl(),
        email: new FormControl(undefined, [Validators.email]),
        phone: new FormControl(undefined, [Validators.pattern('^[0-9]*$')]),
      },
      [Validators.required]
    ),
    address: new FormGroup(
      {
        street: new FormControl(),
        houseNumber: new FormControl(),
        zipCode: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
      },
      [Validators.required]
    ),
    cc: new FormGroup(
      {
        ccn: new FormControl(),
        expiration: new FormControl(),
        cvv: new FormControl(),
        cardholdername: new FormControl(),
      },
      [Validators.required]
    ),
  });

  public onSubmit() {
    console.log(this.form.value);
    alert('Check console');
  }
}
