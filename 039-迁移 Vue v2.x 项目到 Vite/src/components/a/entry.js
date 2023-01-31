import A from './a.vue';

(function() {
  console.log('jsliang 插件加载成功');

  window.jsliang && window.jsliang.addPlugin && window.jsliang.addPlugin({
    pluginName: 'jsliang',
    pluginObj: A.methods.renderDOM,
  });
})();
