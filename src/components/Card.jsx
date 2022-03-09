import React from 'react';
import PropTypes from 'prop-types';
// Quando utilizar o card lembrar de colocar o index junto com os dados da API;
export default function Card({ data }) {
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
}

Card.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};
