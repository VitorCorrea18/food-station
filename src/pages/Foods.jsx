import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/context';
import Card from '../components/Card';

export default function Foods() {
  const { foodData } = useContext(AppContext);
  return (
    <>
      <Header title="Foods" withSearchButton />
      {
        (foodData.length > 0) && (
          foodData.map((recipe, index) => (
            <Card key={ index } data={ { ...recipe, index } } />
          ))
        )
      }
      <Footer />
    </>
  );
}
