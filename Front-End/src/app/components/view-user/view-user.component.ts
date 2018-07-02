import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../service/loginuser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  loginUser;
  userform: FormGroup;
  validMessage = '';
  userLoaded = false;

  constructor(private loginUserService: LoginUserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getLoginUser(this.route.snapshot.params.username);
    this.userform = new FormGroup({
      username: new FormControl(this.loginUser.username, Validators.required),
      password: new FormControl(this.loginUser.password, Validators.required),
      admin: new FormControl(this.loginUser.admin, Validators.required),
      doctor: new FormControl(this.loginUser.doctor,Validators.required),
      patient: new FormControl(this.loginUser.patient,Validators.required)
    });
  }

  getLoginUser(username: string) {
    this.loginUser = JSON.parse(this.loginUserService.getLoginUser(username));
    this.userLoaded = true;
  }

  deleteLoginUser(username: string) {
    if(confirm("Are your sure you want to delete this user?"))
      {this.loginUserService.deleteLoginUser(username).subscribe(
        data => {this.router.navigate(['/admin']);},
        err => console.error(err),
        () => console.log('user deleted')
      );}
  }

  updateLoginUser() {
    if (this.userform.valid) {
      this.validMessage = "User updated successfully!";
      this.loginUserService.updateLoginUser(this.userform.value).subscribe(
        data => {
          return true;
        },
        err => console.error(err),
        () => console.log('user edited')
      );
      this.getLoginUser(this.loginUser.username);
    } else {
      this.validMessage = "Error while updating user.";
    }
  }

  toggle(role:string) {
    if (this.userform.controls[role].value == 1){
      this.userform.controls[role].setValue(0);
    }
    else this.userform.controls[role].setValue(1);
  }

  checked(role:string) {
    if(role == 'admin') {
      if (this.loginUser.admin == 1){
        return true;
      }
      else {
        return false;
      }
    } else if(role == 'doctor') {
      if (this.loginUser.doctor == 1){
        return true;
      }
      else {
        return false;
      }
    } else if (role == 'patient') {
      if (this.loginUser.patient == 1){
        return true;
      }
      else {
        return false;
      }
    }
  }

}
