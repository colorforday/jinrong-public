<template>
  <div>
    <van-nav-bar :title="title" class="tt">
      <!--左功能-->
      <van-icon v-if="ltype=='back'" name="arrow-left" size="20px" color="#666" slot="left"/>
      <van-icon v-if="ltype=='user'" name="user-o" size="20px" color="#666" slot="left"/>
      <!--右功能-->
      <van-icon v-if="rtype=='share'" name="share" size="20px" color="#666" slot="right"/>
      <van-icon v-if="rtype=='gift'" name="point-gift-o" size="20px" color="#666" slot="right"/>
    </van-nav-bar>
  </div>
</template>

<script>
  import {NavBar, Icon} from 'vant';

  export default {
    name: "TopHeader",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
    },
    props: {
      title: '',
      ltype: '',
      rtype: '',
      name: '',
    },
  }
</script>

<style scoped>

</style>
