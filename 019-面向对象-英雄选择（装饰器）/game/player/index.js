import LengWushuang from '../heros/lengwushuang.js';
import Anni from '../heros/anni.js';
import JianHanqiu from '../heros/jianhanqiu.js';

class Player {
  constructor(name) {
    this.name = name;
    this.heros = [new LengWushuang, new Anni, new JianHanqiu];
  }
}

export default Player;