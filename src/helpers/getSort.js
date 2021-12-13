export default function getSort(prevPlanet, nextPlanet, order) {
  if (order.sort === 'ASC') {
    return prevPlanet[order.column] - nextPlanet[order.column];
  }
  if (order.sort === 'DESC') {
    return nextPlanet[order.column] - prevPlanet[order.column];
  }
  return prevPlanet.name.localeCompare(nextPlanet.name); // consultei o código do Gabriel Benedicto localeCompare ✔️
}
