import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './context';

const Provider = ({ children }) => {
  const context = {};
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
