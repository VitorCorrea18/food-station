import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipe.css';
// Quando utilizar o card lembrar de colocar o index junto com os dados da API;
export default function SugestCard({ data }) {
  if (data.type === 'food') {
    return (
      <div
        data-testid={ `${data.index}-recomendation-card` }
        className={ `carousel_${data.index}` }
      >
        <h1 data-testid={ `${data.index}-recomendation-title` }>{data.strMeal}</h1>
        <img
          src={ data.strMealThumb }
          alt="receita"
          data-testid={ `${data.index}-card-img` }
        />
      </div>
    );
  }
  if (data.type === 'drink') {
    return (
      <div
        data-testid={ `${data.index}-recomendation-card` }
        className={ `carousel_${data.index}` }
      >
        <h1 data-testid={ `${data.index}-recomendation-title` }>{data.strDrink}</h1>
        <img
          src={ data.strDrinkThumb }
          alt="receita"
          data-testid={ `${data.index}-card-img` }
        />
      </div>
    );
  }
}

SugestCard.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};
