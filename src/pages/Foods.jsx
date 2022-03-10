import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/context';
import Card from '../components/Card';
import { FOODS } from '../helpers/constants';
import CategoryButtons from '../components/CategoryButtons';

export default function Foods() {
  const { foodData, foodCategory } = useContext(AppContext);

  return (
    <>
      <Header title="Foods" withSearchButton />
      {
        foodCategory.map((category) => (
          <CategoryButtons
            key={ category.strCategory }
            category={ category.strCategory }
          />
        ))
      }

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
