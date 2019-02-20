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
      <LicaiBox class="bg-white mb10"></LicaiBox>

      <div class="bg-white mb10">
        <h5 class="title">贷款推荐</h5>
        <ul class="licai">
          <li>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
      </div>

      <div class="bg-white mb10">
        <h5 class="title">保险推荐</h5>
        <ul class="licai">
          <li>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
          <li>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
          <li>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>

      <div class="bg-white mb10">
        <h5 class="title">小米信用卡推荐</h5>
        <ul class="licai">
          <li>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
      </div>

      <div class="bg-white mb60">
        <h5 class="title">金融学堂</h5>
        <ul class="licai">
          <li>
            <div>image</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
      </div>

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
        imgLists: [
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
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
