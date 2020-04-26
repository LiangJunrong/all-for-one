import S16610 from '../skills/S16610.js';
import S16620 from '../skills/S16620.js';
import S16630 from '../skills/S16630.js';
import Hero from './hero.js';
export default class Yase extends Hero{
    constructor(){
        super("亚瑟",10000,"./sources/heros/yase1.png",[new S16610,new S16620,new S16630],[]);
        // this.name = "亚瑟";
        // this.blood = 10000;
        // this.ico = "./sources/heros/yase1.png";
        // this.skills = [new S16610,new S16620,new S16630];
        // this.skins = [];
    }
}