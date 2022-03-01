Docker for Node.js
===

> Create by **jsliang** on **2022-03-01 12:53:30**  
> Recently revised in **2022-03-01 22:32:29**

## 一、开发环境

* 装包：`npm i`
* 启动服务：`npm run robot`

## 二、部署上线

* 创建镜像（Image）：`docker image build ./ -t docker-node:1.0.0`
* 创建容器（Container）且退出后容器直接删除：`docker run -it --rm docker-node:1.0.0`
* 创建容器（Container）：`docker container create -p 3333:80 docker-node:1.0.0`
* 启动容器（Container）：`docker container start dd420fc4267ad3bdb9eadfdbf37d89e2592dbc9d030a501b96fe10b07ac565ff`
  * 注：如果不能起来，则通过 `docker ps -a` 查看到 `CONTAINER ID`，再通过 `docker restart CONTAINER ID` 起服务
* 查看容器（Container）运行情况：`docker ps -a`
* 查看容器（Container）的日志：`docker logs -f dd420fc4267a`
* 进入容器（Container）：`docker exec -it dd420fc4267a bash`
* 查看 README.md 文件：`cat -n README.md`
* 退出容器（Container）：`exit`

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习横杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
