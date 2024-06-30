import { Unity } from "./unity";
import { Ingredient } from "./ingredient.model";

export interface QuantifiedIngredient {
  $quantity: number;
  $unit: Unity;
  $ingredient: Ingredient;
}
