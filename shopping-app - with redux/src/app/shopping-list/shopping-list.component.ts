import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit { // , OnDestroy {
  shoppingListState: Observable<Ingredient[]>;
  // private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit((index)));
    // this.shoppingListService.startedEditing.next(index);
  }

  /*ngOnDestroy() {
    this.subscription.unsubscribe();
  }*/
}
