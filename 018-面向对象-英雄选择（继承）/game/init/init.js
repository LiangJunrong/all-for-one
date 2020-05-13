import Player from '../player/index.js';

class InitGame {
  constructor(defaultHero) {
    this.player = null;
    this.defaultHero = defaultHero;
  }
  login(name) {
    this.player = new Player(name);
  }
}

export default InitGame;