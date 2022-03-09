const fetchData = async (name, type, location) => {
  let URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';

  if (type === 'i' && location === '/foods') {
    URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  }
  if (location === '/drinks') {
    URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
  }
  if (type === 'i' && location === '/drinks') {
    URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
  }
  try {
    const promise = await fetch(`${URL}${type}=${name}`);
    const data = await promise.json();
    return Object.values(data)[0];
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
