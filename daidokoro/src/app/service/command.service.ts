import { Injectable } from '@angular/core';
import { Recipe } from "../model/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private recipes: Recipe[] = JSON.parse(localStorage.getItem('command') || '[]');

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    localStorage.setItem('command', JSON.stringify(this.recipes));
  }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  removeRecipe(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    if (index > -1) {
      this.recipes.splice(index, 1);
    }
  }
}
