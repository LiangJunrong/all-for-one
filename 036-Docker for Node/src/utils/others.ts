/**
 * @name 获取参数类型
 * @description 获取类型
 * @param param 传入的变量
 * @return Function|Number|String|Boolean
 */
export const getType = (param: any): string => {
  return Object.prototype.toString.call(param).slice(8, -1);
};

/**
 * @name 失败重试
 * @param cbFunc 回调方法
 * @param times 重试次数
 * @param delay 重试间隔时间
 */
export const retryAgain = (cbFunc: any, times: number, delay: number) => {
  return new Promise((resolve, reject) => {
    const success = () => {
      cbFunc().then(resolve).catch((error: any) => {
        console.log(`失败了！方法 ${cbFunc.name} 还有 ${times} 次尝试`);
        console.error(error);
        if (!times) {
          reject(error);
        } else {
          times--;
          setTimeout(() => {
            success();
          }, delay);
        }
      });
    };
    success();
  });
};
