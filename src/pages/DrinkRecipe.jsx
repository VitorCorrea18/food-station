import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import { FIRS_SIX } from '../helpers/constants';
import fetchDrinkRecipe from '../services/fetchDrinkRecipe ';
import getIngredientesMeasure from '../helpers/getDrinkIngrMeasure';
import { isFavorite, handleFavoriteDrink } from '../helpers/setFavorite';
import AppContext from '../context/context';
// import SugestCard from '../components/SugestCard';
import '../styles/recipe.css';
import verifyRecipe from '../helpers/verifyRecipe';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CarouselSug from '../components/Carousel';

const copy = require('clipboard-copy');

export default function DrinkRecipe() {
  const { foodData } = useContext(AppContext);
  const [recipe, setRecipe] = useState({});
  const [verify, setVerify] = useState('new');
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
    verifyRecipe(id, setVerify, 'cocktails');
    isFavorite(id, setFavorite);
  }, [pathname]);

  const startCooking = () => {
    history.push(`/drinks/${pathname.split('/')[2]}/in-progress`);
  };

  const share = () => {
    copy(`http://localhost:3000${pathname}`);
    if (copyMessage.length > 0) setCopyMessage('');
    else setCopyMessage('Link copied!');
  };

  if (Object.keys(recipe).length > 0) {
    return (
      <div className="mainRecipe">
        <Image
          data-testid="recipe-photo"
          alt="drink"
          src={ recipe.strDrinkThumb }
          fluid
          className="recipe-photo"
        />
        <div className="title-content">
          <h1
            className="recipe-title"
            data-testid="recipe-title"
          >
            {recipe.strDrink}
          </h1>
          <div>
            {copyMessage.length > 0 && (
              <p>{copyMessage}</p>
            )}
            <button
              data-testid="share-btn"
              type="button"
              onClick={ share }
              className="action-button"
            >
              <Image src={ shareIcon } alt="share icon" fluid />
            </button>
            <button
              type="button"
              onClick={ () => { handleFavoriteDrink(favorite, setFavorite, recipe); } }
              className="action-button"
            >
              <Image
                data-testid="favorite-btn"
                src={ favorite ? blackHeartIcon : whiteHeartIcon }
                alt="favorite icon"
                fluid
              />
            </button>
          </div>
        </div>
        <p data-testid="recipe-category" className="recipe-category">
          {recipe.strAlcoholic}
        </p>
        <h2 className="recipe-subtitle">Ingredients</h2>
        <ul className="ingredient-list">
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
        <h2 className="recipe-subtitle">Instructions</h2>
        <p data-testid="instructions" className="instructions">
          {recipe.strInstructions}
        </p>
        <h2 className="recipe-subtitle">Sugestions</h2>
        <div className="carousel">
          {
            foodData.length > 0 && (<CarouselSug data={ foodData } />)
          }
          {/* {
            foodData.length > 0
            && (foodData.slice(0, FIRS_SIX).map((sugestion, index) => (
              <SugestCard key={ index } data={ { ...sugestion, index, type: 'food' } } />
            )))
          } */}
        </div>
        { verify === 'new' && (
          <button
            className="fixed-bottom border starButton"
            data-testid="start-recipe-btn"
            type="button"
            onClick={ startCooking }
          >
            Start Recipe
          </button>
        )}
        { verify === 'started' && (
          <button
            className="fixed-bottom border starButton"
            data-testid="start-recipe-btn"
            type="button"
            onClick={ startCooking }
          >
            Continue Recipe
          </button>
        )}
      </div>
    );
  }
  return (<div className="mainRecipe">loading...</div>);
}
