import React from 'react';
import Header from '../components/Header';
import FavCard from '../components/FavCard';

export default function Favorite() {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
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
      {favorites.map((fav, index) => {
        const data = { ...fav, index };
        return (
          <FavCard key={ fav.id } data={ data } />
        );
      })}
    </>
  );
}
