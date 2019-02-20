<template>
  <div>
    <div class="focus">
      {{info}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "focusShow",
    props: {
      info: {},
    },
  }
</script>

<style scoped>
  .focus {
    height: 150px;
    line-height: 150px;
    background: #ff8400;
    margin: 0 12px;
    border-radius: 10px;
    text-align: center;
    color: #fff;
  }
</style>
