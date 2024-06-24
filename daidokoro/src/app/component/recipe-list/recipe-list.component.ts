import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../model/recipe.model';
import {NgOptimizedImage} from "@angular/common";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  imports: [
    NgOptimizedImage,
    NgFor
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
