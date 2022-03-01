# 本镜像拷贝自 Node v14 版本
FROM node:14

# 指定执行 CMD 的目录，即先 cd 到该目录上
WORKDIR /usr/src/app

# 拷贝宿主机（当前运行终端的位置）的文件到容器中的 app 目录中
COPY . .

# 安装 npm 包
RUN npm install

# 对外暴露本镜像的 80 端口
EXPOSE 80

# 启动 Node 服务
CMD ["npm", "run", "robot"];