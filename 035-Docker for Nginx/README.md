Docker for Nginx
===

> Create by **jsliang** on **2022-03-01 21:08:52**  
> Recently revised in **2022-03-01 22:30:23**

项目说明地址：https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E5%89%8D%E7%AB%AF%E8%B5%84%E6%96%99/Node/Node%20%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2

## 指令汇总

* 创建镜像（Image）：`docker image build ./ -t docker-nginx:1.0.0`
* 创建容器（Container）：`docker container create -p 2222:80 docker-nginx:1.0.0`
* 运行容器（Container）：`docker container start fdbe3876310aaddc1b6d5ca5bdee96c3332e4351cf7ea56e6abc642035464107`
* 查看结果：`localhost:2222/index.html`
* 查看容器（Container）：`docker ps -a`
* 删除容器（Container）：`docker rm -f fdbe3876310a`
* 查看镜像（Image）：`docker image ls`
* 删除镜像（Image）：`docker rmi 4c5e43ba3166`

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习横杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
