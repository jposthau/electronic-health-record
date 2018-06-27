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

  loginUser = JSON.parse('{"username":"test","password":"test","admin":0}');
  userform: FormGroup;
  validMessage = '';

  constructor(private loginUserService: LoginUserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getLoginUser(this.route.snapshot.params.username);
    this.userform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      admin: new FormControl('',Validators.required)
    });
  }

  getLoginUser(username: string) {
    this.loginUserService.getLoginUser(username).subscribe(
      data => {this.loginUser = data;},
      err => console.error(err),
      () => console.log('user loaded')
    );
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
    if (!this.userform.controls['username'].valid){
      this.userform.controls['username'].setValue(this.loginUser.username);
    }
    if (!this.userform.controls['password'].valid){
      this.userform.controls['password'].setValue(this.loginUser.password);
    }
    if (!this.userform.controls['admin'].valid){
      this.userform.controls['admin'].setValue(this.loginUser.admin);
    }
    if (this.userform.valid) {
      this.validMessage = "User updated successfully!";
      this.loginUserService.updateLoginUser(this.userform.value).subscribe(
        data => {
          return true;
        },
        err => console.error(err),
        () => console.log('user edited')
      );
    } else {
      this.validMessage = "Error while updating user.";
    }
  }

}
