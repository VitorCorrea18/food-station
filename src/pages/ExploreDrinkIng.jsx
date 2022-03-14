import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinkIngreList } from '../services/fetchIngredients';
import fetchData from '../services/fetchData';
import AppContext from '../context/context';
import { FIRST_TWELVE } from '../helpers/constants';

export default function ExploreDrinksIng() {
  const { setDrinkData } = useContext(AppContext);
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleExplore = async (ingrediente) => {
    const searchIngr = await fetchData(ingrediente, 'i', '/drinks');
    setDrinkData(searchIngr.slice(0, FIRST_TWELVE));
    history.push('/drinks');
  };

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
            key={ ingrediente.strIngredient1 }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => { handleExplore(ingrediente.strIngredient1); } }
            onKeyDown={ () => { handleExplore(ingrediente.strIngredient1); } }
            role="button"
            tabIndex={ 0 }
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
