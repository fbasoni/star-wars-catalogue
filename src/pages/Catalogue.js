import '../pages/Catalogue.css';

import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { getFilms } from '../data/data';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Catalogue = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      console.log(films.results);

      setFilms(films.results);
    });
  }, []);

  const handleOnClick = () => {
    navigate('/trailers')
  }


  return (
    <>
      <section className="catalogue">
        <div className="header">
          <Header></Header>
        </div>
        <div className="cards">
          {films.map((film) => (
            <Card key={film.episode_id} onClick={handleOnClick}>{film}</Card>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Catalogue;
