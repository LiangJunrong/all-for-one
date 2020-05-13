import Skill1 from '../skills/skill1.js';
import Hero from './Hero.js';

class LengWushuang extends Hero {
  constructor() {
    super(
      '冷无双',
      5000,
      '../../images/choose1.png',
      '../../images/hero1.png',
      '体迅飞凫，飘忽若神，凌波微步，罗袜生尘。传眄流精，光润玉颜。含辞未吐，气若幽兰。华容婀娜，令我忘餐。',
      [new Skill1('飞天')],
    );
  }
}

export default LengWushuang;