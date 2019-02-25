<template>
  <div>
    <div>
      <h5 class="title">{{info.title}}</h5>
      <ul class="list">
        <li @click="toComPage(item)" v-for="(item,index) in info.list" :key="index" v-if="index<info.limit">
          <div class="main">
            <h4 class="org">{{item.headText}}</h4>
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
    name: "comBox",
    props: {
      info: {},
    },
    methods: {
      toComPage(item) {
        if(!item.url) return;
        this.$router.push(item.url);
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

  .list li .pic {
    width: 50px;
    height: 50px;
    background: #ccc;
  }

  .list li .main {
    flex: 1;
    margin-left: 20px;
  }

  .list li .main h4 {
    font-size: 18px;
  }

  .list li .main p {
    font-size: 14px;
    color: #999;
    margin-top: 12px;
  }

  .org {
    color: #ff8400;
  }

  .more {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
  }
</style>
