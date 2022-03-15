import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FavCard from '../components/FavCard';
import AppContext from '../context/context';

export default function Favorite() {
  const { favoriteData, setFavoriteData } = useContext(AppContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteData(favorites);
  }, [setFavoriteData]);

  return (
    <>
      <Header title="Favorite Recipes" withSearchButton={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>
      {favoriteData.map((fav, index) => {
        const data = { ...fav, index };
        return (
          <FavCard key={ fav.id } data={ data } />
        );
      })}
    </>
  );
}
