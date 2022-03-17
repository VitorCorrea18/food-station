import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import '../styles/Carousel.css';

const DISPLAY_TYPE = 'inline-block';

export default function CarouselSug({ data }) {
  return (
    <Carousel className="mainCarousel">
      <Carousel.Item>
        <div style={ { display: DISPLAY_TYPE } }>
          <h1>{data[0].strDrink}</h1>
          <img className="imgCarousel" src={ data[0].strDrinkThumb } alt="recipe" />
        </div>
        <div style={ { display: DISPLAY_TYPE } }>
          <h1>{data[1].strDrink}</h1>
          <img className="imgCarousel" src={ data[1].strDrinkThumb } alt="recipe" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={ { display: DISPLAY_TYPE } }>
          <h1>{data[2].strDrink}</h1>
          <img className="imgCarousel" src={ data[2].strDrinkThumb } alt="recipe" />
        </div>
        <div style={ { display: DISPLAY_TYPE } }>
          <h1>{data[3].strDrink}</h1>
          <img className="imgCarousel" src={ data[3].strDrinkThumb } alt="recipe" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={ { display: DISPLAY_TYPE } }>
          <h1>{data[4].strDrink}</h1>
          <img className="imgCarousel" src={ data[4].strDrinkThumb } alt="recipe" />
        </div>
        <div style={ { display: DISPLAY_TYPE } }>
          <h1>{data[5].strDrink}</h1>
          <img className="imgCarousel" src={ data[5].strDrinkThumb } alt="recipe" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

CarouselSug.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};
