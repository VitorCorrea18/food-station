import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFoodIngreList } from '../services/fetchIngredients';
import fetchData from '../services/fetchData';
import AppContext from '../context/context';
import { FIRST_TWELVE } from '../helpers/constants';

export default function ExploreFoodsIng() {
  const { setFoodData } = useContext(AppContext);
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleExplore = async (ingrediente) => {
    const searchIngr = await fetchData(ingrediente, 'i', '/foods');
    setFoodData(searchIngr.slice(0, FIRST_TWELVE));
    history.push('/foods');
  };

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
            onClick={ () => { handleExplore(ingrediente.strIngredient); } }
            onKeyDown={ () => { handleExplore(ingrediente.strIngredient); } }
            role="button"
            tabIndex={ 0 }
          >
            <h1 data-testid={ `${index}-card-name` }>
              {ingrediente.strIngredient}
            </h1>
            <img
              alt="ingrediente"
              src={ `https://www.themealdb.com/images/ingredients/${ingrediente.strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
            />
          </div>
        ))
      }
      <Footer />
    </>
  );
}
