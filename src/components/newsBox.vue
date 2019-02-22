<template>
  <div>
    <div>
      <h5 class="title">{{info.title}}</h5>
      <ul class="list">
        <li v-for="(item,index) in info.list" :key="index" @click="toNews(item)" v-if="index<info.limit">
          <div class="pic"></div>
          <div class="main">
            <h4>{{item.headText}}</h4>
            <p>{{item.desc}}</p>
          </div>
          <div>&gt;</div>
        </li>
      </ul>
      <div class="more" v-if="info.more">查看更多</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newsBox",
    props: {
      info: {},
    },
    data() {
      return {
        //
      }
    },
    methods: {
      toNews(item) {
        this.$router.push({
          name:'news',
          params: item
        });
      },
    },
  }
</script>

<style scoped>
  .title {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px #ccc solid;
    padding-left: 10px;
  }

  .list li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px #ccc solid;
    padding: 0 10px;
  }

  .list li .pic{
    width:50px;
    height:50px;
    background: #ccc;
    border-radius:50%;
  }

  .list li .main{
    flex:1;
    margin-left:20px;
  }
  .list li .main h4{
    font-size: 18px;
  }
  .list li .main p{
    font-size: 14px;
    color:#999;
    margin-top:12px;
  }
  .list li .main p span.org{
    color:#ff8400;
  }

  .more {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
  }
</style>
