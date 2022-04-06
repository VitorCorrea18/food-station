import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';
import '../styles/doneRecipe.css';

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
    <div className="main-done">
      <Header title="Done Recipes" withSearchButton={ false } />
      <div className="button-content">
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => handleFilter('all') }
          className="filter-button"
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => handleFilter('food') }
          className="filter-button"
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => handleFilter('drink') }
          className="filter-button"
        >
          Drinks
        </button>
      </div>
      <div className="done-card">
        {data.map((recipe, index) => (
          <DoneCard key={ recipe.id } data={ recipe } index={ index } />
        ))}
      </div>
    </div>

  );
}
