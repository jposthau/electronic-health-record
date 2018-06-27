import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../service/loginuser.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userform: FormGroup;
  validMessage: string ="";

  constructor(private loginUserServce: LoginUserService) { }

  ngOnInit() {
    this.userform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {

    if (this.userform.valid) {
      this.validMessage = "Your user registration has been submitted. Thank you!";
      this.loginUserServce.createLoginUser(this.userform.value).subscribe(
        data => {
          this.userform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
