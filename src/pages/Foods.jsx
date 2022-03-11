import React, { useContext } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link } from 'react-router-dom';
import { ToggleButton } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/context';
import Card from '../components/Card';
import { FOODS, FIRST_TWELVE } from '../helpers/constants';
import CategoryButtons from '../components/CategoryButtons';
import { fetchInicialFoodData } from '../services/fetchInicialData';

export default function Foods() {
  const { foodData, setFoodData, foodCategory } = useContext(AppContext);

  const apiFood = async () => {
    const inicialFoodData = await fetchInicialFoodData();
    setFoodData(inicialFoodData.filter((food, index) => index < FIRST_TWELVE));
  };

  const handleClickButtonAll = async () => apiFood();

  return (
    <>
      <Header title="Foods" withSearchButton />
      <ToggleButtonGroup name="categoryBtn">
        {
          <ToggleButton
            type="button"
            data-testid="All-category-filter"
            onClick={ handleClickButtonAll }
          >
            All
          </ToggleButton>
        }
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
