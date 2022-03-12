import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinkIngreList } from '../services/fetchIngredients';

export default function ExploreDrinksIng() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const ingrData = await fetchDrinkIngreList();
    setData(ingrData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header title="Explore Ingredients" withSearchButton={ false } />
      {
        data.map((ingrediente, index) => (
          <div
            key={ ingrediente.idIngredient }
            data-testid={ `${index}-ingredient-card` }
          >
            <h1 data-testid={ `${index}-card-name` }>
              {ingrediente.strIngredient1}
            </h1>
            <img
              alt="ingrediente"
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient1}-Small.png` }
              data-testid={ `${index}-card-img` }
            />
          </div>
        ))
      }
      <Footer />
    </>
  );
}
