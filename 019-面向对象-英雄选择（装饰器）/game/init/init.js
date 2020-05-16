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

// export default InitGame;

let instance;
export default function(...arg) {
  if (!instance) {
    instance = new InitGame(...arg);
  }
  return instance;
}