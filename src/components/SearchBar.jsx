import React from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function SearchBar() {
  return (
    <div>
      <ToggleButtonGroup type="radio" name="options">
        <ToggleButton
          value={ 1 }
          data-testid="ingredient-search-radio"
        >
          Ingredient
        </ToggleButton>
        <ToggleButton
          value={ 1 }
          data-testid="name-search-radio"
        >
          Name
        </ToggleButton>
        <ToggleButton
          value={ 1 }
          data-testid="first-letter-search-radio"
        >
          First Letter
        </ToggleButton>
      </ToggleButtonGroup>
      <Button
        data-testid="exec-search-btn"
        type="submit"
      >
        Search
      </Button>
    </div>

  );
}
