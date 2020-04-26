// export default class Person {
//     static instance = null;
//     constructor(name){
//         if(Person.instance){
//             return Person.instance;
//         }
//         // 第一次实例化
//         Person.instance = this; //this--》实例化对象；
//         this.name = name;
//         this.age = 20;
//     }
// }

class Person{
    constructor(name){
        this.name = name;
        this.age = 20;
    }
}

let instance;
// export default instance;
export default function(...arg){
    if(!instance){
        instance = new Person(...arg);
    }
    return instance;
}


