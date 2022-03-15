import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FavCard from '../components/FavCard';
import AppContext from '../context/context';

export default function Favorite() {
  const { favoriteData,
    setFavoriteData,
    storageData,
    setStorageData,
  } = useContext(AppContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteData(favorites);
    setStorageData(favorites);
  }, [setFavoriteData, setStorageData]);

  const handleFilter = (type) => {
    const filter = storageData.filter((item) => item.type === type);
    return ((type === 'all') ? setFavoriteData(storageData) : setFavoriteData(filter));
  };

  return (
    <>
      <Header title="Favorite Recipes" withSearchButton={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => handleFilter('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => handleFilter('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => handleFilter('drink') }
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
