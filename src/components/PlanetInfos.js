import React, { useContext } from 'react';
import { Context } from '../Context/PlanetsProvider';
import getFilterByNumericValues from '../helpers/getFilterByNumericValues';
import TableRows from './TableRows';

function PlanetInfos() {
  const {
    data,
    filterByName,
    filtered,
    filterByNumericValues,
  } = useContext(Context);
  const maxDecimalPlaces = 9;

  return (
    <tbody>
      {(data.results && !filtered && filterByName === '') ? (
        data.results
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
