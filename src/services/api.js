const fetchApi = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
  return result.json();
};
export default fetchApi;
