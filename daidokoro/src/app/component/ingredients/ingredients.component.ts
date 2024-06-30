import { Component, OnInit } from '@angular/core';
import { IngredientService } from "../../service/ingredient.service";
import { Ingredient } from "../../model/ingredient.model";
import { NgFor, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule
  ],
  providers: [IngredientService, HttpClient],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit {

  ingredients: Ingredient[] = [];
  newIngredient: Ingredient = { id: '0', name: '', description: '' };
  editIngredient: Ingredient | null = null;

  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.loadIngredients();
  }

  loadIngredients() {
    this.ingredientService.getAll().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

  addIngredient() {
    this.ingredientService.add(this.newIngredient).subscribe(ingredient => {
      this.ingredients.push(ingredient);
      this.newIngredient = { id: '0', name: '', description: '' };
    });
  }

  edit(ingredient: Ingredient) {
    this.editIngredient = { ...ingredient };
  }

  updateIngredient() {
    if (this.editIngredient) {
      this.ingredientService.update(this.editIngredient).subscribe(updatedIngredient => {
        const index = this.ingredients.findIndex(i => i.id === updatedIngredient.id);
        this.ingredients[index] = updatedIngredient;
        this.editIngredient = null;
      });
    }
  }

  cancelEdit() {
    this.editIngredient = null;
  }
}
