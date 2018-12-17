
  import './main.css';
  import Fireworks from 'fireworks-canvas';
 
  export default () => {
    const container = document.getElementById('container');
    const fireworks = new Fireworks(container);
    fireworks.start();
  };

  const options = {
    maxRockets: 50,            // max # of rockets to spawn
    rocketSpawnInterval: 50, // millisends to check if new rockets should spawn
    numParticles: 50,        // number of particles to spawn when rocket explodes (+0-10)
    explosionMinHeight: 0.2,  // percentage. min height at which rockets can explode
    explosionMaxHeight: 0.9,  // percentage. max height before a particle is exploded
    explosionChance: 0.08     // chance in each tick the rocket will explode
  }

  const fireworks = new Fireworks(container, options)
  const stop = fireworks.start()