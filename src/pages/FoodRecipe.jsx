import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import fetchFoodRecipe from '../services/fetchFoodRecipe';
import getIngredientesMeasure from '../helpers/getFoodIngrMeasure';
import { URL_EMBED, FIRS_SIX } from '../helpers/constants';
import AppContext from '../context/context';
import SugestCard from '../components/SugestCard';
import '../styles/recipe.css';
import verifyRecipe from '../helpers/verifyRecipe';

export default function FoodRecipe() {
  const { drinkData } = useContext(AppContext);
  const [recipe, setRecipe] = useState({});
  const [verify, setVerify] = useState('new');
  const [ingrMeasure, setIngrMeasure] = useState({});
  const { location: { pathname } } = useHistory();

  const getData = async (id) => {
    const data = await fetchFoodRecipe(id);
    setRecipe(data);
    getIngredientesMeasure(data, setIngrMeasure);
  };

  useEffect(() => {
    const id = pathname.split('/')[2];
    getData(id);
    verifyRecipe(id, setVerify);
  }, [pathname]);

  if (Object.keys(recipe).length > 0) {
    return (
      <div>
        <img data-testid="recipe-photo" alt="food" src={ recipe.strMealThumb } />
        <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
        <button data-testid="share-btn" type="button">SHARE</button>
        <button data-testid="favorite-btn" type="button">FAVORITE</button>
        <p data-testid="recipe-category">
          {recipe.strCategory}
        </p>
        <ul>
          { Object.keys(ingrMeasure).length > 0
          && ingrMeasure.filterIngridients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${ingredient} - ${ingrMeasure.filterMeasures[index]}`}
            </li>
          ))}
        </ul>
        <p data-testid="instructions">
          {recipe.strInstructions}
        </p>
        <iframe
          data-testid="video"
          title="food"
          src={ `${recipe.strYoutube.substring(0, URL_EMBED)}embed/${recipe.strYoutube
            .substring(URL_EMBED, recipe.strYoutube.length)}` }
          allow-same-origin
        />
        <h2>Recomendações:</h2>
        <div className="carousel">
          {
            drinkData.length > 0
            && (drinkData.slice(0, FIRS_SIX).map((sugestion, index) => (
              <SugestCard key={ index } data={ { ...sugestion, index, type: 'drink' } } />
            )))
          }
        </div>
        { verify === 'new' && (
          <button
            className="fixed-bottom border"
            data-testid="start-recipe-btn"
            type="button"
          >
            Start Recipe
          </button>
        )}
        { verify === 'started' && (
          <button
            className="fixed-bottom border"
            data-testid="start-recipe-btn"
            type="button"
          >
            Continue Recipe
          </button>
        )}
      </div>
    );
  }
  return (<div>loading...</div>);
}
