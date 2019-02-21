<template>
  <div>
    <TopHeader :title="headInfo.title" :ltype="headInfo.ltype" :rtype="headInfo.rtype" :name="$route.name"></TopHeader>
    <!--下拉加载-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--信息展示-->
      <FocusShow :info="focusInfo" class="bg-white"></FocusShow>
      <!--导航-->
      <Nav :info="navInfo" class="mb10"></Nav>
      <!--轮播-->
      <Swiper :list="imgLists" class="bg-white mb10 pt10 pb10"></Swiper>
      <!--借还记录-->
      <van-cell title="借还记录" is-link class="mb10"/>

      <div v-for="(item,index) in dkLists" :key="index">
        <DaikuanBox :info="item" class="bg-white mb10"></DaikuanBox>
      </div>

      <div class="mb60"></div>

    </van-pull-refresh>

    <Menus :current="2"></Menus>
  </div>
</template>

<script>
  import {NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, PullRefresh, Cell, CellGroup} from 'vant';
  import TopHeader from '../../components/topHeader';
  import FocusShow from '../../components/focusShow';
  import Nav from '../../components/navbar';
  import Swiper from '../../components/swiper';
  import Menus from '../../components/menus';
  import DaikuanBox from '../../components/daikuanBox';

  export default {
    name: "index",
    components: {
      [NavBar.name]: NavBar,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [PullRefresh.name]: PullRefresh,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      TopHeader,
      FocusShow,
      Nav,
      Swiper,
      Menus,
      DaikuanBox,
    },
    data() {
      return {
        headInfo: {
          title: '贷款',
          ltype: 'user',
          rtype: 'gift',
        },
        focusInfo: '贷款展示',
        navInfo: [
          {name: '邀请有礼', icon: '', path: ''},
          {name: '我的红包', icon: '', path: ''},
          {name: '优惠券', icon: '', path: ''},
          {name: '到店付', icon: '', path: ''},
          {name: '话费充值', icon: '', path: ''},
          {name: '小米商城', icon: '', path: ''},
          {name: '小米有品', icon: '', path: ''},
        ],
        imgLists: [
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        ],
        dkLists: [
          {
            title: '小米分期商城',
            more: true,
            limit: 2,
            list: [
              {percent: '4.8%', headText: '随心存399天', desc: '银行产品本金保障'},
              {percent: '4.8%', headText: '随心存399天', desc: '银行产品本金保障'},
              {percent: '4.8%', headText: '随心存399天', desc: '银行产品本金保障'},
              {percent: '4.8%', headText: '随心存399天', desc: '银行产品本金保障'},
              {percent: '4.8%', headText: '随心存399天', desc: '银行产品本金保障'},
            ]
          },
        ],
        count: 0,
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
          console.log(this.count);
        }, 500);
      },
    },
  }
</script>

<style scoped>

</style>
