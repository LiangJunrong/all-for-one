import Player from '../player/index.js';

class InitGame {
  constructor() {
    this.player = null;
  }
  login(name) {
    this.player = new Player(name);
  }
}

export default InitGame;