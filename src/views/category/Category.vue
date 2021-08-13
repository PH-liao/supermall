<template>
<div>
  <nav-bar class="title"><div slot="center">商品分类无数据</div></nav-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: 'Category',
  components:{
    NavBar
  }
 }
</script>

<style scoped>
.title{
    background-color: var(--color-tint);
  color: #fff;
}
</style>