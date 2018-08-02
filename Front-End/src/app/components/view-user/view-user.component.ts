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

  public id;
  public user;
  public userform: FormGroup;
  validMessage = '';

  constructor(private loginUserService: LoginUserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id']);
    this.getLoginUser(this.route.snapshot.params.username);
    this.userform = new FormGroup({
      username: new FormControl(Validators.required),
      password: new FormControl(Validators.required),
      admin: new FormControl(Validators.required),
      doctor: new FormControl(Validators.required),
      patient: new FormControl(Validators.required)
    });
  }

  getLoginUser(id: number) {
    this.loginUserService.getLoginUser(id).subscribe(
      data => this.user = data,
      err => {
        console.log('error! ', err);
        if(err.status == '401' || err.status == '403'){
          this.router.navigateByUrl('unauthorized');
        }
      });
  }

  deleteLoginUser(id: number) {
    if(confirm("Are your sure you want to delete this user?"))
      {this.loginUserService.deleteLoginUser(id).subscribe(
        data => {this.router.navigate(['/admin']);},
        err => {
          console.log('error! ', err);
          if(err.status == '401' || err.status == '403'){
            this.router.navigateByUrl('unauthorized');
          }
        }
      );}
  }

  updateLoginUser() {
    if (this.userform.valid) {
      this.validMessage = "User updated successfully!";
      this.loginUserService.updateLoginUser(this.userform.value).subscribe(
        data => {
          return true;
        },
        err => {
          console.log('error! ', err);
          if(err.status == '401' || err.status == '403'){
            this.router.navigateByUrl('unauthorized');
          }
        },
        () => console.log('user edited')
      );
      this.getLoginUser(this.user.username);
    } else {
      this.validMessage = "Error while updating user.";
    }
  }

}
