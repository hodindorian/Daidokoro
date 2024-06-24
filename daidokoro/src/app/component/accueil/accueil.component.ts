import { Component } from '@angular/core';
import {RecipeListComponent} from "../recipe-list/recipe-list.component";
import {RecipeFormComponent} from "../recipe-form/recipe-form.component";
import {Recipe} from "../../model/recipe.model";
import {RecipeService} from "../../service/recipe.service";
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeFormComponent,
    NgIf
  ],
  templateUrl: './accueil.component.html'
})
export class AccueilComponent {
  isFormVisible: boolean = false;

  constructor(private recipeService: RecipeService){}

  onRecipeSubmitted(recipe : Recipe){
    this.recipeService.addRecipe(recipe);
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
