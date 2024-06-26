import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../../service/ingredient.service";
import {Ingredient} from "../../model/ingredient.model";
import {NgFor} from "@angular/common";
import {LoginService} from "../../service/login.service";
import {Link} from "../../model/link.model";
import {LinkService} from "../../service/link.service";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit{

  ingredients: Ingredient[] = [];
  links: Link[] = this.linkService.getLinks()

  constructor(private ingredientService : IngredientService,private loginService: LoginService,private linkService : LinkService) {}

  ngOnInit() {
    this.ingredientService.getAll().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

  onClickLogin(event: Event): void {
    event.preventDefault(); // Prevent the default anchor behavior
    this.loginService.login();
  }

  onClickLogout(event: Event): void {
    event.preventDefault(); // Prevent the default anchor behavior
    this.loginService.logout();
  }

  isLogged(): boolean {
    return this.loginService.isLogged();
  }

}
