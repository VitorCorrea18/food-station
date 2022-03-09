const fetchFoodRecipe = async (id) => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  try {
    const promise = await fetch(`${URL}${id}`);
    const data = await promise.json();
    return data.meals[0];
  } catch (error) {
    console.log(error);
  }
};

export default fetchFoodRecipe;
