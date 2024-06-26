import {Component, Input, OnInit} from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../model/recipe.model';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  imports: [
    NgOptimizedImage,
    NgFor,
    NgClass
  ],
  standalone: true
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Input() isFormVisible!: boolean;

  currentPage: number = 0;
  pageSize: number = 4;
  totalPages: any = 0;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.totalPages = Math.ceil(this.recipes.length / this.pageSize);
  }

  get paginatedRecipes(): any[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.recipes.slice(startIndex, startIndex + this.pageSize);
  }

  changePage(index: number): void {
    this.currentPage = index;
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }
}
