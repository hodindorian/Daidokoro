import {Component, Input} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {RecipeService} from "../../service/recipe.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgFor} from "@angular/common";
import {QuantifiedIngredientGetter} from "../../model/quantified-ingredient-getter.model";

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,NgFor],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  recipe : Recipe|null = null;
  ingredients : QuantifiedIngredientGetter[] = [];

  constructor(private recipeService : RecipeService) {
  }

  @Input()
  set id(id: number) {
    this.recipe = this.recipeService.getRecipe(id)!;
    this.ingredients = this.recipe.$ingredients;
  }



}
