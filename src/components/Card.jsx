import React from 'react';
import PropTypes from 'prop-types';
import { FOODS, DRINKS } from '../helpers/constants';

export default function Card({ data, type }) {
  // Quando utilizar o card lembrar de colocar o index junto com os dados da API;

  switch (type) {
  case FOODS:
    return (
      <div data-testid={ `${data.index}-recipe-card` }>
        <img
          src={ data.strMealThumb }
          alt="receita"
          data-testid={ `${data.index}-card-img` }
        />
        <h1 data-testid={ `${data.index}-card-name` }>{data.strMeal}</h1>
      </div>
    );

  case DRINKS:
    return (
      <div data-testid={ `${data.index}-recipe-card` }>
        <img
          src={ data.strDrinkThumb }
          alt="receita"
          data-testid={ `${data.index}-card-img` }
        />
        <h1 data-testid={ `${data.index}-card-name` }>{data.strDrink }</h1>
      </div>
    );
  default:
    break;
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
