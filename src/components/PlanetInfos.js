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

  if (filtered === 'Name') {
    return (
      <tbody>
        {data.results && data.results
          .filter((planet) => planet.name.includes(filterByName))
          .map((planetFilteredByName) => (
            <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
              <TableRows planet={ planetFilteredByName } />
            </tr>
          ))}
      </tbody>
    );
  }

  if (filtered === 'Select') {
    return (
      <tbody>
        {data.results && data.results
          .filter((planet) => getFilterByNumericValues(planet, filterByNumericValues))
          .map((planetFilterByNumeric) => (
            <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
              <TableRows planet={ planetFilterByNumeric } />
            </tr>
          ))}
      </tbody>
    );
  }

  return (
    <tbody>
      {data.results && data.results
        .map((planet) => (
          <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
            <TableRows planet={ planet } />
          </tr>
        ))}
    </tbody>
  );
}

export default PlanetInfos;
