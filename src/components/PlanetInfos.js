import React, { useContext } from 'react';
import { Context } from '../Context/PlanetsProvider';
import getFilterByNumericValues from '../helpers/getFilterByNumericValues';
import getSort from '../helpers/getSort';
import TableRows from './TableRows';

function PlanetInfos() {
  const {
    data,
    filterByName,
    filtered,
    filterByNumericValues,
    order,
  } = useContext(Context);
  const maxDecimalPlaces = 9;

  return (
    <tbody>
      {(!filtered && filterByName === '' && !order.column) ? (
        data
          // ordena como padrão os planetas
          .sort((prevPlanet, nextPlanet) => prevPlanet
            .name.localeCompare(nextPlanet.name))
          // retorna as linhas da tabela
          .map((planet, index) => (
            <tr
              key={ Math.random().toString().substr(2, maxDecimalPlaces) }
              className={ index % 2 === 0 ? 'table-active table__row' : 'table__row' }
            >
              <TableRows planet={ planet } />
            </tr>
          ))
      )
        : (
          data
            // filtra por valores numéricos
            .filter((planet) => getFilterByNumericValues(planet, filterByNumericValues))
            // filtra pelo nome
            .filter(({ name }) => (filterByName !== ''
              ? name.includes(filterByName) : true))
            // ordena planetas filtrados ou não
            .sort((prevPlanet, nextPlanet) => getSort(prevPlanet, nextPlanet, order))
            // retorna as linhas da tabela para cada item do array filtrado/ordenado
            .map((planetFilterByNumeric, index) => (
              <tr
                key={ Math.random().toString().substr(2, maxDecimalPlaces) }
                className={ index % 2 === 0 ? 'table-active table__row' : 'table__row' }
              >
                <TableRows planet={ planetFilterByNumeric } />
              </tr>
            ))
        )}
    </tbody>
  );
}

export default PlanetInfos;
