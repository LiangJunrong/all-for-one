import Yase from './heros/yase.js';
import Luban from './heros/luban.js'

export default class Player{
    constructor(name){
        this.name = name;
        this.heros = [new Yase,new Luban];
    }
}