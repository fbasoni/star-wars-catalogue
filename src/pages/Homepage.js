import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import '../pages/Homepage.css';
import logo from '../assets/logo.png';

const Homepage = () => {
    const loadCatalogue = () => {
      window.location = '/Catalogue';
      console.log('clicked')
    }


   const particlesInit = async (main) => {
     console.log(main);
     await loadFull(main);
   };
   const particlesLoaded = (container) => {
     console.log(container);
   };

  return (
    <section className="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 40,
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 500,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 3.5,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1,
            },
          },
        }}
      />
      <div onClick={loadCatalogue}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </section>
  );
}

export default Homepage;
