import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../../model/recipe.model";
import { FormControl, FormGroup, ReactiveFormsModule, FormArray, FormBuilder, Validators } from "@angular/forms";
import { Ingredient } from '../../model/ingredient.model';
import { Unity } from '../../model/unity';
import { IngredientService } from '../../service/ingredient.service';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './recipe-form.component.html'
})
export class RecipeFormComponent {
  @Output() formSubmitted = new EventEmitter<Recipe>();
  ingredientsList: Ingredient[] = [];
  unity = Object.values(Unity);
  imageBase64: string | null = null;

  constructor(private formBuilder: FormBuilder, private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(ingredients => {
      this.ingredientsList = ingredients;
    });

  }

  recipeForm: FormGroup = this.formBuilder.group({
    id: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ingredients: this.formBuilder.array([this.newIngredient()]),
    image: new FormControl('', {nonNullable: false})
  });

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  newIngredient(): FormGroup {
    return this.formBuilder.group({
      quantity: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
      unit: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      ingredient: new FormControl('', { nonNullable: true, validators: [Validators.required] })
    });
  }

  addIngredient() {
    this.ingredients.push(this.newIngredient());
  }

  removeIngredient(index: number) {
    if (this.ingredients.length > 1) {

      this.ingredients.removeAt(index);
    } else {

    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageBase64 = reader.result as string;
        this.recipeForm.patchValue({image: this.imageBase64});
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const recipe: Recipe = {
        $id: parseInt(this.recipeForm.value.id!),
        $name: this.recipeForm.value.name!,
        $description: this.recipeForm.value.description!,
        $createdAt: new Date(),
        $ingredients: this.recipeForm.value.ingredients!.map((ingredient: any) => ({
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          ingredient: this.ingredientsList.find(ing => ing.$name === ingredient.ingredient)
        })),
        $image: this.recipeForm.value.image
      };
      this.formSubmitted.emit(recipe);
      this.recipeForm.reset()
      this.ingredients.clear()
      this.addIngredient()
    }
  }
}
