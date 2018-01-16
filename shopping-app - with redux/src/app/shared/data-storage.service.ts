import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import { Store } from '@ngrx/store';

import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {}

  storeRecipes() {
    return this.store.select('auth').switchMap(
      (authState: fromAuth.State) => {
        return this.http.put('https://ng-recipe-book-470db.firebaseio.com/recipes.json?auth='
          + authState.token, this.recipeService.getRecipes());
      });
    // const token = this.authService.getToken();
    // return this.http.put('https://ng-recipe-book-470db.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    // const token = this.authService.getToken();
    // return this.http.get('https://ng-recipe-book-470db.firebaseio.com/recipes.json?auth=' + token)
    //   .map(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );

    return this.store.select('auth')
      .take(1)
      .subscribe(
        (authState: fromAuth.State) => {
          return this.http.get('https://ng-recipe-book-470db.firebaseio.com/recipes.json?auth=' + authState.token)
            .map(
              (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                  if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
              }
            )
            .subscribe(
              (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
              }
            );
        });
  }
}
