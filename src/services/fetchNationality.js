export const fetchNationality = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

export const fetchFoodByNationality = async (area) => {
  const URL = 'www.themealdb.com/api/json/v1/1/filter.php?a=';

  const response = await fetch(`${URL}${area}`);
  const data = await response.json();
  return data.meals;
};
