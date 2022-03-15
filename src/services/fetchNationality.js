export const fetchNationality = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchFoodByNationality = async (area) => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

  try {
    const response = await fetch(`${URL}${area}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error.message);
  }
};
