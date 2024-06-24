import { Injectable } from '@angular/core';
import { Recipe } from '../Model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = JSON.parse(localStorage.getItem('recipes') || '[]');

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }
}
