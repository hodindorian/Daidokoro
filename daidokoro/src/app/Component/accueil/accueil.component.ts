import { Component } from '@angular/core';
import {RecipeListComponent} from "../recipe-list/recipe-list.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RecipeListComponent
  ],
  templateUrl: './accueil.component.html'
})
export class AccueilComponent {

}
