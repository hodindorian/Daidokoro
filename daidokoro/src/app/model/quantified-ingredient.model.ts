import {Unite} from "./unity";
import {Ingredient} from "./ingredient.model";

export interface QuantifiedIngredient {
  $quantity : number,
  $unit : Unite,
  $ingredient : Ingredient
}
