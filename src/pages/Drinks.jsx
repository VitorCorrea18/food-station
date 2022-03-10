import React, { useContext } from 'react';
import { ToggleButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CategoryButtons from '../components/CategoryButtons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/context';
import { DRINKS } from '../helpers/constants';

export default function Drinks() {
  const { drinkData, drinkCategory } = useContext(AppContext);

  return (
    <>
      <Header title="Drinks" withSearchButton />
      <ToggleButtonGroup name="categoryBtn">
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
