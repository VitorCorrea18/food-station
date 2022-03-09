import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExploreFoods() {
  return (
    <>
      <Header title="Explore Foods" withSearchButton={ false } />
      <h1>Explore Foods</h1>
      <Footer />
    </>
  );
}
