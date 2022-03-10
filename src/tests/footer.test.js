import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('21-verifica se o footer renderiza corretamente em cada pagina', () => {
  const hasNofooter = () => {
    const footerContainer = screen.queryByTestId(FOOTER_TESTID);

    expect(footerContainer).not.toBeInTheDocument();
  };

  it('O footer é não é renderizado na pagina Login', () => {
    renderWithRouter(<Login />);
    hasNofooter();
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
    hasNofooter();
  });

  it('O footer é não é renderizado na tela de detalhes de uma receita de bebidas', () => {
    renderWithRouter(<DrinkRecipe />);
    hasNofooter();
  });

  it('O footer é não é renderizado na tela de receita em progresso de comida', () => {
    renderWithRouter(<FoodProgress />);
    hasNofooter();
  });

  it('O footer é não é renderizado na tela de receita em progresso de bebida', () => {
    renderWithRouter(<DrinkProgress />);
    hasNofooter();
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

  it('O footer tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(<ExploreDrink />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer tem os ícones corretos na tela explorar comidas por ingrediente', () => {
    renderWithRouter(<ExploreFoodIng />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer tem os ícones corretos na tela explorar bebidas por ingrediente', () => {
    renderWithRouter(<ExploreDrinkIng />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer tem os ícones corretos na tela explorar comidas por nacionalidade', () => {
    renderWithRouter(<ExploreFoodNat />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer tem os ícones corretos na tela de perfil', () => {
    renderWithRouter(<Profile />);
    const footerContainer = screen.getByTestId('footer');
    expect(footerContainer).toBeInTheDocument();
  });

  it('O footer tem os ícones corretos na tela de receitas feitas', () => {
    renderWithRouter(<DoneRecipe />);
    hasNofooter();
  });

  it('O footer tem os ícones corretos na tela de receitas favoritas', () => {
    renderWithRouter(<Favorite />);
    hasNofooter();
  });
});

describe(
  '22- Redirecione a pessoa usuária para cocktails ao clicar no ícone de bebidas', () => {
    it('A mudança de tela ocorre corretamente para bebidas', () => {
      const { history } = renderWithRouter(<Footer />);
      const drinkIcon = screen.getByTestId('drinks-bottom-btn');
      userEvent.click(drinkIcon);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/drinks'); // testa se a rota é root '/'.
    });
  },
);

describe(
  '23- Redirecione a pessoa usuária para cocktails ao clicar no ícone de explore', () => {
    it('A mudança de tela ocorre corretamente para explorar', () => {
      const { history } = renderWithRouter(<Footer />);
      const exploreIcon = screen.getByTestId('explore-bottom-btn');
      userEvent.click(exploreIcon);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/explore'); // testa se a rota é root '/'.
    });
  },
);

describe(
  '24- Redirecione a pessoa usuária para cocktails ao clicar no ícone de foods', () => {
    it('A mudança de tela ocorre corretamente foods', () => {
      const { history } = renderWithRouter(<Footer />);
      const foodIcon = screen.getByTestId('food-bottom-btn');
      userEvent.click(foodIcon);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/foods'); // testa se a rota é root '/'.
    });
  },
);
