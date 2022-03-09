import React from 'react';
import { screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import renderWithRouter from './renderWithRouter';

describe('13- Implemente os elementos da barra de busca', () => {
  it('A barra de busca deve possuir data-testid="search-input"', () => {
    renderWithRouter(<SearchBar />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
  it('O radio button deve possuir data-testid="ingredient-search-radio"', () => {
    renderWithRouter(<SearchBar />);
    const ingredientButton = screen.getByTestId('ingredient-search-radio');
    expect(ingredientButton).toBeInTheDocument();
  });
  it('O radio button deve possuir data-testid="name-search-radio"', () => {
    renderWithRouter(<SearchBar />);
    const nameButton = screen.getByTestId('name-search-radio');
    expect(nameButton).toBeInTheDocument();
  });
  it('O radio button deve possuir data-testid="first-letter-search-radio"', () => {
    renderWithRouter(<SearchBar />);
    const firstLetterButton = screen.getByTestId('first-letter-search-radio');
    expect(firstLetterButton).toBeInTheDocument();
  });
  it('O botão de busca deve possuir o atributo data-testid="exec-search-btn"', () => {
    renderWithRouter(<SearchBar />);
    const searchBtn = screen.getByTestId('exec-search-btn');
    expect(searchBtn).toBeInTheDocument();
  });
});
