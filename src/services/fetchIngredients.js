const MAX_ARRAY_INDEX = 12;

export const fetchFoodIngreList = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  try {
    const promise = await fetch(URL);
    const data = await promise.json();
    return data.meals.slice(0, MAX_ARRAY_INDEX);
  } catch (error) {
    console.log(error);
  }
};

export const fetchDrinkIngreList = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  try {
    const promise = await fetch(URL);
    const data = await promise.json();
    return data.drinks.slice(0, MAX_ARRAY_INDEX);
  } catch (error) {
    console.log(error);
  }
};
