const setDone = (recipe, type) => {
  const doneRecipe = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  // fonte: https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/
  const date = new Date();
  const doneDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  let data = {};
  if (type === 'food') {
    data = {
      id: recipe.idMeal,
      type,
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      doneDate,
      tags: recipe.strTags.split(','),
    };
  }
  if (type === 'drink') {
    data = {
      id: recipe.idDrink,
      type,
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneDate,
      tags: [],
    };
  }
  if (doneRecipe.length > 0) {
    localStorage.setItem('doneRecipes', JSON.stringify([
      ...doneRecipe, data,
    ]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([data]));
  }
};

export default setDone;
