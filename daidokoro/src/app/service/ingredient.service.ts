import { Injectable } from '@angular/core';
import {Ingredient} from "../model/ingredient.model";
import {$INGREDIENTS} from "../data/ingredient.stub";


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  getAll() : Ingredient[] {
    return $INGREDIENTS;
  }
}
