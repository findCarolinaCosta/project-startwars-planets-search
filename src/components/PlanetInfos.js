import React, { useContext } from 'react';
import { Context } from '../Context/PlanetsProvider';
import TableRows from './TableRows';

function PlanetInfos() {
  const { data, filterByName, isFiltered } = useContext(Context);
  const maxDecimalPlaces = 9;

  return (
    <tbody>
      {isFiltered ? data.results && data.results
        .filter((planet) => planet.name.includes(filterByName))
        .map((planetFiltered) => (
          <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
            <TableRows planet={ planetFiltered } />
          </tr>
        )) : data.results && data.results
        .map((planet) => (
          <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
            <TableRows planet={ planet } />
          </tr>
        ))}
    </tbody>
  );
}

export default PlanetInfos;
