import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/context';
import { DRINKS } from '../helpers/constants';

export default function Drinks() {
  const { drinkData } = useContext(AppContext);

  return (
    <>
      <Header title="Drinks" withSearchButton />
      {
        drinkData.map((drink, index) => {
          const data = { ...drink, index };
          return (
            <Card key={ drink.idDrink } data={ data } type={ DRINKS } />
          );
        })
      }
      <Footer />
    </>
  );
}
