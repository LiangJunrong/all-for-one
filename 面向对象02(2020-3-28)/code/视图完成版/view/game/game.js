import Player from './player.js'
class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);
        // 触发hero里的init函数；
        this.player.heros[0].trigger("init");
    }
}


let instance;
// export default instance;
export default function(...arg){
    if(!instance){
        instance = new Game(...arg);
    }
    return instance;
}