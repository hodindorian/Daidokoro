import { Injectable } from '@angular/core';
import {Ingredient} from "../model/ingredient.model";
import {$INGREDIENTS} from "../data/ingredient.stub";
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  getAll() : Observable<Ingredient[]> {
    return of($INGREDIENTS);
  }
}
