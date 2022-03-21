import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import '../styles/doneRecipe.css';

const copy = require('clipboard-copy');

export default function DoneCard({ data, index }) {
  const [copyMessage, setCopyMessage] = useState('');
  const history = useHistory();
  const share = () => {
    copy(`http://localhost:3000/${data.type}s/${data.id}`);
    setCopyMessage('Link copied!');
  };

  const redirect = () => {
    history.push(`/${data.type}s/${data.id}`);
  };

  return (
    <div className="main-card">
      <div
        onClick={ () => redirect() }
        onKeyDown={ () => redirect() }
        role="button"
        tabIndex={ 0 }
      >
        <img
          style={ { maxWidth: '100px' } }
          data-testid={ `${index}-horizontal-image` }
          src={ data.image }
          alt="recipe"
        />
      </div>
      <div>

        <h3 data-testid={ `${index}-horizontal-top-text` }>
          {`
          ${data.type === 'food' ? data.nationality : data.alcoholicOrNot}
          - ${data.category}
        `}
        </h3>
        <div
          onClick={ () => redirect() }
          onKeyDown={ () => redirect() }
          role="button"
          tabIndex={ 0 }
        >
          <h2 data-testid={ `${index}-horizontal-name` }>{data.name}</h2>
        </div>
        <h4 data-testid={ `${index}-horizontal-done-date` }>
          {`Done in: ${data.doneDate}`}
        </h4>
        {copyMessage.length > 0 && (
          <p>{copyMessage}</p>
        )}
        <button
          data-testid={ `${index}-horizontal-share-btn` }
          type="button"
          onClick={ share }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
        <div>
          {data.tags.map((tag, i) => (
            i < 2 && (
              <span
                key={ i }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}

              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

DoneCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
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
