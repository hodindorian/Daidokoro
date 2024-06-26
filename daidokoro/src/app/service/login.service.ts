import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login() {
    localStorage.setItem('login', String(true));
  }

  logout() : void {
    localStorage.setItem('login',String(false));
  }

  isLogged() : boolean {
    return JSON.parse(localStorage.getItem('login')!);
  }
}
