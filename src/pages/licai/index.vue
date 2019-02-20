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

      <div class="bg-white mb10">
        <h5 class="title">热门推荐</h5>
        <ul class="licai">
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
      </div>

      <div class="bg-white mb10">
        <h5 class="title">定期</h5>
        <ul class="licai">
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>

      <div class="bg-white mb10">
        <h5 class="title">活期</h5>
        <ul class="licai">
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>

      <div class="bg-white mb10">
        <h5 class="title">基金</h5>
        <ul class="licai">
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
          <li>
            <div>4.10%</div>
            <div>富民宝</div>
            <div>&gt;</div>
          </li>
        </ul>
        <div class="more">查看更多</div>
      </div>

      <div class="bg-white mb60">
        <h5 class="title">股票</h5>
      </div>

    </van-pull-refresh>

    <Menus :current="1"></Menus>

  </div>
</template>

<script>
  import {NavBar, Swipe, SwipeItem, Tabbar, TabbarItem, PullRefresh} from 'vant';
  import TopHeader from '../../components/topHeader';
  import FocusShow from '../../components/focusShow';
  import Nav from '../../components/navbar';
  import Swiper from '../../components/swiper';
  import Menus from '../../components/menus';

  export default {
    name: "licai",
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
    },
    data() {
      return {
        headInfo: {
          title: '理财',
          ltype: 'user',
          rtype: 'gift',
        },
        focusInfo: '理财展示',
        navInfo: [
          {name: '定期', icon: '', path: ''},
          {name: '活期', icon: '', path: ''},
          {name: '基金', icon: '', path: ''},
          {name: '银行精选', icon: '', path: ''}
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
  .container {
    background: #fff;
    margin: 12px 0;
    padding: 12px 0;
  }

  .zichan {
    height: 150px;
    line-height: 150px;
    background: #ff8400;
    margin: 0 12px 12px 12px;
    border-radius: 10px;
    text-align: center;
    color: #fff;
  }

  .nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }

  .nav ul li {
    width: 25%;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .title {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px #ccc solid;
    padding-left: 10px;
  }

  .licai li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px #ccc solid;
    padding: 0 10px;
  }

  .more {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
  }
</style>
