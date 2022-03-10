export const fetchFoodsCategory = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchDrinksCategory = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error.message);
  }
};
