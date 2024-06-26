import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private loginService: LoginService) {
    // this.loginService.login()
  }

  ngOnInit(): void {
    this.loginService.login()

  }
}
