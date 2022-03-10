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
        explore-by-ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
      >
        explore-by-nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        explore-surprise
      </button>
      <Footer />
    </>
  );
}
