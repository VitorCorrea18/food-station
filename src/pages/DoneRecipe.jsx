import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

export default function DoneRecipe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const doneRecipe = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setData(doneRecipe);
  }, []);

  return (
    <>
      <Header title="Done Recipes" withSearchButton={ false } />
      <div>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </div>
      <div>
        {data.map((recipe, index) => (
          <DoneCard key={ recipe.id } data={ recipe } index={ index } />
        ))}
      </div>
    </>

  );
}
