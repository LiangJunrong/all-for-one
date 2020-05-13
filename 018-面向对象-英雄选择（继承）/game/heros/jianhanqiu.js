import Skill3 from '../skills/skill3.js';
import Hero from './Hero.js';

class JianHanqiu extends Hero {
  constructor() {
    super(
      '剑寒秋',
      10000,
      '../../images/choose3.png',
      '../../images/hero3.png',
      '优雅，高傲而镇定，仿佛一切尽在他的掌握之中，他甚至看除了像贵族一样的叶无道的嘴角笑意的轻蔑、不屑，还有不可一世的自负！那一刻，他的脑海深深烙印下叶无道的形象--像那古代皇族王裔，高高在上！',
      [new Skill3('剑道无双')],
    );
  }
}

export default JianHanqiu;