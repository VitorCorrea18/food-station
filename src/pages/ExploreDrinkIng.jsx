import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinkIngreList } from '../services/fetchIngredients';
import fetchData from '../services/fetchData';
import AppContext from '../context/context';
import { FIRST_TWELVE } from '../helpers/constants';
import '../styles/explorar.css';

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
    <div className="main-explore">
      <Header title="Explore Ingredients" withSearchButton={ false } />
      <div className="explore-ingcard-content">
        {
          data.map((ingrediente, index) => (
            <div
              key={ ingrediente.strIngredient1 }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => { handleExplore(ingrediente.strIngredient1); } }
              onKeyDown={ () => { handleExplore(ingrediente.strIngredient1); } }
              role="button"
              tabIndex={ 0 }
              className="explore-ing-card"
            >
              <h1 data-testid={ `${index}-card-name` } className="ingr-name">
                {ingrediente.strIngredient1}
              </h1>
              <Image
                alt="ingrediente"
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient1}-Small.png` }
                data-testid={ `${index}-card-img` }
                fluid
              />
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}
