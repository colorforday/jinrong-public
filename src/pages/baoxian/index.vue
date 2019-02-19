<template>
  <div>
    <TopHeader :title="headInfo.title" :ltype="headInfo.ltype" :rtype="headInfo.rtype" :name="$route.name"></TopHeader>

    <div>保险</div>

    <Menus :current="3"></Menus>
  </div>
</template>

<script>
  import {NavBar} from 'vant';
  import TopHeader from '../../components/topHeader';
  import Menus from '../../components/menus';

  export default {
    name: "index",
    components: {
      [NavBar.name]: NavBar,
      Menus,
      TopHeader,
    },
    data() {
      return {
        headInfo: {
          title: '保险',
          ltype: 'user',
          rtype: 'gift',
        },
      }
    },
  }
</script>

<style scoped>

</style>
