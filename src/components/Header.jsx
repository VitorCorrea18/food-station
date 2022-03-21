import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/header.css';

export default function Header({ title, withSearchButton }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    if (!showSearchBar) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };

  return (
    <>
      <header
        className="background-light d-flex flex-row justify-content-around
          align-items-center mainHeader"
      >
        <h1
          data-testid="page-title"
          className="header-title"
        >
          { title }

        </h1>

        <div className="header-btns">
          {
            withSearchButton && ( // renderização condicional do botão de busca
              <button
                type="button"
                onClick={ handleSearchClick }
                className="search-button"
              >
                <Image
                  data-testid="search-top-btn"
                  src={ searchIcon }
                  alt="Search"
                  className="background-light btn-no-outline"
                  data-bs-toggle="collapse"
                />
              </button>
            )
          }

          <Link to="/profile">
            <Image
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="Profile"
              className="profile-icon"
            />
          </Link>

        </div>

      </header>
      {
        showSearchBar && ( // renderização condicional da barra de busca
          <SearchBar />
        )
      }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  withSearchButton: PropTypes.bool.isRequired,
};
