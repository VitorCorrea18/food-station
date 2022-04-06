import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFoodIngreList } from '../services/fetchIngredients';
import fetchData from '../services/fetchData';
import AppContext from '../context/context';
import { FIRST_TWELVE } from '../helpers/constants';
import '../styles/explorar.css';

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
    <div className="main-explore">
      <Header title="Explore Ingredients" withSearchButton={ false } />
      <div className="explore-ingcard-content">
        {
          data.map((ingrediente, index) => (
            <div
              key={ ingrediente.idIngredient }
              data-testid={ `${index}-ingredient-card` }
              onClick={ () => { handleExplore(ingrediente.strIngredient); } }
              onKeyDown={ () => { handleExplore(ingrediente.strIngredient); } }
              role="button"
              tabIndex={ 0 }
              className="explore-ing-card"
            >
              <h1 data-testid={ `${index}-card-name` } className="ingr-name">
                {ingrediente.strIngredient}
              </h1>
              <Image
                alt="ingrediente"
                src={ `https://www.themealdb.com/images/ingredients/${ingrediente.strIngredient}-Small.png` }
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
