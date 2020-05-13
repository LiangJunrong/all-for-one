import Skill2 from '../skills/skill2.js';
import Hero from './Hero.js';

class Anni extends Hero {
  constructor() {
    super(
      '安妮',
      3000,
      '../../images/choose2.png',
      '../../images/hero2.png',
      '其形也，翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。仿佛兮若轻云之蔽月，飘摇兮若流风之回雪。远而望之，皎若太阳升朝霞；迫而察之，灼若芙蕖出渌波。纤得衷，修短合度。肩若削成，腰如约素。延颈秀项，皓质呈露。芳泽无加，铅华弗御。云髻峨峨，修眉联娟。丹唇外朗，皓齿内鲜，明眸善睐，靥辅承权。环姿艳逸，仪静体闲。柔情绰态，媚于语言。',
      [new Skill2('火焰')],
    );
  }
}

export default Anni;