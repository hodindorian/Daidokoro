import { Unity } from "./unity";
import { Ingredient } from "./ingredient.model";
import { QuantifiedIngredient } from "./quantified-ingredient.model";

export class QuantifiedIngredientGetter implements QuantifiedIngredient {
  constructor(
    public $quantity: number,
    public $unit: Unity,
    public $ingredient: Ingredient
  ) {}

  get quantity(): number {
    return this.$quantity;
  }

  get unit(): Unity {
    return this.$unit;
  }

  get ingredient(): Ingredient {
    return this.$ingredient;
  }
}
