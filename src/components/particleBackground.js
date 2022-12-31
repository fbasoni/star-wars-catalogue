import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const particleBackground = () => {
    const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };


  return (
    <>
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
                minimumValue: 3.5,
                speed: 65,
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
                minimumValue: 7.5,
              },
              value: 1,
            },
          },
        }}
      />
    </>
  );
}

export default particleBackground;