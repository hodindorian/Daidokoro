import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RecipeFormComponent} from "./component/recipe-form/recipe-form.component";
import {AccueilComponent} from "./Component/accueil/accueil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent,RecipeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daidokoro';
}
