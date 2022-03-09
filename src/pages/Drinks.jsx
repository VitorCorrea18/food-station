import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/context';
import DrinkCard from '../components/DrinkCard';

export default function Drinks() {
  const { drinkData } = useContext(AppContext);
  return (
    <>
      <Header title="Drinks" withSearchButton />
      {
        (drinkData.length > 0) && (
          drinkData.map((recipe, index) => (
            <DrinkCard key={ index } data={ { ...recipe, index } } />
          ))
        )
      }
      <Footer />
    </>
  );
}
