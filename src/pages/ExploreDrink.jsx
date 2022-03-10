import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/context';

export default function ExploreDrinks() {
  const history = useHistory();
  const { drinkRandom } = useContext(AppContext);
  return (
    <>
      <Header title="Explore Drinks" withSearchButton={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/drinks/${drinkRandom[0].idDrink}`) }
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
