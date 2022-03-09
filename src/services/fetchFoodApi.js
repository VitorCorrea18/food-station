const fetchFood = async (name, type) => {
  let URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';
  if (type === 'i') URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  try {
    const promise = await fetch(`${URL}${type}=${name}`);
    const data = await promise.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchFood;
