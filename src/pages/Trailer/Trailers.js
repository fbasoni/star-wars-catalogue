import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import '../Trailer/Trailer.css';

const Trailers = () => {
  return (
    <>
      <section className="catalogue">
        <div className="header">
          <Header></Header>
        </div>
        <div className="trailer-cards">
          <div className="single-card">
            <p className="movieTitle">A New Hope</p>
            <YoutubeEmbed embedId="vZ734NWnAHA" />
          </div>
          <div className="single-card">
            <p className="movieTitle">The Empire Strikes Back</p>
            <YoutubeEmbed embedId="JNwNXF9Y6kY" />
          </div>
          <div className="single-card">
            <p className="movieTitle">Return of the Jedi</p>
            <YoutubeEmbed embedId="7L8p7_SLzvU" />
          </div>
          <div className="single-card">
            <p className="movieTitle">The Phantom Menace</p>
            <YoutubeEmbed embedId="bD7bpG-zDJQ" />
          </div>
          <div className="single-card">
            <p className="movieTitle">Attack of the Clones</p>
            <YoutubeEmbed embedId="gYbW1F_c9eM" />
          </div>
          <div className="single-card">
            <p className="movieTitle">Return of the Sith</p>
            <YoutubeEmbed embedId="5UnjrG_N8hU" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Trailers;
