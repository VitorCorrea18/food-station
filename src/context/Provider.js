import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';

const Provider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);

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
