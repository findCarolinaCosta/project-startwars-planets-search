import React, { useContext, useState } from 'react';
import { Context } from '../Context/PlanetsProvider';
import { INITIAL_OPTIONS_COLUMN } from './FilterField';

function SortField() {
  const { setOrder } = useContext(Context);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [chosenColumn, setChosenColumn] = useState('');

  const handleChange = ({ target }) => {
    setSelectedRadio(target.value);
  };

  const handleClick = () => {
    setOrder((prevState) => ({
      ...prevState,
      column: chosenColumn,
      sort: selectedRadio,
    }));
  };

  return (
    <div className="flex p-4 align-middle justify-center gap-5">
      <p className="self-center">Ordenar:</p>
      <label htmlFor="option__order" className="self-center">
        <select
          id="option__order"
          data-testid="column-sort"
          name="column"
          onChange={ ({ target }) => setChosenColumn(target.value) }
          value={ chosenColumn }
          className="form-select"
        >
          {INITIAL_OPTIONS_COLUMN
            .map((option) => <option key={ option }>{option}</option>)}
        </select>
      </label>
      <label htmlFor="sort__asc" className="self-center">
        <input
          name="opcao"
          id="sort__asc"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ handleChange }
          className="form-check-input"
        />
        Ascendente
      </label>
      <label htmlFor="sort__dsc" className="self-center">
        <input
          name="opcao"
          id="sort__dsc"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleChange }
          className="form-check-input"
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ handleClick }
        className="btn btn-info"
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortField;
