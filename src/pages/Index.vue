<template>
  <div class="wrap">

    <TopHeader :title="headInfo.title" :ltype="headInfo.ltype" :rtype="headInfo.rtype" :name="$route.name"></TopHeader>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

      <div class="bg-white mb10">
        <div class="zichan">zichan</div>
        <div class="nav">
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
          </ul>
        </div>
      </div>

      <div class="bg-white mb10 pt10 pb10">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item,index) in imgLists" :key="index">
            <div class="swiper-img">{{index}}</div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="bg-white mb10">
        <h5 class="title">理财推荐</h5>
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
      Menus,
      TopHeader,
    },
    data() {
      return {
        headInfo: {
          title: '首页',
          ltype: 'user',
          rtype: 'gift',
        },
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
    background: #ddd;
    margin: 0 12px 12px 12px;
    border-radius: 10px;
    text-align: center;
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
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .swiper-img {
    width: calc(100% - 20px);
    height: 100px;
    margin-left: 10px;
    box-sizing: border-box;
    line-height: 100px;
    background: #fcc;
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
