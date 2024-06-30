import {Component, Input, OnInit} from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../model/recipe.model';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {NgFor} from "@angular/common";
import {Router, RouterLinkActive} from "@angular/router";
import {CommandService} from "../../service/command.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  imports: [
    NgOptimizedImage,
    NgFor,
    NgClass,
    RouterLinkActive,
    NgIf
  ],
  standalone: true
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  errorMessageDisplay: boolean = false;
  errorMessage: string | null = null;

  @Input() isFormVisible!: boolean;

  currentPage: number = 0;
  pageSize: number = 4;
  totalPages: any = 0;

  constructor(private recipeService: RecipeService,private router : Router, private commandService: CommandService) {}

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

  detailsRecipe(id : number){
    this.router.navigateByUrl('/recipe/'+id);
  }


  addToCommand(recipe: Recipe) {
    try {
      this.commandService.addRecipe(recipe);
      this.errorMessageDisplay = false;
    } catch (e) {
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        this.errorMessageDisplay = true;
        this.errorMessage = 'Local Storage saturé, impossible d\'ajouter la recette dans le local storage des commandes.';
      } else {
        throw e;
      }
    }
  }
}
