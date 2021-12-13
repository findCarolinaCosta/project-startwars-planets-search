export default async function fetchPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(URL);
    const { results } = await response.json();
    return response.ok ? Promise.resolve(results) : Promise.reject(results);
  } catch (e) {
    console.log(e);
  }
}
