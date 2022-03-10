const verifyRecipe = (id, setVerify) => {
  const doneRecipes = localStorage.getItem('doneRecipes');
  if (doneRecipes) {
    const findRecipe = doneRecipes
      .find((data) => data.id === id);
    if (findRecipe !== undefined) setVerify('done');
  }
};

export default verifyRecipe;
