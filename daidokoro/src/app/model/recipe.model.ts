import {QuantifiedIngredient} from "./quantified-ingredient.model";

export interface Recipe {
  $id : number,
  $name : string,
  $description: string,
  $createdAt : Date,
  $ingredients: QuantifiedIngredient[]
}
