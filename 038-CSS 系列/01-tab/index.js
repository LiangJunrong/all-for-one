window.onload = () => {
  /**
   * @name 移动切换活跃态
   * 1、获取所有元素
   * 2、移除上一个元素的 active class
   * 3、添加当前 hover 元素的 active class
   * 4、切换滑动门的 left 位置
  */
  // 上一个元素索引
  let activeTabIndex = 0;
  // 所有目录项
  const tabItems = document.querySelectorAll('.tab-item');
  // 滑动门
  const tabActive = document.querySelector('.tab-active');
  tabItems.forEach((item, index) => {
    item.onmouseover = (e) => {
      tabItems[activeTabIndex].classList.remove('active');
      e.target.classList.add('active');
      // 切换活跃元素索引
      activeTabIndex = index;
      // 切换 left 以作滑动门
      tabActive.style.left = `${index * 110}px`;
    };
  });
};