import '../pages/Film.css';

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { getFilms } from '../data/data';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Film = () => {
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      films.forEach(console.log(films.results.title))

      setFilmDetails(films.results);
    });
  }, []);

  const handleOnClick = () => {
    navigate("/Film");
  };

  return (
    <>
      <section className="catalogue">
        <div className="header">
          <Header></Header>
        </div>
        <div className="cards">
          {filmDetails.map((film) => (
            <Card key={film.episode_id} onClick={handleOnClick}>
              {film}
            </Card>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Film