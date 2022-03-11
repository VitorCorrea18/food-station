import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FOODS, DRINKS } from '../helpers/constants';

// Quando utilizar o card lembrar de colocar o index junto com os dados da API;
export default function Card({ data, type }) {
  const history = useHistory();
  const handleClick = () => {
    if (type === FOODS) history.push(`/foods/${data.idMeal}`);
    if (type === DRINKS) history.push(`/drinks/${data.idDrink}`);
  };
  switch (type) {
  case FOODS:
    return (
      <div
        data-testid={ `${data.index}-recipe-card` }
        onKeyDown={ handleClick }
        onClick={ handleClick }
        role="button"
        tabIndex={ 0 }
      >
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
      <div
        data-testid={ `${data.index}-recipe-card` }
        onKeyDown={ handleClick }
        onClick={ handleClick }
        role="button"
        tabIndex={ 0 }
      >
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
    idMeal: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
