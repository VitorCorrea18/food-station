import React from 'react';
import PropTypes from 'prop-types';
// Quando utilizar o card lembrar de colocar o index junto com os dados da API;
export default function DrinkCard({ data }) {
  return (
    <div data-testid={ `${data.index}-recipe-card` }>
      <img
        src={ data.strDrinkThumb }
        alt="receita"
        data-testid={ `${data.index}-card-img` }
      />
      <h1 data-testid={ `${data.index}-card-name` }>{data.strDrink}</h1>
    </div>
  );
}

DrinkCard.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
};
