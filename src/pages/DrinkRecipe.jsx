import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FIRS_SIX } from '../helpers/constants';
import fetchDrinkRecipe from '../services/fetchDrinkRecipe ';
import getIngredientesMeasure from '../helpers/getDrinkIngrMeasure';
import AppContext from '../context/context';
import SugestCard from '../components/SugestCard';
import '../styles/recipe.css';
import verifyRecipe from '../helpers/verifyRecipe';

export default function DrinkRecipe() {
  const { foodData } = useContext(AppContext);
  const [recipe, setRecipe] = useState({});
  const [verify, setVerify] = useState('new');
  const [ingrMeasure, setIngrMeasure] = useState({});
  const { location: { pathname } } = useHistory();
  const getData = async (id) => {
    const data = await fetchDrinkRecipe(id);
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
        <img data-testid="recipe-photo" alt="drink" src={ recipe.strDrinkThumb } />
        <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
        <button data-testid="share-btn" type="button">SHARE</button>
        <button data-testid="favorite-btn" type="button">FAVORITE</button>
        <p data-testid="recipe-category">
          {recipe.strAlcoholic}
        </p>
        <ul>
          { Object.keys(ingrMeasure).length > 0
          && ingrMeasure.filterIngridients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${ingredient} - ${ingrMeasure.filterMeasures[index] || ''}`}
            </li>
          ))}
        </ul>
        <p data-testid="instructions">
          {recipe.strInstructions}
        </p>
        <div className="carousel">
          {
            foodData.length > 0
            && (foodData.slice(0, FIRS_SIX).map((sugestion, index) => (
              <SugestCard key={ index } data={ { ...sugestion, index, type: 'food' } } />
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
      </div>
    );
  }
  return (<div>loading...</div>);
}
