import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import '../styles/Carousel.css';
import { useHistory } from 'react-router-dom';

const DISPLAY_TYPE = 'inline-block';

export default function CarouselSug({ data }) {
  const history = useHistory();
  const redirect = (id) => {
    if (data[0].idMeal !== undefined) return history.push(`/foods/${id.idMeal}`);
    if (data[0].idDrink !== undefined) return history.push(`/drinks/${id.idDrink}`);
  };

  return (
    <Carousel className="mainCarousel">
      <Carousel.Item>
        <div
          style={ { display: DISPLAY_TYPE } }
          onKeyDown={ () => redirect(data[0]) }
          onClick={ () => redirect(data[0]) }
          role="button"
          tabIndex={ 0 }
        >
          <h1 className="carousel-title">{data[0].strDrink || data[0].strMeal}</h1>
          <img
            className="imgCarousel"
            src={ data[0].strDrinkThumb || data[0].strMealThumb }
            alt="recipe"
          />
        </div>
        <div
          style={ { display: DISPLAY_TYPE } }
          onKeyDown={ () => redirect(data[1]) }
          onClick={ () => redirect(data[1]) }
          role="button"
          tabIndex={ 0 }
        >
          <h1 className="carousel-title">{data[1].strDrink || data[1].strMeal}</h1>
          <img
            className="imgCarousel"
            src={ data[1].strDrinkThumb || data[1].strMealThumb }
            alt="recipe"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={ { display: DISPLAY_TYPE } }
          onKeyDown={ () => redirect(data[2]) }
          onClick={ () => redirect(data[2]) }
          role="button"
          tabIndex={ 0 }
        >
          <h1 className="carousel-title">{data[2].strDrink || data[2].strMeal}</h1>
          <img
            className="imgCarousel"
            src={ data[2].strDrinkThumb || data[2].strMealThumb }
            alt="recipe"
          />
        </div>
        <div
          style={ { display: DISPLAY_TYPE } }
          onKeyDown={ () => redirect(data[3]) }
          onClick={ () => redirect(data[3]) }
          role="button"
          tabIndex={ 0 }
        >
          <h1 className="carousel-title">{data[3].strDrink || data[3].strMeal}</h1>
          <img
            className="imgCarousel"
            src={ data[3].strDrinkThumb || data[3].strMealThumb }
            alt="recipe"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={ { display: DISPLAY_TYPE } }
          onKeyDown={ () => redirect(data[4]) }
          onClick={ () => redirect(data[4]) }
          role="button"
          tabIndex={ 0 }
        >
          <h1 className="carousel-title">{data[4].strDrink || data[4].strMeal}</h1>
          <img
            className="imgCarousel"
            src={ data[4].strDrinkThumb || data[4].strMealThumb }
            alt="recipe"
          />
        </div>
        <div
          style={ { display: DISPLAY_TYPE } }
          onKeyDown={ () => redirect(data[5]) }
          onClick={ () => redirect(data[5]) }
          role="button"
          tabIndex={ 0 }
        >
          <h1 className="carousel-title">{data[5].strDrink || data[5].strMeal}</h1>
          <img
            className="imgCarousel"
            src={ data[5].strDrinkThumb || data[5].strMealThumb }
            alt="recipe"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

CarouselSug.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
    type: PropTypes.string,
  })).isRequired,
};
