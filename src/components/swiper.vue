<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in list" :key="index">
        <div class="swiper-img">{{index}}</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';

  export default {
    name: "swiper",
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    props: {
      list: {},
    },
    data() {
      return {
        //
      }
    },
  }
</script>

<style scoped>
  .swiper-img {
    width: calc(100% - 20px);
    height: 100px;
    margin-left: 10px;
    box-sizing: border-box;
    line-height: 100px;
    background: #fcc;
    text-align: center;
  }
</style>
