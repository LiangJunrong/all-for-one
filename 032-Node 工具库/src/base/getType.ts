/**
 * @name getType
 * @description 获取类型
 * @param {string|object} param 传入的变量
 */
export const getType = (param: string): string => {
  return Object.prototype.toString.call(param).slice(8, -1);
};