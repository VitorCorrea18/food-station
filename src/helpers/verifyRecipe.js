const verifyRecipe = (id, setVerify, string) => {
  const doneRecipes = localStorage.getItem('doneRecipes');
  const inProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (doneRecipes) {
    const findRecipe = doneRecipes
      .find((data) => data.id === id);
    if (findRecipe !== undefined) setVerify('done');
  }
  if (inProgressRecipes) {
    const dadosSalvos = JSON.parse(inProgressRecipes);
    if (Object.keys(dadosSalvos[string]).length > 0) {
      const idsInProgress = Object.keys(dadosSalvos[string]);
      const findRecipe = idsInProgress
        .find((data) => data === id);
      if (findRecipe !== undefined) setVerify('started');
    }
  }
};

export default verifyRecipe;
