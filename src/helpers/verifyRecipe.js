const verifyRecipe = (id, setVerify) => {
  const doneRecipes = localStorage.getItem('doneRecipes');
  const inProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (doneRecipes) {
    const findRecipe = doneRecipes
      .find((data) => data.id === id);
    if (findRecipe !== undefined) setVerify('done');
  }
  if (inProgressRecipes) {
    const findRecipe = inProgressRecipes
      .find((data) => data.id === id);
    if (findRecipe !== undefined) setVerify('started');
  }
};

export default verifyRecipe;
