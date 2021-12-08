import React, { useContext, useState } from 'react';
import { Context } from '../Context/PlanetsProvider';

const INITIAL_OPTIONS_COLUMN = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function FilterField() {
  const {
    filterByName,
    setFilterByName,
    setFiltered,
    setFilterByNumericValues,
  } = useContext(Context);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('0');
  const [optionColumn, setOptionColumn] = useState(INITIAL_OPTIONS_COLUMN);

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };

  const handleClick = () => {
    setFiltered(true);
    setFilterByNumericValues({ column, comparison, value });
    setColumn('population');
    setComparison('maior que');
    setValue('0');
    const newArrayOptions = optionColumn.filter((option) => option !== column);
    setOptionColumn(newArrayOptions);
  };

  const setColumnInfos = ({ target }) => {
    setColumn(target.value);
  };

  return (
    <div>
      <input
        value={ filterByName }
        onChange={ handleChange }
        data-testid="name-filter"
        placeholder="Filtro pelo nome do planeta"
      />
      <label htmlFor="select-option">
        Filtre por:
        <select
          id="select-option"
          data-testid="column-filter"
          name="column"
          onChange={ (event) => setColumnInfos(event) }
          value={ column }
        >
          {optionColumn.map((option) => <option key={ option }>{option}</option>)}
        </select>
      </label>
      <label htmlFor="select-comparison">
        <select
          id="select-comparison"
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => setComparison(event.target.value) }
          value={ comparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="Digite um valor"
        name="value"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilterField;
