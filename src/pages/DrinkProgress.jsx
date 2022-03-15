import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchDrinkRecipe from '../services/fetchDrinkRecipe ';
import getIngredientesMeasure from '../helpers/getDrinkIngrMeasure';
import { isFavorite, handleFavoriteDrink } from '../helpers/setFavorite';
import setDoneStorage from '../helpers/setDone';
import { handleSelect, setDoneClass, verifyDoneStorage }
from '../helpers/setDoneIngre';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/inProgress.css';

const copy = require('clipboard-copy');

export default function DrinkProgress() {
  const [recipe, setRecipe] = useState({});
  const [ingrMeasure, setIngrMeasure] = useState({});
  const [copyMessage, setCopyMessage] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [done, setDone] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
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
    verifyDoneStorage('cocktails', id, setDone);
  }, [pathname]);

  useEffect(() => {
    const totalIngre = ingrMeasure.filterIngridients || [];
    if (done.length === totalIngre.length) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [done, ingrMeasure]);

  const finishRecipe = () => {
    setDoneStorage(recipe, 'drink');
    history.push('/done-recipes');
  };

  const share = () => {
    copy(`http://localhost:3000${pathname.split('/in-progress')[0]}`);
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
              className={ setDoneClass(index, done) }
            >
              <input
                type="checkbox"
                onChange={ () => handleSelect({
                  type: 'cocktails',
                  id: pathname.split('/')[2],
                  index,
                  done,
                  setDone,
                }) }
                checked={ (setDoneClass(index, done) === 'Done') }
              />
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
          disabled={ isDisabled }
          onClick={ () => finishRecipe() }
        >
          Finish
        </button>

      </div>
    );
  }
  return (<div>loading...</div>);
}
