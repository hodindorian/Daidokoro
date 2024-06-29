import { Routes } from '@angular/router';
import {AuthGuard} from "./guard.guard";
import {IngredientsComponent} from "./component/ingredients/ingredients.component";
import {AccueilComponent} from "./component/accueil/accueil.component";
import {RecipeDetailComponent} from "./component/recipe-detail/recipe-detail.component";

export const routes: Routes = [
  {path: 'ingredients', component:IngredientsComponent,canActivate: [AuthGuard]},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path:  '', component:AccueilComponent}
];
