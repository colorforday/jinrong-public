<template>
  <div>
    <h5 class="title">理财推荐</h5>
    <ul class="list">
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
</template>

<script>
  export default {
    name: "licaiBox"
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

  .more {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
  }
</style>
