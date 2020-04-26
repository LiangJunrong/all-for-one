// 英雄基类；
import GameEvent from '../gameEvent.js'
export default class Hero extends GameEvent{
    constructor(name="",blood=10000,ico="",skills=[],skins=[]){
        super();
        this.name = name;
        this.blood = blood;
        this.ico = ico;
        this.skills = skills;
        this.skins = skins;
        // 绑定事件
        this.addEvent("init",this.init)
    }
    fire(key){  //  在fire基础上扩展 （装饰器）
        // console.log(key);
        // this ----> 实例化的hero；
        console.log("释放了："+this.skills[key].name);
    }
    init(){
        console.log("初始化");
    }
    
}