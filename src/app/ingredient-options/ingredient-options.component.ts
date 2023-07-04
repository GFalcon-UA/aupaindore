import {Component, Input} from '@angular/core';
import {Ingredient} from "../model/ingredient";

@Component({
  selector: 'app-ingredient-options',
  templateUrl: './ingredient-options.component.html',
  styleUrls: ['./ingredient-options.component.css']
})
export class IngredientOptionsComponent {
  @Input("ingred")
  ingredients: Ingredient[] = [];

}
