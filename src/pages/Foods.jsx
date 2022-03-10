import React, { useContext } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from 'react-router-dom';
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
      <ToggleButtonGroup name="categoryBtn">
        {
          foodCategory.map((category) => (
            <CategoryButtons
              key={ category.strCategory }
              category={ category.strCategory }
              filter={ FOODS }
            />
          ))
        }
      </ToggleButtonGroup>

      {
        foodData.map((food, index) => {
          const data = { ...food, index };
          return (
            <Link key={ food.idMeal } to={ `/foods/${food.idMeal}` }>
              <Card key={ food.idMeal } data={ data } type={ FOODS } />
            </Link>
          );
        })
      }
      <Footer />
    </>
  );
}
