import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import CarouselSug from '../components/Carousel';
import fetchFoodRecipe from '../services/fetchFoodRecipe';
import getIngredientesMeasure from '../helpers/getFoodIngrMeasure';
import { isFavorite, handleFavoriteMeal } from '../helpers/setFavorite';
import AppContext from '../context/context';
import '../styles/recipe.css';
import verifyRecipe from '../helpers/verifyRecipe';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

export default function FoodRecipe() {
  const { drinkData } = useContext(AppContext);
  const [recipe, setRecipe] = useState({});
  const [verify, setVerify] = useState('new');
  const [ingrMeasure, setIngrMeasure] = useState({});
  const [copyMessage, setCopyMessage] = useState('');
  const [favorite, setFavorite] = useState(false);
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
    verifyRecipe(id, setVerify, 'meals');
    isFavorite(id, setFavorite);
  }, [pathname]);

  const startCooking = () => {
    history.push(`/foods/${pathname.split('/')[2]}/in-progress`);
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
          alt="food"
          src={ recipe.strMealThumb }
          fluid
          className="recipe-photo"
        />
        <div className="title-content">
          <h1
            className="recipe-title"
            data-testid="recipe-title"
          >
            {recipe.strMeal}
          </h1>
          <div>
            {copyMessage.length > 0 && (
              <p>{copyMessage}</p>
            )}
            <button
              onClick={ share }
              data-testid="share-btn"
              type="button"
              className="action-button"
            >
              <Image src={ shareIcon } alt="share icon" fluid />
            </button>
            <button
              type="button"
              onClick={ () => { handleFavoriteMeal(favorite, setFavorite, recipe); } }
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
          {recipe.strCategory}
        </p>
        <h2 className="recipe-subtitle">Ingredients</h2>
        <ul className="ingredient-list">
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
        <h2 className="recipe-subtitle">Instructions</h2>
        <p data-testid="instructions" className="instructions">
          {recipe.strInstructions}
        </p>
        {/* <iframe
          data-testid="video"
          title="food"
          src={ `${recipe.strYoutube.substring(0, URL_EMBED)}embed/${recipe.strYoutube
            .substring(URL_EMBED, recipe.strYoutube.length)}` }
          allow-same-origin
        /> */}
        <h2 className="recipe-subtitle">Video</h2>
        <embed
          className="video-recipe"
          data-testid="video"
          title="food"
          src={ `${recipe.strYoutube.replace('watch?v=', 'v/')}` }
        />
        <h2 className="recipe-subtitle">Sugestions</h2>
        <div className="carousel">
          {
            drinkData.length > 0 && (<CarouselSug data={ drinkData } />)
          }

          {/* {
            drinkData.length > 0
            && (drinkData.slice(0, FIRS_SIX).map((sugestion, index) => (
              <SugestCard key={ index } data={ { ...sugestion, index, type: 'drink' } } />
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
