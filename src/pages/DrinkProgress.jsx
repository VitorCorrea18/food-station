import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchDrinkRecipe from '../services/fetchDrinkRecipe ';
import getIngredientesMeasure from '../helpers/getDrinkIngrMeasure';
import { isFavorite, handleFavoriteDrink } from '../helpers/setFavorite';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

export default function DrinkProgress() {
  const [recipe, setRecipe] = useState({});
  const [ingrMeasure, setIngrMeasure] = useState({});
  const [copyMessage, setCopyMessage] = useState('');
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();
  const { location: { pathname } } = history;

  const getData = async (id) => {
    const data = await fetchDrinkRecipe(id);
    setRecipe(data);
    getIngredientesMeasure(data, setIngrMeasure);
  };

  useEffect(() => {
    const id = pathname.split('/')[2];
    getData(id);
    isFavorite(id, setFavorite);
  }, [pathname]);

  const share = () => {
    copy(`http://localhost:3000${pathname}`);
    setCopyMessage('Link copied!');
  };

  if (Object.keys(recipe).length > 0) {
    return (
      <div>
        <img data-testid="recipe-photo" alt="drink" src={ recipe.strDrinkThumb } />
        <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
        {copyMessage.length > 0 && (
          <p>{copyMessage}</p>
        )}
        <button
          data-testid="share-btn"
          type="button"
          onClick={ share }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button
          type="button"
          onClick={ () => { handleFavoriteDrink(favorite, setFavorite, recipe); } }
        >
          <img
            data-testid="favorite-btn"
            src={ favorite ? blackHeartIcon : whiteHeartIcon }
            alt="favorite icon"
          />
        </button>
        <p data-testid="recipe-category">
          {recipe.strAlcoholic}
        </p>
        <ul>
          { Object.keys(ingrMeasure).length > 0
          && ingrMeasure.filterIngridients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              {`${ingredient} - ${ingrMeasure.filterMeasures[index] || ''}`}
            </li>
          ))}
        </ul>
        <p data-testid="instructions">
          {recipe.strInstructions}
        </p>
        <button
          className="fixed-bottom border"
          data-testid="finish-recipe-btn"
          type="button"
          // onClick={ }
        >
          Finish
        </button>

      </div>
    );
  }
  return (<div>loading...</div>);
}
