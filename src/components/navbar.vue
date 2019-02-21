<template>
  <div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in info" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar",
    props: {
      info: {},
    },
  }
</script>

<style scoped>
  .nav ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    background: #fff;
  }

  .nav ul li {
    width: 25%;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
</style>
