import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/context';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { fetchNationality } from '../services/fetchNationality';
import applyNationalityFilter from '../helpers/applyNationalityFilter';
import { FOODS } from '../helpers/constants';
import '../styles/explorar.css';

export default function ExploreFoodsNat() {
  const [foodNationality, setFoodNationalities] = useState([]);
  const { foodData, setFoodData } = useContext(AppContext);

  const callFetchNationality = async () => {
    const data = await fetchNationality();
    setFoodNationalities(data);
  };

  useEffect(() => {
    callFetchNationality();
  }, []);

  const handleFilter = (area) => {
    applyNationalityFilter(area, setFoodData);
  };

  return (
    <div className="main-explore">
      <Header title="Explore Nationalities" withSearchButton />
      <select
        className="select-nationality"
        name="nationalities"
        data-testid="explore-by-nationality-dropdown"
        onChange={ (e) => handleFilter(e.target.value) }
      >
        <option value="All" data-testid="All-option">All</option>
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
      <div className="explore-ingcard-content">
        {
          foodData.map((food, index) => {
            const data = { ...food, index };
            return (
              <Link
                key={ food.idMeal }
                to={ `/foods/${food.idMeal}` }
                className="link-card"
              >
                <Card key={ food.idMeal } data={ data } type={ FOODS } />
              </Link>
            );
          })
        }
      </div>
      <Footer />
    </div>
  );
}
