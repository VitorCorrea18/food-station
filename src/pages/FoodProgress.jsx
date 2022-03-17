import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import fetchFoodRecipe from '../services/fetchFoodRecipe';
import getIngredientesMeasure from '../helpers/getFoodIngrMeasure';
import { isFavorite, handleFavoriteMeal } from '../helpers/setFavorite';
import setDoneStorage from '../helpers/setDone';
import { handleSelect, setDoneClass, verifyDoneStorage }
from '../helpers/setDoneIngre';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/inProgress.css';

const copy = require('clipboard-copy');

export default function FoodProgress() {
  const [recipe, setRecipe] = useState({});
  const [ingrMeasure, setIngrMeasure] = useState({});
  const [copyMessage, setCopyMessage] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [done, setDone] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
  const { location: { pathname } } = history;

  const getData = async (id) => {
    const data = await fetchFoodRecipe(id);
    setRecipe(data);
    getIngredientesMeasure(data, setIngrMeasure);
  };

  useEffect(() => {
    const id = pathname.split('/')[2];
    getData(id);
    isFavorite(id, setFavorite);
    verifyDoneStorage('meals', id, setDone);
  }, [pathname]);

  useEffect(() => {
    const totalIngre = ingrMeasure.filterIngridients || [];
    if (done.length === totalIngre.length) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [done, ingrMeasure]);

  const share = () => {
    copy(`http://localhost:3000${pathname.split('/in-progress')[0]}`);
    setCopyMessage('Link copied!');
  };

  const finishRecipe = () => {
    setDoneStorage(recipe, 'food');
    history.push('/done-recipes');
  };

  if (Object.keys(recipe).length > 0) {
    return (
      <div>
        <Image data-testid="recipe-photo" alt="food" src={ recipe.strMealThumb } fluid />
        <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
        {copyMessage.length > 0 && (
          <p>{copyMessage}</p>
        )}
        <button
          onClick={ share }
          data-testid="share-btn"
          type="button"
        >
          <Image src={ shareIcon } alt="share icon" fluid />
        </button>
        <button
          type="button"
          onClick={ () => { handleFavoriteMeal(favorite, setFavorite, recipe); } }
        >
          <Image
            data-testid="favorite-btn"
            src={ favorite ? blackHeartIcon : whiteHeartIcon }
            alt="favorite icon"
            fluid
          />
        </button>
        <p data-testid="recipe-category">
          {recipe.strCategory}
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
                  type: 'meals',
                  id: pathname.split('/')[2],
                  index,
                  done,
                  setDone,
                }) }
                checked={ (setDoneClass(index, done) === 'Done') }
              />
              {`${ingredient} - ${ingrMeasure.filterMeasures[index]}`}
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
