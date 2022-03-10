import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/context';

export default function ExploreFoods() {
  const history = useHistory();
  const { foodRandom } = useContext(AppContext);
  return (
    <>
      <Header title="Explore Foods" withSearchButton={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/foods/${foodRandom[0].idMeal}`) }
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
