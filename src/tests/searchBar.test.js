import React from 'react';
import { screen, render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('13- Implemente os elementos da barra de busca', () => {
  it('O radio button deve possuir data-testid="ingredient-search-radio"', () => {
    render(<SearchBar />);
    const ingredientButton = screen.getByTestId('ingredient-search-radio');
    expect(ingredientButton).toBeInTheDocument();
  });
  it('O radio button deve possuir data-testid="name-search-radio"', () => {
    render(<SearchBar />);
    const nameButton = screen.getByTestId('name-search-radio');
    expect(nameButton).toBeInTheDocument();
  });
  it('O radio button deve possuir data-testid="first-letter-search-radio"', () => {
    render(<SearchBar />);
    const firstLetterButton = screen.getByTestId('first-letter-search-radio');
    expect(firstLetterButton).toBeInTheDocument();
  });
  it('O botão de busca deve possuir o atributo data-testid="exec-search-btn"', () => {
    render(<SearchBar />);
    const searchBtn = screen.getByTestId('exec-search-btn');
    expect(searchBtn).toBeInTheDocument();
  });
});
