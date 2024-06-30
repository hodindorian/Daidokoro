import {QuantifiedIngredientGetter} from "./quantified-ingredient-getter.model";

export interface Recipe {
  $id : number,
  $name : string,
  $description: string,
  $createdAt : Date,
  $ingredients: QuantifiedIngredientGetter[],
  $image?: string
}
