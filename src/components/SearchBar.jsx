import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import fetchData from '../services/fetchData';

export default function SearchBar() {
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
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (data !== null && data.length === 1) {
      const id = Object.values(data[0])[0];
      history.push(`${pathname}/${id}`);
    }
  }, [data]);

  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
      <ToggleButtonGroup name="options">
        <ToggleButton
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
      <Button
        data-testid="exec-search-btn"
        type="submit"
        onClick={ handleSearch }
      >
        Search
      </Button>
    </div>
  );
}
