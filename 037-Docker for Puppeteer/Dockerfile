# 官方文档 https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker
# 基于 Alpine Linux 的最小 Docker 图像，具有完整的包索引，大小仅为 5 MB！
FROM alpine:edge

# 指定执行 CMD 的目录，即先 cd 到该目录上
WORKDIR /home/docker/we_render

# 安装最新版 Chromium(89) 的包
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

# 跳过自动安装 Chrome 包. 使用上面已经安装的 Chrome
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Puppeteer v6.0.0 配套 Chromium 89
RUN yarn add puppeteer@6.0.0

# 拷贝宿主机的文件到容器中的 we_render 目录
COPY . /home/docker/we_render

# 通过 yarn 设置淘宝源和装包，并清除缓存
RUN yarn config set registry 'https://registry.npm.taobao.org' && \
    yarn global add pm2 && \
    yarn install && \
    yarn cache clean

# 声明容器提供的服务端口
EXPOSE 9527

# 容器主进程的启动命令
CMD ["yarn", "run", "robot"]
