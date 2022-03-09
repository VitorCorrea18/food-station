import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/context';
import Card from '../components/Card';
import { FOODS } from '../helpers/constants';

export default function Foods() {
  const { foodData } = useContext(AppContext);

  return (
    <>
      <Header title="Foods" withSearchButton />
      {
        foodData.map((food, index) => {
          const data = { ...food, index };
          return (
            <Card key={ food.idMeal } data={ data } type={ FOODS } />
          );
        })
      }
      <Footer />
    </>
  );
}
