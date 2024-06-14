import { Ingredient } from "./ingredient.model"

export interface Recette {
    id:number
    name:string
    description:string
    imageBase64: string
    ingredients: Ingredient[]

}
