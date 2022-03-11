import React, { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CategoryButtons from '../components/CategoryButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/context';
import { DRINKS, FIRST_TWELVE } from '../helpers/constants';
import { fetchInicialDrinkData } from '../services/fetchInicialData';

export default function Drinks() {
  const { drinkData, setDrinkData, drinkCategory } = useContext(AppContext);

  const apiDrink = async () => {
    const inicialDrinkData = await fetchInicialDrinkData();
    setDrinkData(inicialDrinkData.filter((food, index) => index < FIRST_TWELVE));
  };

  const handleClickButtonAll = async () => apiDrink();

  return (
    <>
      <Header title="Drinks" withSearchButton />

      <ToggleButtonGroup name="categoryBtn">
        <ToggleButton
          type="button"
          data-testid="All-category-filter"
          onClick={ handleClickButtonAll }
        >
          All
        </ToggleButton>
        {
          drinkCategory.map((category) => (
            <CategoryButtons
              key={ category.strCategory }
              category={ category.strCategory }
              filter={ DRINKS }
            />
          ))
        }
      </ToggleButtonGroup>

      {
        drinkData.map((drink, index) => {
          const data = { ...drink, index };
          return (
            <Link key={ drink.idDrink } to={ `/drinks/${drink.idDrink}` }>
              <Card key={ drink.idDrink } data={ data } type={ DRINKS } />
            </Link>
          );
        })
      }
      <Footer />
    </>
  );
}
