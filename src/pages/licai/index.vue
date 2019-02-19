<template>
  <div>
    <TopHeader :title="headInfo.title" :ltype="headInfo.ltype" :rtype="headInfo.rtype" :name="$route.name"></TopHeader>

    <div>理财</div>

    <Menus :current="1"></Menus>
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
          title: '理财',
          ltype: 'user',
          rtype: 'gift',
        },
      }
    },
  }
</script>

<style scoped>

</style>
