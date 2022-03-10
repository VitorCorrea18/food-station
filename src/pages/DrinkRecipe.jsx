import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchDrinkRecipe from '../services/fetchDrinkRecipe ';
import getIngredientesMeasure from '../helpers/getDrinkIngrMeasure';

export default function DrinkRecipe() {
  const [recipe, setRecipe] = useState({});
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
        <div data-testid={ `${0}-recomendation-card` }>RECOMENDADA</div>
        <button data-testid="start-recipe-btn" type="button">INICIAR RECEITA</button>
      </div>
    );
  }
  return (<div>loading...</div>);
}
