<template>
  <div>
    <van-tabbar v-model="active" @change="change()" class="menus">
      <van-tabbar-item :icon="active==0?'gem':'gem-o'">首页</van-tabbar-item>
      <van-tabbar-item :icon="active==1?'shopping-cart':'shopping-cart-o'">理财</van-tabbar-item>
      <van-tabbar-item :icon="active==2?'goods-collect':'goods-collect-o'">贷款</van-tabbar-item>
      <van-tabbar-item :icon="active==3?'friends':'friends-o'">保险</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Icon } from 'vant';
  export default {
    name: "menus",
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [Icon.name]: Icon,
    },
    props:{
      current:{
        default: 0
      }
    },
    data() {
      return {
        active: this.current,
      }
    },
    methods: {
      change() {
        console.log(this.active);
        var topage = '/index';
        if(Number(this.active)==0) topage = '/index';
        if(Number(this.active)==1) topage = '/licai';
        if(Number(this.active)==2) topage = '/daikuan';
        if(Number(this.active)==3) topage = '/baoxian';
        this.$router.push(topage);
      },
    },
  }
</script>

<style scoped>
.menus{
  background: #fff;
  border-top:2px #333 solid;
}
</style>
