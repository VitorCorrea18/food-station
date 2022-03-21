import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AppContext from '../context/context';

const copy = require('clipboard-copy');

export default function FavCard({ data }) {
  const [favorite, setFavorite] = useState(true);
  const [copyMessage, setCopyMessage] = useState('');
  const { favoriteData, setFavoriteData } = useContext(AppContext);

  const share = () => {
    copy(`http://localhost:3000/${data.type}s/${data.id}`);
    if (copyMessage.length > 0) setCopyMessage('');
    else setCopyMessage('Link copied!');
  };

  const removeLike = () => {
    const filterStorage = favoriteData.filter((fav) => (fav.id !== data.id));
    localStorage.setItem('favoriteRecipes', JSON.stringify(filterStorage));
    setFavoriteData(filterStorage);
    setFavorite(!favorite);
  };

  const history = useHistory();
  const redirect = () => {
    history.push(`/${data.type}s/${data.id}`);
  };

  return (
    <div className="main-done-card">
      <div
        className="image-content"
        onClick={ () => redirect() }
        onKeyDown={ () => redirect() }
        role="button"
        tabIndex={ 0 }
      >
        <img
          style={ { maxWidth: '100px' } }
          src={ data.image }
          alt="receita"
          data-testid={ `${data.index}-horizontal-image` }
        />
      </div>
      <div className="info-content">
        <div className="horizontal-data">
          <h3 data-testid={ `${data.index}-horizontal-top-text` } className="top-text">
            {`
          ${data.type === 'food' ? data.nationality : data.alcoholicOrNot}
          - ${data.category}
        `}
          </h3>
          {copyMessage.length > 0 && (
            <p>{copyMessage}</p>
          )}
          <button
            type="button"
            data-testid={ `${data.index}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => share() }
            className="share-button"
          >
            <img src={ shareIcon } alt="recipe" />
          </button>
          <button
            type="button"
            src={ favorite ? blackHeartIcon : whiteHeartIcon }
            data-testid={ `${data.index}-horizontal-favorite-btn` }
            onClick={ () => removeLike() }
            className="share-button"
          >
            <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="favorite" />
          </button>
        </div>
        <div
          onClick={ () => redirect() }
          onKeyDown={ () => redirect() }
          role="button"
          tabIndex={ 0 }
        >
          <h2
            data-testid={ `${data.index}-horizontal-name` }
            className="recipe-text"
          >
            {data.name}
          </h2>
        </div>
      </div>
    </div>
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
    id: PropTypes.string,
  }).isRequired,
};
