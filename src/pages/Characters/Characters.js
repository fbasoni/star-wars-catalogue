import './Characters.css';

import Card from '../../components/Card/Characters/CardC';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

import { getCharacters } from '../../data/data';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Characters = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((people) => {
      console.log(people.results);

      setCharacters(people.results);
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
          {characters.map((character) => (
            <Card key={character.id} onClick={handleOnClick}>
              {character}
            </Card>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Characters;
