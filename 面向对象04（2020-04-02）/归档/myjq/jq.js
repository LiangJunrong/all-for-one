class Jq{
    constructor(arg,root){
        if(!root){
            this['preObject'] = [document];
        }else{
            this['preObject'] = root;
        }
        if(typeof arg ==="string"){
            // 字符串
            let eles = document.querySelectorAll(arg);
            this.addEles(eles);
        }else if (typeof arg === 'function'){
            // 函数
            window.addEventListener("DOMContentLoaded",arg);
        }else{
            // 对象；
            // 1个或者是多个；
            if(typeof arg.length === 'undefined'){
                // 1个对象
                this[0] = arg;
                this.length = 1;
            }else{
                // 多个；
                this.addEles(arg);
            }
        }
        // console.log(this);
    }
    addEles(eles){
        for(let i=0;i<eles.length;i++){
            this[i] = eles[i];
        }
        this.length = eles.length;
    }
    click(fn){
        // console.log("click..");
        for(let i=0;i<this.length;i++){
            // console.log(1111);
            this[i].addEventListener("click",fn)
        }
    }
    on(evnetName,fn){
        // "mousemove   mousedown  mouseover"
        let reg = /\s+/g;
        evnetName = evnetName.replace(reg," ");
        // console.log(evnetName);
        let eventArr = evnetName.split(" ");
        // 针对每个节点绑定每个事件；
        for(let i=0;i<this.length;i++){
            for(let j=0;j<eventArr.length;j++){
                this[i].addEventListener(eventArr[j],fn);
            }
        }
    }
    eq(index){
        // console.log(this[index]);
        // return this[index];
        // return this
        return new Jq(this[index],this);
    }
    get(index){
        return this[index];
    }
    end(){
        return new Jq(this.preObject);
    }
    css(...arg){
        // 不定参；
        // console.log(arguments);
        if(arg.length===1){
            if(typeof arg[0]=== 'string'){
                 // 1.字符串
                if(arg[0] in $.cssHooks){
                    $.cssHooks[arg[0]].get(this[0]);
                }

                 // 获取样式
              return this.getStyle(this[0],arg[0]);
            }else{
                // 2.对象；设置样式
                // 循环节点
                for(let i=0;i<this.length;i++){
                    // 循环样式对象；
                    for(let j in arg[0]){
                        this.setStyle(this[i],j,arg[0][j]);
                    }
                } 
            }
        }else{
            // 传入2个参数：设置样式；
            for(let i=0;i<this.length;i++){
                this.setStyle(this[i],arg[0],arg[1]);
            }
        }
    }
    getStyle(ele,styleName){
        // return ele.style[styleName];
        return getComputedStyle(ele,null)[styleName];
    }
    setStyle(ele,styleName,styleValue){
        if(typeof styleValue === 'number' && !(styleName in $.cssNumber)){
            styleValue = styleValue + "px";
        }
        if(styleName in $.cssHooks){
            $.cssHooks[styleName].set(ele,styleValue);
        }else{
            ele.style[styleName] = styleValue;
        }
    }
}

// new --> 对象；
// function $(arg){
//     return {
//         click(fn){
//             document.querySelector(arg).onclick = function(){
//                 fn();
//             }
//         }
//     }
// }

function $(arg){
    return new Jq(arg);
}
$.cssNumber = {
    animationIterationCount: true,
    columnCount: true,
    fillOpacity: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true,
    zoom: true
}
$.cssHooks = {}

