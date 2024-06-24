export interface Recipe {
  name: string;
  date: string;
  image: string;
  ingredients: { name: string; quantity: string }[];
}
