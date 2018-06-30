import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe';
import { RECIPEDATA } from './recipe/recipedata';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipedata: Recipe[] = RECIPEDATA;
  currentValue = '';

  constructor() { }

  getRecipedata(): Recipe[] {
    return this.recipedata;
  }

  getRecipe(id: string): Recipe {
    return this.recipedata.find(recipe => recipe.id.toString() === id);
  }

  searchRecipe(keyword: string): Recipe[] {
    const resultArr: Recipe[] = [];

    for (const recipe of this.recipedata) {
      const dataStr = JSON.stringify(recipe);
      if (dataStr.search(keyword) >= 0) {
        resultArr.push(recipe);
      }
    }

    return resultArr;
  }
}
