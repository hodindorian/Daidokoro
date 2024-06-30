import { Injectable } from '@angular/core';
import { Ingredient } from "../model/ingredient.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'https://664ba07f35bbda10987d9f99.mockapi.io/api/ingredients';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }

  add(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.apiUrl, ingredient);
  }

  update(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.apiUrl}/${ingredient.id}`, ingredient);
  }
}
