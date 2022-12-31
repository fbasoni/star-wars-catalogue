import Card from '../components/Card';
import Header from '../components/Header'
import { getFilms } from '../data/data';
import { useState, useEffect } from 'react';

const Catalogue = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((films) => {
      console.log(films)
      setFilms(films)
    })
  }, [])


  return (
    <section className="catalogue">
      <div className="header">
       <Header></Header>
      </div>
      <div className="cards">
        <Card></Card>
      </div>
    </section>
  );
}

export default Catalogue;
