import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-login',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.css']
})
export class LayoutLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className = "hold-transition login-page";
  }

}
