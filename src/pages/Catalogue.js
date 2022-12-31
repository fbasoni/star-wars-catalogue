import '../pages/Catalogue.css';

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { getFilms } from '../data/data';
import { useState, useEffect } from 'react';

const Catalogue = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      console.log(films.results);

      setFilms(films.results);
    });
  }, []);

  return (
    <>
      <section className="catalogue">
        <div className="header">
          <Header></Header>
        </div>
        <div className="cards">
          {films.map((film) => (
            <Card key={film.episode_id}>{film}</Card>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Catalogue;
