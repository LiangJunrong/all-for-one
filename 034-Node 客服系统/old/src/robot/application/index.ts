import express from 'express';

// 启动 Express 服务
export const runExpress = () => {
  const app = express();
  const PORT = 3000;
  app.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
    // URL：支持 http 和 https 协议，接收 WOA 推送请求的访问协议和地址
    res.send('Hello World！');
  });
  app.listen(PORT, () => {
    console.log(`Express 服务启动，端口 ${PORT}`);
  });
};
