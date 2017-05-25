import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 myForm: FormGroup ;
 statuses = ['Stable', 'Critical', 'Finished'];

 ngOnInit() {
   this.myForm = new FormGroup({
     'name': new FormControl(null, [Validators.required, this.forbiddenName], this.asyncForbiddenName),
     'email': new FormControl(null, [Validators.required, Validators.email]),
     'status': new FormControl('Critical')
   });
 }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  asyncForbiddenName(control: FormControl): Promise<any> | Observable<any> {
   const promise = new Promise(
     (resolve, reject) => {
       setTimeout(
         () => {
           if (control.value === 'Testproject') {
             resolve({'asyncNameIsForbidden': true});
           } else {
             resolve(null);
           }
         }, 1500);
     });

    return promise;
  }

  onSubmit() {
   console.log(this.myForm.value);
  }
}
