import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/250x250/949777.jpg'),
    new Recipe('Another Test Recipe', 'This is simply another test', 'http://images.media-allrecipes.com/userphotos/250x250/949777.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
