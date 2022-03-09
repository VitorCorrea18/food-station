import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';
import { FIRST_TWELVE } from '../helpers/constants';
import {
  fetchInicialDrinkData,
  fetchInicialFoodData,
} from '../services/fetchInicialData';

const Provider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);

  const callFetchInicialData = async () => {
    // foods
    const inicialFoodData = await fetchInicialFoodData();
    setFoodData(inicialFoodData.filter((food, index) => index < FIRST_TWELVE));
    // drinks
    const inicialDrinkData = await fetchInicialDrinkData();
    setDrinkData(inicialDrinkData.filter((drink, index) => index < FIRST_TWELVE));
  };

  useEffect(() => {
    callFetchInicialData();
  }, []);

  const context = { foodData, setFoodData, drinkData, setDrinkData };
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
