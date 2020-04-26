import Player from './player.js'
export default class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);
    }
}