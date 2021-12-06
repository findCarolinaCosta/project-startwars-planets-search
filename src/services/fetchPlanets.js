export default function fetchPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(URL)
    .then((response) => (
      response
        .json()
        .then((data) => (response.ok
          ? Promise.resolve(data) : Promise.reject(data)))
    ));
}
