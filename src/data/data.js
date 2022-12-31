export const getFilms = async () => {
  const url = 'https://swapi.dev/api/films/';
  
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    }).catch(err => console.log(err));
};
