export const getFilms = async () => {
  const url = 'https://swapi.dev/api/films/';
  
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
