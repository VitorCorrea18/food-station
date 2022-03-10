import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExploreDrinks() {
  return (
    <>
      <Header title="Explore Drinks" withSearchButton={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        explore-by-ingredient
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
