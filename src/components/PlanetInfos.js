import React, { useContext } from 'react';
import { Context } from '../Context/PlanetsProvider';

function PlanetInfos() {
  const context = useContext(Context);
  const { data } = context;
  const maxDecimalPlaces = 9;

  return (
    <tbody>
      { data.results && data.results.map((planet) => (
        <tr key={ Math.random().toString().substr(2, maxDecimalPlaces) }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>
      ))}
    </tbody>
  );
}

export default PlanetInfos;
