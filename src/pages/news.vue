<template>
  <div>
    <TopHeader :title="calcLen" ltype="back" rtype=""></TopHeader>

    <div v-html="htmls"></div>

    <!--<div class="newsWrap">-->
    <!--<div class="newsTitle">-->
    <!--<h3 class="title">在岸人民币高开高走 短期受益于双轮驱动 在岸人民币高开高走</h3>-->
    <!--<h5 class="sub-title">金融君 <a href="javascript:;">小金资讯</a> 2019-02-18</h5>-->
    <!--</div>-->
    <!--<div class="newsContent">-->
    <!--<div class="mb15">-->
    <!--<img src="https://a.impactradius-go.com/display-ad/5114-555380" alt="">-->
    <!--</div>-->
    <!--<p class="ind32">-->
    <!--通过上一节的学习，我们了解到了在Vue的组件中数据传递：prop向下传递，事件向上传递。意思是父组件通过prop给子组件下发数据，子组件通过事件给父组件发送消息。但Vue中，props是单向数据绑定，虽然在Vue-->
    <!--1.0版本中，通过.sync能实现双向数据绑定。但.sync在几个版本中被移除，尽管在2.3版本重新引入.sync修饰符，可这次引入只是作为一个编译时的语法糖存在。如果直接使用.sync修饰符来做双向数据绑定，会报警告信息。那么我们如何在组件中实现双向数据绑定呢？这一节我们就来学习这方面的相关知识。著作权归作者所有。-->
    <!--商业转载请联系作者获得授权,非商业转载请注明出处。<span></span></p>-->
    <!--<p class="ind32">-->
    <!--通过上一节的学习，我们了解到了在Vue的组件中数据传递：prop向下传递，事件向上传递。意思是父组件通过prop给子组件下发数据，子组件通过事件给父组件发送消息。但Vue中，props是单向数据绑定，虽然在Vue-->
    <!--1.0版本中，通过.sync能实现双向数据绑定。但.sync在几个版本中被移除，尽管在2.3版本重新引入.sync修饰符，可这次引入只是作为一个编译时的语法糖存在。如果直接使用.sync修饰符来做双向数据绑定，会报警告信息。那么我们如何在组件中实现双向数据绑定呢？这一节我们就来学习这方面的相关知识。著作权归作者所有。-->
    <!--商业转载请联系作者获得授权,非商业转载请注明出处。</p>-->
    <!--<p>原文: https://www.w3cplus.com/vue/component-data-and-props-part2.html © w3cplus.com</p>-->
    <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>
  import TopHeader from '../components/topHeader';

  export default {
    name: "news",
    components: {
      TopHeader,
    },
    data() {
      return {
        headInfo: {},
        htmls: '',
      }
    },
    computed: {
      calcLen() {
        var text = this.headInfo.headText;
        return text.length > 10 ? text.substring(0, 5) + '...' : text;
      },
    },
    created() {

      // this.$http({
      //   method: 'get',
      //   url: '../static/data/getnews1.json',
      //   dataType: 'json'
      // }).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // })

      this.$axios.get("../../static/data/getNews.json").then(res => {
        console.log(111);
        console.log(res.data.code);
      });


      this.headInfo = this.$route.params;
      this.htmls = "";

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

</style>
