import { Routes } from '@angular/router';
import {AuthGuard} from "./guard.guard";
import {IngredientsComponent} from "./component/ingredients/ingredients.component";
import {AccueilComponent} from "./component/accueil/accueil.component";
import {RecipeDetailComponent} from "./component/recipe-detail/recipe-detail.component";
import {CommandComponent} from "./component/command/command.component";

export const routes: Routes = [
  {path: 'ingredients', component:IngredientsComponent,canActivate: [AuthGuard]},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path:  '', component:AccueilComponent},
  {path: 'command', component: CommandComponent}
];
