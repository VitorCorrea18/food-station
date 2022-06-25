import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import FoodRecipe from '../pages/FoodRecipe';
import DrinkRecipe from '../pages/DrinkRecipe';
import FoodProgress from '../pages/FoodProgress';
import DrinkProgress from '../pages/DrinkProgress';
import Explore from '../pages/Explore';
import ExploreFood from '../pages/ExploreFood';
import ExploreDrink from '../pages/ExploreDrink';
import ExploreFoodIng from '../pages/ExploreFoodIng';
import ExploreDrinkIng from '../pages/ExploreDrinkIng';
import ExploreFoodNat from '../pages/ExploreFoodNat';
import Profile from '../pages/Profile';
import DoneRecipe from '../pages/DoneRecipe';
import Favorite from '../pages/Favorite';
import {
  HEADER_TITLE_TESTID,
  HEADER_SEARCH_ICON_TESTID,
  HEADER_PROFILE_ICON_TESTID,
  SEARCH_BAR_TESTID } from '../helpers/testsConstants';

describe('verifica se O header renderiza corretamente em cada pagina', () => {
  const hasNoHeader = () => {
    const title = screen.queryByTestId(HEADER_TITLE_TESTID);
    const profileIcon = screen.queryByTestId(HEADER_PROFILE_ICON_TESTID);
    const searchIcon = screen.queryByTestId(HEADER_SEARCH_ICON_TESTID);

    expect(title).not.toBeInTheDocument();
    expect(profileIcon).not.toBeInTheDocument();
    expect(searchIcon).not.toBeInTheDocument();
  };

  const hasHeader = (titleText, withSearchButton = true) => {
    const title = screen.queryByTestId(HEADER_TITLE_TESTID);
    const profileIcon = screen.queryByTestId(HEADER_PROFILE_ICON_TESTID);
    const searchIcon = screen.queryByTestId(HEADER_SEARCH_ICON_TESTID);

    if (withSearchButton) {
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(titleText);
      expect(profileIcon).toBeInTheDocument();
      expect(searchIcon).toBeInTheDocument();
    } else {
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent(titleText);
      expect(profileIcon).toBeInTheDocument();
      expect(searchIcon).not.toBeInTheDocument();
    }
  };

  it('O header é não é renderizado na pagina Login', () => {
    renderWithRouter(<Login />);
    hasNoHeader();
  });

  it('O header é renderizado corretamente na pagina comidas', () => {
    renderWithRouter(<Foods />);
    hasHeader('Foods');
  });

  it('O header é renderizado corretamente na pagina Bebidas', () => {
    renderWithRouter(<Drinks />);
    hasHeader('Drinks');
  });

  it('O header é não é renderizado na tela de detalhes de uma receita de comidas', () => {
    renderWithRouter(<FoodRecipe />);
    hasNoHeader();
  });

  it('O header é não é renderizado na tela de detalhes de uma receita de bebidas', () => {
    renderWithRouter(<DrinkRecipe />);
    hasNoHeader();
  });

  it('O header é não é renderizado na tela de receita em progresso de comida', () => {
    renderWithRouter(<FoodProgress />);
    hasNoHeader();
  });

  it('O header é não é renderizado na tela de receita em progresso de bebida', () => {
    renderWithRouter(<DrinkProgress />);
    hasNoHeader();
  });

  it('O header é renderizado corretamente na pagina Explore', () => {
    renderWithRouter(<Explore />);
    hasHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(<ExploreFood />);
    hasHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(<ExploreDrink />);
    hasHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela explorar comidas por ingrediente', () => {
    renderWithRouter(<ExploreFoodIng />);
    hasHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela explorar bebidas por ingrediente', () => {
    renderWithRouter(<ExploreDrinkIng />);
    hasHeader('Explore', false);
  });

  it('O header tem os ícones corretos na tela explorar comidas por nacionalidade', () => {
    renderWithRouter(<ExploreFoodNat />);
    hasHeader('Explore');
  });

  it('O header tem os ícones corretos na tela de perfil', () => {
    renderWithRouter(<Profile />);
    hasHeader('Profile', false);
  });

  it('O header tem os ícones corretos na tela de receitas feitas', () => {
    renderWithRouter(<DoneRecipe />);
    hasHeader('Done Recipes', false);
  });

  it('O header tem os ícones corretos na tela de receitas favoritas', () => {
    renderWithRouter(<Favorite />);
    hasHeader('Favorite Recipes', false);
  });
});

describe(
  'Redirecione a pessoa usuária para tela perfil ao clicar no botão perfil', () => {
    it('A mudança de tela ocorre corretamente', () => {
      const { history } = renderWithRouter(<Foods />);
      const profileIcon = screen.queryByTestId(HEADER_PROFILE_ICON_TESTID);
      userEvent.click(profileIcon);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/profile'); // testa se a rota é root '/'.
    });
  },
);

describe('Habilita e desabilita a barra de busca ao clicar no botão de busca', () => {
  it('A barra de busca está presente ao clicar o botão', () => {
    renderWithRouter(<Foods />);

    const searchIcon = screen.queryByTestId(HEADER_SEARCH_ICON_TESTID);
    userEvent.click(searchIcon);

    const searchBar = screen.queryByTestId(SEARCH_BAR_TESTID);
    expect(searchBar).toBeInTheDocument();

    userEvent.click(searchIcon);
    expect(searchBar).not.toBeInTheDocument();
  });
});
