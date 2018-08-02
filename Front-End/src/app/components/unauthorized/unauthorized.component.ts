import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {
	fullPathname: string;

	constructor(){
		this.fullPathname = "assets/images/unauthorized.png";
	}

}
