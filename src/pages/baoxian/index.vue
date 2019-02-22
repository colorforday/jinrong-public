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

      <div v-for="(item,index) in insLists" :key="index">
        <InsuredBox :info="item" class="bg-white mb10"></InsuredBox>
      </div>

      <van-cell title="单元格" is-link size="large" label="描述信息"/>

      <div class="mb60"></div>

    </van-pull-refresh>

    <Menus :current="3"></Menus>
  </div>
</template>

<script>
  import {NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, PullRefresh, Cell, CellGroup} from 'vant';
  import TopHeader from '../../components/topHeader';
  import FocusShow from '../../components/focusShow';
  import Nav from '../../components/navbar';
  import Swiper from '../../components/swiper';
  import Menus from '../../components/menus';
  import InsuredBox from '../../components/insuredBox';

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
      InsuredBox,
    },
    data() {
      return {
        headInfo: {
          title: '保险',
          ltype: 'user',
          rtype: 'gift',
        },
        focusInfo: '保险展示',
        navInfo: [
          {name: '免费保险', icon: '', path: ''},
          {name: '健康险', icon: '', path: ''},
          {name: '意外险', icon: '', path: ''},
          {name: '手机险', icon: '', path: ''},
        ],
        imgLists: [
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        ],
        insLists: [
          {
            title: '小米精选',
            more: false,
            limit: 3,
            list: [
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
            ]
          }, {
            title: '车险',
            more: false,
            limit: 1,
            list: [
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: '立即报价', unit: ''},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
            ]
          }, {
            title: '健康险',
            more: true,
            limit: 2,
            list: [
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
            ]
          }, {
            title: '意外险',
            more: true,
            limit: 2,
            list: [
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
            ]
          }, {
            title: '手机险',
            more: true,
            limit: 1,
            list: [
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
            ]
          }, {
            title: '旅行险',
            more: true,
            limit: 2,
            list: [
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
              {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit: '元/月起'},
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
