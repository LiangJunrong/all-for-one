<template>
  <div id="container">
    Hello 梁峻荣
  </div>
</template>

<script>
// 引用公共模块 C
import { c } from '../../utils/c';

export default {
  name: 'liangjunrong',
  mounted() {
    c();
  },
  methods: {
    renderDOM: () => {
      const div = document.createElement('div');
      div.innerHTML = 'Hello 梁峻荣';
      return div;
    }
  }
}
</script>

<style scoped>

</style>