import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../service/loginuser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users;

  constructor(private loginUserService: LoginUserService) { }

  ngOnInit() {
    this.getLoginUsers();
  }

  getLoginUsers() {
    this.loginUserService.getLoginUsers().subscribe(
      data => { this.users = data},
      err => console.error(err),
      () => console.log('users loaded')
    );
  }
}
