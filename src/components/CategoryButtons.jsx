import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/context';

export default function CategoryButtons({ category }) {
  const [foodData, setFoodData] = useContext(AppContext);

  return (
    <button
      type="button"
      data-testid={ `${category}-category-filter` }
    >
      { category }
    </button>
    // Os requisito 28 e 29 podem ser feitos por aqui, segue o meu raciocionio até o momento:
    // Manipular os contextos por aqui "foodData", "setFoodData".
    // Trocar esse button por um toggle do bootstrap igual foi feito no searchBar,
    // e adicionar a lógica de ativar e desativar o filtro chamando a Api correspondente em cada caso.
    // Obs: acho que da pra usar a callInicialFetch nos helpers para retirar o filtro.
    // As funções de fetchByCategory estão na pasta services já prontas.
  );
}

CategoryButtons.propTypes = {
  category: PropTypes.string.isRequired,
};
