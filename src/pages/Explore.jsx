import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/explorar.css';

export default function Explore() {
  const history = useHistory();
  return (
    <div className="main-explore">
      <Header title="Explore" withSearchButton={ false } />
      <div className="explore-button-content">
        <button
          className="explorar-button"
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          className="explorar-button"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}
