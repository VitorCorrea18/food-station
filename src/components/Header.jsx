import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, withSearchButton }) {
  return (
    <header>
      <Link to="/profile">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile" />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      { withSearchButton && (
        <img data-testid="search-top-btn" src={ searchIcon } alt="Search" />
      ) }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  withSearchButton: PropTypes.bool.isRequired,
};
