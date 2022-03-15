import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

export default function DoneRecipe() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const doneRecipe = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setData(doneRecipe);
    setFilterData(doneRecipe);
  }, []);

  const handleFilter = (type) => {
    const filter = filterData.filter((item) => item.type === type);
    return ((type === 'all') ? setData(filterData) : setData(filter));
  };

  return (
    <>
      <Header title="Done Recipes" withSearchButton={ false } />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => handleFilter('all') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => handleFilter('food') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => handleFilter('drink') }
        >
          Drinks
        </button>
      </div>
      <div>
        {data.map((recipe, index) => (
          <DoneCard key={ recipe.id } data={ recipe } index={ index } />
        ))}
      </div>
    </>

  );
}
