import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel = just awesome!',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'http://i.huffpost.com/gen/1034181/images/o-FATBURGER-INTERNATIONAL-LOCATIONS-facebook.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    // this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
