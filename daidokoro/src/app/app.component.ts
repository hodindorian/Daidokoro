import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AccueilComponent} from "./Component/accueil/accueil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daidokoro';
}
