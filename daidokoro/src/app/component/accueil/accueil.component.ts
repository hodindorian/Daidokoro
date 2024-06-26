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

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeFormComponent,
    NgIf,
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
    if(this.loginService.isLogged()){
      this.links.push({$name: '/logout',$link: '/logout'});
    }else{
      this.links.push({$name: '/login',$link: '/login'});
    }
  }


  onRecipeSubmitted(recipe : Recipe){
    this.recipeService.addRecipe(recipe);
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
