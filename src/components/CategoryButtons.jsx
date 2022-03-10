import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryButtons({ category }) {
  return (
    <button
      type="button"
      data-testid={ `${category}-category-filter` }
    >
      { category }
    </button>
  );
}

CategoryButtons.propTypes = {
  category: PropTypes.string.isRequired,
};
