<template>
  <div class="wrap">
    <TopHeader :title="headInfo.title" :ltype="headInfo.ltype" :rtype="headInfo.rtype" :name="$route.name"></TopHeader>
    <!--下拉加载-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--信息展示-->
      <FocusShow :info="focusInfo" class="bg-white"></FocusShow>
      <!--导航-->
      <Nav :info="navInfo" class="mb10"></Nav>
      <!--轮播-->
      <Swiper :list="imgLists" class="bg-white mb10 pt10 pb10"></Swiper>
      <!--理财推荐-->
      <LicaiBox :info="licaiInfo" class="bg-white mb10"></LicaiBox>
      <!--理财推荐-->
      <div v-for="(item,index) in comLists" :key="index">
        <ComBox :info="item" @click="toComp(item)" class="bg-white mb10"></ComBox>
      </div>
      <!--新闻列表-->
      <NewsBox :info="newsInfo" class="bg-white mb60"></NewsBox>

    </van-pull-refresh>

    <Menus :current="0"></Menus>

  </div>
</template>

<script>
  import {NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, PullRefresh} from 'vant';
  import TopHeader from '../components/topHeader';
  import FocusShow from '../components/focusShow';
  import Nav from '../components/navbar';
  import Swiper from '../components/swiper';
  import LicaiBox from '../components/licaiBox';
  import ComBox from '../components/comBox';
  import NewsBox from '../components/newsBox';
  import Menus from '../components/menus';

  export default {
    name: "Index",
    components: {
      [NavBar.name]: NavBar,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
      [PullRefresh.name]: PullRefresh,
      TopHeader,
      FocusShow,
      Nav,
      Swiper,
      Menus,
      LicaiBox,
      ComBox,
      NewsBox,
    },
    data() {
      return {
        headInfo: {
          title: '首页',
          ltype: 'user',
          rtype: 'gift',
        },
        focusInfo: '首页展示',
        count: 0,
        navInfo: [],
        isLoading: false,
        licaiInfo: {},
        comLists: [],
        imgLists: [],
        newsInfo: {},
      }
    },
    created() {
      this.init();
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
      init() {
        var url = '../../static/data/getIndexAll.json';
        this.$get(url).then(res => {
          if(res.code == 200 && res.status == 'success'){
            var resData = res.data;
            this.navInfo = resData.navInfo;
            this.licaiInfo = resData.licaiInfo;
            this.comLists = resData.comLists;
            this.imgLists = resData.imgLists;
            this.newsInfo = resData.newsInfo;
          }
        })
      },

    },
  }
</script>

<style scoped>

</style>
