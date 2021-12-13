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
      {(data.results && !filtered && filterByName === '' && !order.column) ? (
        data.results
          .sort((prevPlanet, nextPlanet) => prevPlanet
            .name.localeCompare(nextPlanet.name))
          .map((planet) => (
            <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
              <TableRows planet={ planet } />
            </tr>
          ))
      )
        : (
          data.results && data.results
            .filter((planet) => getFilterByNumericValues(planet, filterByNumericValues))
            .filter(({ name }) => (filterByName !== ''
              ? name.includes(filterByName) : true))
            .sort((prevPlanet, nextPlanet) => getSort(prevPlanet, nextPlanet, order))
            .map((planetFilterByNumeric) => (
              <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
                <TableRows planet={ planetFilterByNumeric } />
              </tr>
            ))
        )}
    </tbody>
  );
}

export default PlanetInfos;
