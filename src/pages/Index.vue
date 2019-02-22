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
        <ComBox :info="item" class="bg-white mb10"></ComBox>
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
        navInfo: [
          {name: '银行精选', icon: '', path: ''},
          {name: '免费保险', icon: '', path: ''},
          {name: '小米分期', icon: '', path: ''},
          {name: '客服咨询', icon: '', path: ''}
        ],
        licaiInfo: {
          title: '理财推荐',
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
        comLists: [
          {
            title: '贷款推荐',
            more: false,
            limit: 1,
            list: [
              {headText: '随心存399天', desc: '银行产品本金保障'},
              {headText: '随心存399天', desc: '银行产品本金保障'},
            ]
          },
          {
            title: '保险推荐',
            more: true,
            limit: 3,
            list: [
              {headText: '随心存399天', desc: '银行产品本金保障'},
              {headText: '随心存399天', desc: '银行产品本金保障'},
              {headText: '随心存399天', desc: '银行产品本金保障'},
            ]
          },
          {
            title: '小米信用卡推荐',
            more: false,
            limit: 1,
            list: [
              {headText: '随心存399天', desc: '银行产品本金保障'},
              {headText: '随心存399天', desc: '银行产品本金保障'},
            ]
          },
        ],
        imgLists: [
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        ],
        newsInfo: {
          title: '金融学堂',
          more: false,
          limit: 5,
          list: [
            {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit:'元/月起'},
            {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit:'元/月起'},
            {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit:'元/月起'},
            {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit:'元/月起'},
            {url: '', headText: '百万医疗险*泰惠保', desc: '银行产品本金保障', cash: 11, unit:'元/月起'},
          ]
        },
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
