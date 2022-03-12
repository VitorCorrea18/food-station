import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFoodIngreList } from '../services/fetchIngredients';

export default function ExploreFoodsIng() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const ingrData = await fetchFoodIngreList();
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
              {ingrediente.strIngredient}
            </h1>
            <img
              alt="ingrediente"
              src={ `https://www.themealdb.com/images/ingredients/${ingrediente.strIngredient}.png` }
              data-testid={ `${index}-card-img` }
            />
          </div>
        ))
      }
      <Footer />
    </>
  );
}
