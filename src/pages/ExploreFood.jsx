import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreFoods() {
  return (
    <>
      <Header title="Explore Foods" withSearchButton={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </>
  );
}
