export const fetchFoodByCategory = async (category) => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  console.log('funciona! fetchByCategory');

  try {
    const response = await fetch(`${URL}${category}`);
    const data = await response.json();
    console.log(data);
    return data.meals;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchDrinkByCategory = async (category) => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  try {
    const response = await fetch(`${URL}${category}`);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error.message);
  }
};
