import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {RecipeFormComponent} from "./component/recipe-form/recipe-form.component";
import {AccueilComponent} from "./component/accueil/accueil.component";
import {NgForOf, NgIf} from "@angular/common";
import {RecipeListComponent} from "./component/recipe-list/recipe-list.component";
import {LoginService} from "./service/login.service";
import {Link} from "./model/link.model";
import {LinkService} from "./service/link.service";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, AccueilComponent, RecipeFormComponent, NgForOf, NgIf, RecipeListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  links : Link[] = this.linkService.getLinks()

  constructor(private loginService: LoginService,private linkService: LinkService) {
  }

  onClickLogin(event: Event): void {
    event.preventDefault(); // Prevent the default anchor behavior
    this.loginService.login();
  }

  onClickLogout(event: Event): void {
    event.preventDefault(); // Prevent the default anchor behavior
    this.loginService.logout();
  }

  isLogged(): boolean {
    return this.loginService.isLogged();
  }
}
