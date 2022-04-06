import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FavCard from '../components/FavCard';
import AppContext from '../context/context';
import '../styles/favorite.css';

export default function Favorite() {
  const { favoriteData,
    setFavoriteData,
    storageData,
    setStorageData,
  } = useContext(AppContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavoriteData(favorites);
    setStorageData(favorites);
  }, [setFavoriteData, setStorageData]);

  const handleFilter = (type) => {
    const filter = storageData.filter((item) => item.type === type);
    return ((type === 'all') ? setFavoriteData(storageData) : setFavoriteData(filter));
  };

  return (
    <div className="main-favorite">
      <Header title="Favorite Recipes" withSearchButton={ false } />
      <div className="button-content">

        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => handleFilter('all') }
          className="filter-button"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => handleFilter('food') }
          className="filter-button"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => handleFilter('drink') }
          className="filter-button"
        >
          Drink
        </button>
      </div>
      <div className="done-card">
        {favoriteData.map((fav, index) => {
          const data = { ...fav, index };
          return (
            <FavCard key={ fav.id } data={ data } />
          );
        })}
      </div>
    </div>
  );
}
