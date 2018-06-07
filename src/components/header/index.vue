<template>
  <div id="header" class="clearfix">
    <div id="logo" class="hd-left"><img src="../../assets/login.jpg" alt="" width="40px" style="vertical-align: middle; margin-right: 10px">外高桥埋点</div>
    <div id="admin" class="hd-right fr">
      <img src="../../assets/user.png">
      欢迎你，admin
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headers',
    data() {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped>
  #header{
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0 0 1px rgba(0,0,0,.55);
  }
  #logo{
    float: left;
    display: block;
    width: 220px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    font-size: 24px;
    color: #1fbeda;
    text-align: center;
    transition: width .3s ease-in-out;
  }
  .hd-left{
    margin-left: 50px;
  }
  .hd-right{
    padding-right: 50px;
  }
  .hd-right img{
    vertical-align: middle;
  }
</style>