import { Component } from '@angular/core';
import { CommandService } from '../../service/command.service';
import { Recipe } from '../../model/recipe.model';
import {NgFor, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-command',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './command.component.html'
})
export class CommandComponent {
  recipes: Recipe[] = [];
  errorMessage: string | null = null;

  constructor(private commandService: CommandService) {
    this.recipes = this.commandService.getRecipes();
  }

  removeRecipe(recipe: Recipe) {
    this.commandService.removeRecipe(recipe);
    this.recipes = this.commandService.getRecipes();
  }
}
