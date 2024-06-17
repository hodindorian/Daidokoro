import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe.model";
import {$RECEPIES} from "../data/recipe.stub";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getAll() : Recipe[]{
    return $RECEPIES;
  }
}
