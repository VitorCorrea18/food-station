export const isFavorite = (id, setFavorite) => {
  const favoriteRecipes = localStorage.getItem('favoriteRecipes');
  if (favoriteRecipes) {
    const findFavorite = JSON.parse(favoriteRecipes)
      .find((favorite) => favorite.id === id);
    if (!findFavorite) return setFavorite(false);
    return setFavorite(true);
  } if (!favoriteRecipes) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
  return setFavorite(false);
};

export const handleFavoriteMeal = (favorite, setFavorite, recipe) => {
  const storageData = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorite === false) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...storageData, {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    }]));
  }
  if (favorite === true) {
    const filterStorage = storageData
      .filter((data) => (data.id !== recipe.idMeal));
    localStorage.setItem('favoriteRecipes', JSON.stringify(filterStorage));
  }
  setFavorite(!favorite);
};

export const handleFavoriteDrink = (favorite, setFavorite, recipe) => {
  const storageData = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favorite === false) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([...storageData, {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    }]));
  }
  if (favorite === true) {
    const filterStorage = storageData
      .filter((data) => (data.id !== recipe.idDrink));
    localStorage.setItem('favoriteRecipes', JSON.stringify(filterStorage));
  }
  setFavorite(!favorite);
};
