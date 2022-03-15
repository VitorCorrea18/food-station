import {
  fetchInicialDrinkData, fetchInicialFoodData } from '../services/fetchInicialData';
import { FIRST_TWELVE } from './constants';

const callFetchInicialData = async (setFoodData, setDrinkData) => {
  // foods
  const inicialFoodData = await fetchInicialFoodData();
  setFoodData(inicialFoodData.filter((food, index) => index < FIRST_TWELVE));

  // drinks
  const inicialDrinkData = await fetchInicialDrinkData();
  setDrinkData(inicialDrinkData.filter((drink, index) => index < FIRST_TWELVE));
};

export default callFetchInicialData;
