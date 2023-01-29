import B from './b.vue';

(function() {
  console.log('梁峻荣插件加载成功');

  window.jsliang && window.jsliang.addPlugin && window.jsliang.addPlugin({
    pluginName: '梁峻荣',
    pluginObj: B.methods.renderDOM,
  });
})();
