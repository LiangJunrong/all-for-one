export default class Dialog extends EventTarget{
    constructor(options) {
        super();
        // 合并配置；
        // let {width="40%",height="300px",title="测试标题"} = options;
        // 默认配置；
        let obj = {
            width: "30%",
            height: "200px",
            title: "测试标题",
            content: "测试内容",
            dragable: true, //是否可拖拽
            maskable: true, //是否有遮罩
            isCancel: false, //是否有取消
            cancel(){},
            success(){}
        }
        this.opts = Object.assign(obj, options);
        //   console.log(opts);
        this.createHtml();
        this.init();
    }
    init() {
        // 绑定拖拽
        if(this.opts.dragable){
            this.dragable();
        }
        // 绑定事件；
        // this.divEle.querySelector(".k-close").onclick = ()=>{
        //     this.divEle.style.display = "none";
        // }
        // this.divEle.querySelector(".k-default") && (this.divEle.querySelector(".k-default").onclick = ()=>{
        //     this.divEle.style.display = "none";
        // })
        // 绑定自定义事件
        this.addEventListener("success",this.opts.success);

        // 事件委托；
        let kDialog = this.divEle.querySelector(".k-dialog")
        kDialog.addEventListener("click", e => {
            // console.log(e.target);
            switch (e.target.className) {
                case 'k-close':
                    this.opts.cancel();
                    this.close();
                    break;
                case 'k-primary':
                    this.confirm();
                    break;
                case 'k-default':
                    this.opts.cancel();
                    this.close();
                    break;
                default:
                    console.log("无事件")
                    break;
            }
        })
    }
    confirm(value){
        // console.log(value);
        // this.opts.success(value);
        // 触发事件；
        console.log("some value..")
        let success = new CustomEvent("success",{
            detail:value
        });
        this.dispatchEvent(success);
        // trigger
        this.close();
    }

    // 关闭对话框；
    close(){
        this.divEle.style.display = "none";
    }
    // 生成dom
    createHtml() {
        let divEle = document.createElement("div");
        divEle.classList.add("container");
        divEle.style.display = "none";
        divEle.innerHTML = `<div class="k-wrapper"></div>
        <div class="k-dialog" style="width:${this.opts.width};height:${this.opts.height}">
            <div class="k-header">
                <span class="k-title">${this.opts.title}</span><span class="k-close">X</span>
            </div>
            <div class="k-body">
                <span>${this.opts.content}</span>
            </div>
            <div class="k-footer">
                ${this.opts.isCancel ? '<span class="k-default">取消</span>' : ''}
                <span class="k-primary">确定</span>
            </div>
        </div>`;
        this.divEle = divEle;
        document.querySelector("body").appendChild(divEle);
    }
    // 显示对话框；
    open() {
        // 控制是否有遮罩层；
        if (!this.opts.maskable) {
            this.divEle.querySelector(".k-wrapper").style.display = "none";
        }
        this.divEle.style.display = "block";
    }
    // 拖拽；
    dragable(){
        let header = this.divEle.querySelector(".k-header");
        let kDialog = this.divEle.querySelector(".k-dialog")
        header.onmousedown = function(e){
            let x = e.clientX - kDialog.offsetLeft;
            let y = e.clientY - kDialog.offsetTop;
            console.log(x,y);
            header.onmousemove = function(e){
                let xx = e.clientX;
                let yy = e.clientY;
                kDialog.style.left = xx - x + "px";
                kDialog.style.top = yy - y + "px";
            }
        }
        document.onmouseup = function(){
            header.onmousemove = "";
        }
    }
}

// 继承扩展功能；
export class DialogExtends extends Dialog{
    constructor(options){
        super(options);
        this.createInput();
    }
    createInput(){
        let input = document.createElement("input");
        input.type = "text";
        input.classList.add("input-inner");
        this.input = input;
        this.divEle.querySelector(".k-body").appendChild(input);
    }
    confirm(){
        // 获取值；
        let value = this.input.value;
        super.confirm(value);
        console.log("子类的confirm")
    }
}

class MyDialog extends HTMLElement{
    constructor(){
        super();
        // console.log(this);
        let attrs = this.attributes;
        let width = attrs['width'].value;
        let height =this.hasAttribute('height')?attrs['height'].value:'250px';
        let title = attrs['title'].value;
        let content = attrs['content'].value;
        this.innerHTML = `<button>点击显示对话框</button>`;
        // console.log(width);
        this.onclick = function(){
            let dialog = new Dialog({
                width,
                height,
                title,
                content
            });
            dialog.open();
        }
        
    }
}

customElements.define("my-dialog",MyDialog);
