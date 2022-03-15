import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchNationality } from '../services/fetchNationality';

export default function ExploreFoodsNat() {
  const [foodNationality, setFoodNationalities] = useState([]);

  const callFetchNationality = async () => {
    const data = await fetchNationality();
    setFoodNationalities(data);
  };

  useEffect(() => {
    callFetchNationality();
  }, []);

  const handleFilter = (target) => {
    console.log(target.value);
  };

  return (
    <>
      <Header title="Explore Nationalities" withSearchButton />
      <select
        name="nationalities"
        data-testid="explore-by-nationality-dropdown"
        onChange={ (e) => handleFilter(e.target) }
      >
        <option value="all">All</option>
        {
          foodNationality.map((nationality) => (
            <option
              value={ nationality.strArea }
              key={ nationality.strArea }
              data-testid={ `${nationality.strArea}-option` }
            >
              { nationality.strArea }
            </option>
          ))
        }
      </select>
      <Footer />
    </>
  );
}
