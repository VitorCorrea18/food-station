import { fetchDrinkByCategory, fetchFoodByCategory } from '../services/fetchByCategory';
import {
  fetchInicialDrinkData, fetchInicialFoodData } from '../services/fetchInicialData';
import { FIRST_TWELVE } from './constants';

export const filterFoods = async (setFoodData, activeFilter, category) => {
  console.log('funciona! foods');
  if (!activeFilter) {
    const filteredFoods = await fetchFoodByCategory(category);
    setFoodData(filteredFoods.filter((food, index) => index < FIRST_TWELVE));
  } else {
    const inicialFoodData = await fetchInicialFoodData();
    setFoodData(inicialFoodData.filter((food, index) => index < FIRST_TWELVE));
  }
};

export const filterDrinks = async (setDrinkData, activeFilter, category) => {
  console.log('funciona! drinks');
  if (!activeFilter) {
    const filteredDrinks = await fetchDrinkByCategory(category);
    setDrinkData(filteredDrinks.filter((food, index) => index < FIRST_TWELVE));
  } else {
    const inicialDrinkData = await fetchInicialDrinkData();
    setDrinkData(inicialDrinkData.filter((food, index) => index < FIRST_TWELVE));
  }
};
