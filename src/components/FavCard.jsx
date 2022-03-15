import React from 'react';
import PropTypes from 'prop-types';

export default function FavCard({ data }) {
  return (
    <>
      <img
        src={ data.image }
        alt="receita"
        data-testid={ `${data.index}-horizontal-image` }
      />
      <p data-testid={ `${data.index}-horizontal-top-text` }>{ data.category }</p>
      <p data-testid={ `${data.index}-horizontal-name` }>{ data.name }</p>
      <p data-testid={ `${data.index}-horizontal-done-date` }>{ }</p>
      <button
        type="button"
        data-testid={ `${data.index}-horizontal-share-btn` }
      >
        share
      </button>
      <button
        type="button"
        data-testid={ `${data.index}-horizontal-favorite-btn` }
      >
        favorite
      </button>
      <p data-testid={ `${data.index}-${data.name}-horizontal-tag` }> </p>
    </>
  );
}

FavCard.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
