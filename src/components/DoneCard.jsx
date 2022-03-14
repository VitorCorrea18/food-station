import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function DoneCard({ data, index }) {
  return (
    <div>
      <img
        data-testid={ `${index}-horizontal-image` }
        src={ data.image }
        alt="recipe"
      />
      <h3 data-testid={ `${index}-horizontal-top-text` }>{data.category}</h3>
      <h2 data-testid={ `${index}-horizontal-name` }>{data.name}</h2>
      <h4 data-testid={ `${index}-horizontal-done-date` }>
        {`Done in: ${data.doneDate}`}
      </h4>
      <button data-testid={ `${index}-horizontal-share-btn` } type="button">
        Compartilhar
      </button>
      <div>
        {data.tags.map((tag, i) => (
          <span key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</span>
        ))}
      </div>
    </div>
  );
}

DoneCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};
