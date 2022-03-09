import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchFoodRecipe from '../services/fetchFoodRecipe';

export default function FoodRecipe() {
  const [recipe, setRecipe] = useState({});
  const { location: { pathname } } = useHistory();

  const getData = async (id) => {
    const data = await fetchFoodRecipe(id);
    setRecipe(data);
  };
  
  useEffect(() => {
    const id = pathname.split('/')[2];
    getData(id);
  }, []);

  return (
    <div>
      <img data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">TESTE</h1>
      <button data-testid="share-btn">SHARE</button>
      <button data-testid="favorite-btn">FAVORITE</button>
      <p data-testid="recipe-category">
        texto da categoria
      </p>
      <ul>
        <li data-testid={ `${0}-ingredient-name-and-measure` }> carninha </li>
      </ul>
      <p data-testid="instructions">
        explicação
      </p>
      <iframe data-testid="video" />
      <div data-testid={ `${0}-recomendation-card` }>RECOMENDADA</div>
      <button data-testid="start-recipe-btn">INICIAR RECEITA</button>
    </div>
  );
}
