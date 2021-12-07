export default async function fetchPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return response.ok ? Promise.resolve(data) : Promise.reject(data);
  } catch (e) {
    console.log(e);
  }
}
