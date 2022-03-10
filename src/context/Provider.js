import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';
import callFetchCategory from '../helpers/callFetchCategory';
import callFetchInicialData from '../helpers/callFetchInicialData';

const Provider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);

  useEffect(() => {
    callFetchInicialData(setFoodData, setDrinkData);
    callFetchCategory(setFoodCategory, setDrinkCategory);
  }, []);

  const context = {
    foodData, setFoodData, drinkData, setDrinkData, foodCategory, drinkCategory };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
