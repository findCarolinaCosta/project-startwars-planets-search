import React, { useContext, useState } from 'react';
import { Context } from '../Context/PlanetsProvider';

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

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };

  const handleClick = () => {
    setFiltered(true);
    setFilterByNumericValues({ column, comparison, value });
    setColumn('population');
    setComparison('maior que');
    setValue('0');
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
          onChange={ (event) => setColumn(event.target.value) }
          value={ column }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
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
