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
  roleform: FormGroup;
  validMessage: string ="";

  constructor(private loginUserService: LoginUserService) { }

  ngOnInit() {
    this.userform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.roleform = new FormGroup({
      role: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {

    if (this.userform.valid && this.roleform.valid) {
      this.validMessage = "Your user registration has been submitted. Thank you!";
      this.loginUserService.createLoginUser(this.userform.value, this.roleform.value).subscribe(
        data => {
          this.userform.reset();
          return true;
        },
        error => {
          console.log(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
