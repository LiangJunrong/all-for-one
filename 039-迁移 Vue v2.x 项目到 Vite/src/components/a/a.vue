<template>
  <div id="container">
    Hello jsliang
  </div>
</template>

<script>
// 引用公共模块 C
import { c } from '../../utils/c';
import { d } from '../../utils/d';

export default {
  name: 'jsliang',
  mounted() {
    c();
    d();
  },
  methods: {
    renderDOM: () => {
      const div = document.createElement('div');
      div.innerHTML = 'Hello jsliang';
      return div;
    }
  }
}
</script>

<style scoped>

</style>