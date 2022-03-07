import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import FoodRecipe from '../pages/FoodRecipe';
import DrinkRecipe from '../pages/DrinkRecipe';
import FoodProgress from '../pages/FoodProgress';
import DrinkProgress from '../pages/DrinkProgress';
import Explore from '../pages/Explore';
import ExploreFood from '../pages/ExploreFood';
import ExploreDrink from '../pages/ExploreDrink';
import ExploreFoodIng from '../pages/ExploreFoodIng';
import ExploreDrinkIng from '../pages/ExploreDrinkIng';
import ExploreFoodNat from '../pages/ExploreFoodNat';
import Profile from '../pages/Profile';
import DoneRecipe from '../pages/DoneRecipe';
import Favorite from '../pages/Favorite';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
    <Route exact path="/drinks" component={ Drinks } />
    <Route exact path="/foods/:id" component={ FoodRecipe } />
    <Route exact path="/drinks/:id" component={ DrinkRecipe } />
    <Route exact path="/foods/:id/in-progress" component={ FoodProgress } />
    <Route exact path="/drinks/:id/in-progress" component={ DrinkProgress } />
    <Route exact path="/explore" component={ Explore } />
    <Route exact path="/explore/foods" component={ ExploreFood } />
    <Route exact path="/explore/drinks" component={ ExploreDrink } />
    <Route exact path="/explore/foods/ingredients" component={ ExploreFoodIng } />
    <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinkIng } />
    <Route exact path="/explore/foods/nationalities" component={ ExploreFoodNat } />
    <Route exact path="/profile" component={ Profile } />
    <Route exact path="/done-recipes" component={ DoneRecipe } />
    <Route exact path="/favorite-recipes" component={ Favorite } />
  </Switch>
);

export default Routes;
