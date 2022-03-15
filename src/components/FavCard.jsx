import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavCard({ data }) {
  const [favorite, setFavorite] = useState(true);
  return (
    <>
      <img
        src={ data.image }
        alt="receita"
        data-testid={ `${data.index}-horizontal-image` }
      />
      <p data-testid={ `${data.index}-horizontal-top-text` }>
        {`
          ${data.type === 'food' ? data.nationality : data.alcoholicOrNot}
          - ${data.category}
        `}

      </p>
      <p data-testid={ `${data.index}-horizontal-name` }>{data.name}</p>
      <p data-testid={ `${data.index}-horizontal-done-date` }>{ }</p>
      <button
        type="button"
        data-testid={ `${data.index}-horizontal-share-btn` }
        src={ shareIcon }
      >
        <img src={ shareIcon } alt="recipe" />
      </button>
      <button
        type="button"
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        data-testid={ `${data.index}-horizontal-favorite-btn` }
        onClick={ () => setFavorite(!favorite) }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="favorite" />
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
    type: PropTypes.string,
    nationality: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }).isRequired,
};
