import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "./service/login.service";
import {inject} from "@angular/core";


export const AuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService)
  const router = inject(Router);

  if(!auth.isLogged()){
    router.navigateByUrl('/login');
    auth.login();
    return false;
  }
  auth.logout();
  return true;
};
