export default class GameEvent{
    constructor(){
        this.handle = {}
    }
    // 绑定；
     addEvent(evnetName,fn){
        if(typeof this.handle[evnetName] === "undefined"){
            this.handle[evnetName] = [];
        }
        this.handle[evnetName].push(fn);
    }
    // 触发；
     trigger(evnetName){
        if(!evnetName in this.handle){
            return ;
        }
        this.handle[evnetName].forEach(event=>{
            event();
        })
    }
    // 移除自定义事件；
}

// 练习：自定义事件移除removeEvent