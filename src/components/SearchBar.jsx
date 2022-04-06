import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import fetchData from '../services/fetchData';
import { FIRST_TWELVE } from '../helpers/constants';
import AppContext from '../context/context';
import '../styles/searchBar.css';

export default function SearchBar() {
  const { setFoodData, setDrinkData } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');
  const [data, setData] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;

  const handleSearch = async () => {
    if (searchType === 'f' && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const APIData = await fetchData(search, searchType, pathname);
      setData(APIData);
    }
    setSearch('');
    setSearchType('');
  };

  useEffect(() => {
    if (data === null) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } if (data !== null && data.length === 1) {
      const id = Object.values(data[0])[0];
      return history.push(`${pathname}/${id}`);
    } if (data !== null && data.length > 1) {
      const filterData = data.filter((item, index) => index < FIRST_TWELVE);
      return (pathname === '/foods') ? setFoodData(filterData) : setDrinkData(filterData);
    }
  }, [data, history, pathname, setDrinkData, setFoodData]);

  return (
    <section className="search-content">

      <div className="input-group mb-3 search-input-group">
        <FormControl
          type="text"
          data-testid="search-input"
          className="form-control search-input"
          placeholder="Type here your search"
          aria-label="Type here your search"
          aria-describedby="button-addon2"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
        />
        <button
          className="search-btn"
          data-testid="exec-search-btn"
          type="submit"
          id="button-addon2"
          onClick={ handleSearch }
        >
          Search
        </button>
      </div>

      <nav className="search-filter-nav">
        <ToggleButtonGroup name="options">
          <ToggleButton
            className="search-radio" // apenas um teste...
            value="i"
            data-testid="ingredient-search-radio"
            type="radio"
            name="options"
            checked={ false }
            onChange={ (e) => setSearchType(e.target.value) }
          >
            Ingredient
          </ToggleButton>
          <ToggleButton
            className="search-radio" // apenas um teste...
            value="s"
            data-testid="name-search-radio"
            type="radio"
            name="options"
            checked={ false }
            onChange={ (e) => setSearchType(e.target.value) }
          >
            Name
          </ToggleButton>
          <ToggleButton
            className="search-radio" // apenas um teste...
            value="f"
            data-testid="first-letter-search-radio"
            type="radio"
            name="options"
            checked={ false }
            onChange={ (e) => setSearchType(e.target.value) }
          >
            First Letter
          </ToggleButton>
        </ToggleButtonGroup>
      </nav>

    </section>
  );
}
