import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  @Output() formSubmitted = new EventEmitter<Recipe>();

  recipeForm = new FormGroup({
    id: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),

  });


  onSubmit() {
    if(this.recipeForm.valid){
      const recipe: Recipe = {
        $id: parseInt(this.recipeForm.value.id!),
        $name: this.recipeForm.value.name!,
        $description: this.recipeForm.value.description!,
        $createdAt: new Date(),
        $ingredients: []
      };
      this.formSubmitted.emit(recipe);
      this.recipeForm.reset()
    }

  }
}
