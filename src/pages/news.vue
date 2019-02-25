<template>
  <div>
    <TopHeader @click-left="onClickLeft" :title="calcLen" ltype="back" rtype=""></TopHeader>

    <div class="loadBox" v-if="isLoad">
      <van-loading size="50px"/>
    </div>

    <div v-html="htmls"></div>
  </div>
</template>

<script>
  import TopHeader from '../components/topHeader';
  import {Toast, Loading} from 'vant';

  export default {
    name: "news",
    components: {
      [Toast.name]: Toast,
      [Loading.name]: Loading,
      TopHeader,
    },
    data() {
      return {
        headInfo: {},
        htmls: '',
        isLoad: true,
      }
    },
    computed: {
      calcLen() {
        var text = this.headInfo.headText;
        return text.length > 10 ? text.substring(0, 5) + '...' : text;
      },
    },
    created() {
      this.headInfo = this.$route.params;
      var newsId = this.headInfo.newsId;
      if (!newsId) {
        Toast.fail({
          duration: 2000,
          message: '数据参数错误'
        });
        return;
      }
      // 请求新闻内容
      var vm = this;
      this.$get('../../static/data/getNews.json', {id: newsId}).then(res => {
        console.log(res);
        if (res.code == 200 && res.status == 'success') {
          setTimeout(function () {
            vm.isLoad = false;
            vm.htmls = res.data.code;
          }, 2000)
        }
      })

    },
    methods: {
      onClickLeft() {

      },
    },
  }
</script>

<style scoped>
  .newsWrap {
    box-sizing: border-box;
    background: #fff;
    padding: 0 15px;
  }

  .newsTitle {
    padding-bottom: 30px;
    padding-top: 15px;
  }

  .newsTitle h3 {
    font-size: 20px;
    color: #000;
    margin-bottom: 15px;
    line-height: 30px;
    text-align: justify;
    -ms-text-justify: inter-ideograph;
    text-justify: inter-ideograph;
  }

  .newsTitle h5 {
    font-size: 14px;
    color: #999999;
  }

  .newsTitle h5 a {
    color: royalblue;
  }

  .newsContent {
    font-size: 16px;
    color: #333;
    line-height: 26px;
  }

  .newsContent img {
    width: 100%;
  }

  .newsContent p {
    margin-bottom: 20px;
    text-align: justify;
    -ms-text-justify: inter-ideograph;
    text-justify: inter-ideograph;
  }

  .newsContent p.ind32 {
    text-indent: 32px;
  }

  .loadBox{
    position: fixed;
    top:50%;
    left:50%;
    margin-top:-25px;
    margin-left:-25px;
  }
</style>
