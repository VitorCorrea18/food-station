export const fetchInicialFoodData = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchInicialDrinkData = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error.message);
  }
};
