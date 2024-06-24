import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../Service/recipe.service';
import { Recipe } from '../../Model/recipe.model';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
