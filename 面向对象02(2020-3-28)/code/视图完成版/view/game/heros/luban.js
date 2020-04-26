import S11210 from '../skills/S11210.js';
import S11220 from '../skills/S11220.js';
import S11230 from '../skills/S11230.js';
import Hero from './hero.js';
export default class Luban extends Hero{
    constructor(){
        super("鲁班",7000,"./sources/heros/luban1.png",[new S11210,new S11220,new S11230]);
        // this.name = "鲁班";
        // this.blood = 7000;
        // this.ico = "./sources/heros/luban1.png";
        // this.skills = [new S11210,new S11220,new S11230];
    }
}