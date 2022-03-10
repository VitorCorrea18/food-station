export const fetchRandomFood = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchRandomDrink = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error.message);
  }
};
