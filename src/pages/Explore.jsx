import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Explore() {
  return (
    <>
      <Header title="Explore" withSearchButton={ false } />
      <button
        type="button"
        data-testid="explore-foods"
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
      >
        Explore Drinks
      </button>
      <Footer />
    </>
  );
}
