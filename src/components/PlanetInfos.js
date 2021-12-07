import React, { useContext } from 'react';
import { Context } from '../Context/PlanetsProvider';
import tableRows from './tableRows';

function PlanetInfos() {
  const { data, filterByName, isFiltered } = useContext(Context);
  const maxDecimalPlaces = 9;

  return (
    <tbody>
      { isFiltered ? data.results && data.results
        .filter((planet) => planet.name.includes(filterByName.name))
        .map((planetFiltered) => (
          <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
            {tableRows(planetFiltered)}
          </tr>
        )) : data.results && data.results
        .map((planet) => (
          <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
            {tableRows(planet)}
          </tr>
        ))}
    </tbody>
  );
}

export default PlanetInfos;
