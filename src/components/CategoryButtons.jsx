import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import AppContext from '../context/context';

import { DRINKS, FOODS } from '../helpers/constants';
import { filterDrinks, filterFoods } from '../helpers/categoryFilter';

export default function CategoryButtons({ category, filter }) {
  const { setFoodData, setDrinkData } = useContext(AppContext);
  const [activeFilter, setActiveFilter] = useState(false);

  const callFilter = () => {
    // esta função deveria chamar os filtros que estão na pasta Helpers, mas por algum motivo
    // as função não estão sendo chamadas.
    console.log(filter);
    if (filter === FOODS) filterFoods(setFoodData, activeFilter, category);
    if (filter === DRINKS) filterDrinks(setDrinkData, activeFilter, category);
  };

  const handleCategoryClick = () => {
    if (!activeFilter) {
      setActiveFilter(true);
    } else setActiveFilter(false);
    callFilter();
  };

  return (
    <ToggleButton
      type="radio"
      name="categoryBtn"
      data-testid={ `${category}-category-filter` }
      onChange={ handleCategoryClick }
    >
      { category }
    </ToggleButton>
  );
}

CategoryButtons.propTypes = {
  category: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
