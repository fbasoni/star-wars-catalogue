import './Films.css';

import Card from '../../components/Card/Films/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

import { getFilms } from '../../data/data';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Films = () => {
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
            <Card key={film.episode_id} onClick={handleOnClick}>
              {film}
            </Card>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Films;
