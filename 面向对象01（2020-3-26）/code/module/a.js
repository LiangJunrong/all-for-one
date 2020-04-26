// 导出 2种；
// 导出多个
export let a = 10;   // {}
export let b = 20;
// 导出一个；
let obj = {
    name:"张三"
}
// export default obj  // 自定义变量引入；
export {obj as default};