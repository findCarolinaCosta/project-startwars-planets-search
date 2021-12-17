import React, { useContext, useState } from 'react';
import { Context } from '../Context/PlanetsProvider';

export const INITIAL_OPTIONS_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const maxDecimalPlaces = 9;

function FilterField() {
  const {
    filterByName,
    setFilterByName,
    setFiltered,
    setFilterByNumericValues,
  } = useContext(Context);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [optionColumn, setOptionColumn] = useState(INITIAL_OPTIONS_COLUMN);
  const [arrFilter, setArrFilter] = useState([]);

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };

  const handleClick = () => {
    setFiltered(true);
    setFilterByNumericValues({ column, comparison, value });
    setArrFilter((prevState) => [...prevState, { column, comparison, value }]);
    setColumn('population');
    setComparison('maior que');
    setValue('0');
    const newArrayOptions = optionColumn.filter((option) => option !== column);
    setOptionColumn(newArrayOptions);
  };

  const setColumnInfos = ({ target }) => {
    setColumn(target.value);
  };

  const removeFilter = (name) => {
    setArrFilter((prevState) => prevState.filter((state) => state.column !== name)); // remove item com base no name do botão
    setOptionColumn((prevState) => [...prevState, name]); // volta a option para o select da coluna de filtro
    setFilterByNumericValues([arrFilter[arrFilter.length - 1]]); // renderiza filtro anterior
  };

  return (
    <section className="flex p-4 align-middle flex-col">
      <div className="m-auto p-5">
        <input
          value={ filterByName }
          onChange={ handleChange }
          data-testid="name-filter"
          placeholder="Filtro pelo nome do planeta"
          className="form-control"
        />
      </div>
      <div className="flex justify-center w-10/12 gap-5 self-center items-center">
        <p className="self-center">Filtre por:</p>
        <label htmlFor="select-option" className="self-center">
          <select
            id="select-option"
            data-testid="column-filter"
            name="column"
            onChange={ (event) => setColumnInfos(event) }
            value={ column }
            className="form-select"
          >
            {optionColumn.map((option) => (
              <option key={ option }>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="select-comparison" className="self-center">
          <select
            id="select-comparison"
            data-testid="comparison-filter"
            name="comparison"
            onChange={ (event) => setComparison(event.target.value) }
            value={ comparison }
            className="form-select"
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
          className="form-control w-25"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
          className="btn btn-info"
        >
          Filtrar
        </button>
      </div>
      <div>
        {arrFilter.map((item) => (
          <div
            key={ Math.random().toString().substr(2, maxDecimalPlaces) }
            data-testid="filter"
          >
            <span className="align-middle">
              {`${item.column}
                  ${item.comparison} ${item.value}`}
            </span>
            <button type="button" onClick={ () => removeFilter(item.column) }>
              <svg
                className="svg-icon-trash"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="DeleteIcon"
              >
                <path
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0
                    2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                />

              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FilterField;
