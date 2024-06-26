import { Component } from '@angular/core';
import {RecipeListComponent} from "../recipe-list/recipe-list.component";
import {RecipeFormComponent} from "../recipe-form/recipe-form.component";
import {Recipe} from "../../model/recipe.model";
import {RecipeService} from "../../service/recipe.service";
import {NgForOf, NgIf} from "@angular/common";
import {LinkService} from "../../service/link.service";
import {Link} from "../../model/link.model";
import {LoginService} from "../../service/login.service";
import {RouterLink, RouterLinkActive,RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeFormComponent,
    CommonModule,
    NgForOf,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './accueil.component.html'
})
export class AccueilComponent {
  isFormVisible: boolean = false;
  links: Link[] = this.linkService.getLinks()


  constructor(private recipeService: RecipeService,private linkService: LinkService,private loginService: LoginService) {
  }


  onRecipeSubmitted(recipe : Recipe){
    this.recipeService.addRecipe(recipe);
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
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
