import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(): void {
    localStorage.setItem('login', 'true');
  }

  logout(): void {
    localStorage.setItem('login', 'false');
  }

  isLogged(): boolean {
    const login = localStorage.getItem('login');
    return login === 'true';
  }
}
