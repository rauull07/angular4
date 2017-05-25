import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  @ViewChild('f') myForm: NgForm;
  formData = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    console.log(this.myForm);
    this.formData.email = this.myForm.value.email;
    this.formData.subscription = this.myForm.value.subscription;
    this.formData.password = this.myForm.value.password;

    this.submitted = true;
    this.myForm.resetForm();
  }
}
