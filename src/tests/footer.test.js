import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import Footer from '../components/Footer';
import renderWithRouter from './renderWithRouter';
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
import { FOOTER_TESTID } from '../helpers/testsConstants';

describe('19- Implemente os elementos do menu inferior', () => {
  it('O menu inferior deve possuir data-testid="footer"', () => {
    renderWithRouter(<Footer />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });
  it('O elemento página de bebidas possui data-testid="drinks-bottom-btn"', () => {
    renderWithRouter(<Footer />);
    const linkDrinks = screen.getByTestId('drinks-bottom-btn');
    expect(linkDrinks).toBeInTheDocument();
  });
  it('O elemento página de explorar possui data-testid="explore-bottom-btn""', () => {
    renderWithRouter(<Footer />);
    const linkExplore = screen.getByTestId('explore-bottom-btn');
    expect(linkExplore).toBeInTheDocument();
  });
  it('O elemento página de comidas possui data-testid="food-bottom-btn"', () => {
    renderWithRouter(<Footer />);
    const linkFoods = screen.getByTestId('food-bottom-btn');
    expect(linkFoods).toBeInTheDocument();
  });
});

describe('20-verifica se o footer renderiza corretamente em cada pagina', () => {
  const hasNoHeader = () => {
    const footerContainer = screen.queryByTestId(FOOTER_TESTID);

    expect(footerContainer).not.toBeInTheDocument();
  };

  it('O header é não é renderizado na pagina Login', () => {
    renderWithRouter(<Login />);
    hasNoHeader();
  });

  it('O footer é renderizado corretamente na pagina comidas', () => {
    renderWithRouter(<Foods />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer é renderizado corretamente na pagina Bebidas', () => {
    renderWithRouter(<Drinks />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer é não é renderizado na tela de detalhes de uma receita de comidas', () => {
    renderWithRouter(<FoodRecipe />);
    hasNoHeader();
  });

  it('O footer é não é renderizado na tela de detalhes de uma receita de bebidas', () => {
    renderWithRouter(<DrinkRecipe />);
    hasNoHeader();
  });

  it('O footer é não é renderizado na tela de receita em progresso de comida', () => {
    renderWithRouter(<FoodProgress />);
    hasNoHeader();
  });

  it('O footer é não é renderizado na tela de receita em progresso de bebida', () => {
    renderWithRouter(<DrinkProgress />);
    hasNoHeader();
  });

  it('O footer é renderizado corretamente na pagina Explore', () => {
    renderWithRouter(<Explore />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(<ExploreFood />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(<ExploreDrink />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela explorar comidas por ingrediente', () => {
    renderWithRouter(<ExploreFoodIng />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela explorar bebidas por ingrediente', () => {
    renderWithRouter(<ExploreDrinkIng />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela explorar comidas por nacionalidade', () => {
    renderWithRouter(<ExploreFoodNat />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela de perfil', () => {
    renderWithRouter(<Profile />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela de receitas feitas', () => {
    renderWithRouter(<DoneRecipe />);
    hasNoHeader();
  });

  it('O header tem os ícones corretos na tela de receitas favoritas', () => {
    renderWithRouter(<Favorite />);
    hasNoHeader();
  });
});

// describe(
//   'Redirecione a pessoa usuária para tela perfil ao clicar no botão perfil', () => {
//     it('A mudança de tela ocorre corretamente', () => {
//       const { history } = renderWithRouter(<Foods />);
//       const exploreIcon = screen.getByTestId('explore-bottom-btn');
//       userEvent.click(exploreIcon);
//       const { location: { pathname } } = history;
//       expect(pathname).toBe('/explore'); // testa se a rota é root '/'.
//     });
//   },
// );
