class Dialog extends EventTarget {
  constructor(obj) {
    super();
    // 默认配置
    const defaultOptions = {
      width: '40%',
      height: '300px',
      title: '弹窗标题',
      content: '弹窗内容',
      dragable: true, // 是否可拖拽
      maskable: true, // 是否有遮罩
      isCancel: true, // 是否有取消
      success: () => {
        console.log('点击成功');
      },
      cancel: () => {
        console.log('点击取消');
      },
      close: () => {
        console.log('点击关闭');
      }
    }
    // 合并配置，并将其挂载到 this 上
    this.options = Object.assign(defaultOptions, obj);

    // 执行命令
    this.createDOM();
    this.init();

    // 查看 this 内容
    console.log(this);
  }

  // 初始化
  init() {
    // 拖拽
    if (this.options.dragable) {
      this.dragable();
      this.divElement.querySelector('.modal-header').style.cursor = 'pointer';
    } else {
      this.divElement.querySelector('.modal-header').style.cursor = 'default';
    }

    // 通过 EventTarget 绑定成功事件
    this.addEventListener('success', this.options.success);

    // 事件委托
    const modalDialog = this.divElement.querySelector('.modal-dialog');
    modalDialog.addEventListener('click', (e) => {
      console.log('你点击了：', e.target.className);
      switch(e.target.className) {
        case 'modal-close':
          this.close();
          this.options.close();
          break;
        case 'modal-default':
          this.close();
          this.options.cancel();
          break;
        case 'modal-primary':
          this.confirm();
          break;
        default:
          console.log('无事件');
          break;
      }
    });
  }

  confirm(value) {
    this.close();

    // 原本可以通过直接回调，但是可以用 EventTarget 委托对象
    // this.options.success();
    const success = new CustomEvent('success', {
      detail: value,
    });
    this.dispatchEvent(success);
  }

  // 关闭对话框
  close() {
    this.divElement.style.display = 'none'
  }

  // 生成 DOM 结构
  createDOM() {
    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.style.display = 'none';
    divElement.innerHTML = `
      <div class="modal-wrapper"></div>
      <div
        class="modal-dialog"
        style="width: ${this.options.width}; height: ${this.options.height}"
      >
        <div class="modal-header">
          <span class="modal-title">${this.options.title}</span>
          <span class="modal-close">X</span>
        </div>
        <div class="modal-body">
          <span>${this.options.content}</span>
        </div>
        <div class="modal-footer">
          ${this.options.isCancel ? '<span class="modal-default">取消</span>' : ''}
          <span class="modal-primary">确定</span>
        </div>
      </div>
    `;
    // 挂载到 this 上
    this.divElement = divElement;
    // 渲染到 body
    document.querySelector('body').appendChild(divElement);
  }

  // 拖拽
  dragable() {
    const modalHeader = this.divElement.querySelector('.modal-header');
    const modalDialog = this.divElement.querySelector('.modal-dialog');
    modalHeader.onmousedown = (e) => {
      const x = e.clientX - modalDialog.offsetLeft;
      const y = e.clientY - modalDialog.offsetTop;
      console.log(x, y);
      modalHeader.onmousemove = (e) => {
        const xx = e.clientX;
        const yy = e.clientY;
        modalDialog.style.left = xx - x + 'px';
        modalDialog.style.top = yy - y + 'px';
      }
    }
    document.onmouseup = () => {
      modalHeader.onmousemove = '';
    }
  }

  // 显示对话框：给外部使用
  openDialog() {
    // 是否有遮罩层
    if (!this.options.maskable) {
      this.divElement.querySelector('.modal-wrapper').style.display = 'none';
    }
    this.divElement.style.display = 'block';
  }
}

// 继承拓展功能
export class DialogInput extends Dialog {
  constructor(options) {
    super(options);
    this.createInput();
  }

  createInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('input-inner');
    this.divElement.querySelector('.modal-body').appendChild(input);

    this.input = input;
  }

  confirm() {
    const value = this.input.value;
    super.confirm(value);
  }
}

// 自定义弹窗
class MyDialog extends HTMLElement {
  constructor() {
    super();
    const attrs = this.attributes;
    const width = this.hasAttribute('width') ? attrs['width'].value : '500px';
    const title = this.hasAttribute('title') ? attrs['title'].value : 'jsliang';
    const content = this.hasAttribute('content') ? attrs['content'].value : 'jsliang';
    this.onclick = () => {
      const dialog = new Dialog({
        width,
        title,
        content,
      });
      dialog.openDialog();
    };
  }
}
customElements.define('my-dialog', MyDialog);

export default Dialog;