import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {FormControl, FormGroup, ReactiveFormsModule, FormArray, FormBuilder} from "@angular/forms";
import { Ingredient } from '../../model/ingredient.model';
import { Unity } from '../../model/unity';
import { IngredientService } from '../../service/ingredient.service';
import {NgFor} from "@angular/common";
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  @Output() formSubmitted = new EventEmitter<Recipe>();
  ingredientsList: Ingredient[] = [];
  unity = Object.values(Unity);

  constructor(private formBuilder: FormBuilder, private ingredientService : IngredientService){}

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(ingredients => {
      this.ingredientsList = ingredients;
    });
  }

  recipeForm: FormGroup = this.formBuilder.group({
    id: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    ingredients: this.formBuilder.array([])
  });

  get ingredients():FormArray{
    return this.recipeForm.get('ingredients') as FormArray;
  }

  newIngredient(): FormGroup{
    return this.formBuilder.group({
      quantity: new FormControl(0, { nonNullable: true }),
      unit: new FormControl('', { nonNullable: true }),
      ingredient: new FormControl('', { nonNullable: true })
    });
  }

  addIngredient() {
    this.ingredients.push(this.newIngredient());
  }
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    if(this.recipeForm.valid){
      const recipe: Recipe = {
        $id: parseInt(this.recipeForm.value.id!),
        $name: this.recipeForm.value.name!,
        $description: this.recipeForm.value.description!,
        $createdAt: new Date(),
        $ingredients: this.recipeForm.value.ingredients!.map((ingredient : any) => ({
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          ingredient: this.ingredientsList.find(ing => ing.$name === ingredient.ingredient)
        }))
      };
      this.formSubmitted.emit(recipe);
      this.recipeForm.reset()
      this.ingredients.clear()
    }

  }


}
