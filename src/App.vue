<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <!--头部-->
    <header-component v-if="$route.meta.header" />
    <!--路由-->
    <div id="contentWrap" class="clearfix">
      <!--路由-->
      <transition name="fade" mode="out-in">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view id="content" :key="$route.fullPath"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" id="content" :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </div>
</template>


<script>
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  import HeaderComponent from './components/header/index.vue'

  export default {
    name: 'app',
    components: {
      NprogressContainer,
      HeaderComponent
    },
    data() {
      return {
      }
    }
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    font-size: 14px;
  }
  a{
    color: #2c3e50;
    text-decoration: none;
  }
  #app {
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    background-color: #f9f9f9;
  }

  #app, #home {
    height: 100%;
    overflow: hidden;
  }
  ul,li{
    list-style: none;
  }
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .center {
    text-align: center;
  }

  .fw-b {
    font-weight: bold;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }

  .hidden {
    visibility: hidden;
  }

  /* Scrollbar */
  textarea::-webkit-scrollbar-track-piece,
  body::-webkit-scrollbar-track-piece,
  .prefect-scrollbar::-webkit-scrollbar-track-piece {
    background-color: #d8d8d8;
    width: 8px;
  }

  textarea::-webkit-scrollbar,
  body::-webkit-scrollbar,
  .prefect-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  textarea::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  .prefect-scrollbar::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #b3b2b2;
    outline-offset: -4px;
  }

  textarea::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  .prefect-scrollbar::-webkit-scrollbar-thumb:hover {
    height: 50px;
    background-color: #6b6b6b;
  }

  /* nProgress Style */
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: fixed;
  }

  .nprogress-container #nprogress .bar {
    background: #fff;
  }

  .nprogress-container #nprogress .peg {
    box-shadow: 0 0 10px #fff, 0 0 5px #fff;
  }

  .nprogress-container #nprogress .spinner-icon {
    border-top-color: #fff;
    border-left-color: #fff;
  }

  #nprogress .spinner {
    right: 3px;
    top: 5px;
  }

  /* Element UI */

  /* Pagination */
  .el-pagination {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  /* Table Scrollbar */
  .el-table__body-wrapper::-webkit-scrollbar-track-piece {
    background-color: #d8d8d8;
    width: 10px;
    height: 10px;
  }

  .el-table__body-wrapper::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #b3b2b2;
    outline-offset: -4px;
  }

  .el-table__body-wrapper::-webkit-scrollbar-thumb:hover {
    height: 50px;
    background-color: #6b6b6b;
  }

  /* Button Style */
  /*.el-button {*/
  /*padding: 5px 20px;*/
  /*}*/

  /* Custom Table */
  .el-table .operate-tools button {
    margin: 3px 5px;
    padding: 5px 10px !important;
  }

  /* Menu */
  .el-menu {
    border-right: none;
    background: none;
    margin-top: 0 !important;
  }

  .el-submenu {
    margin: 10px 0;
  }

  .el-menu-item-group__title {
    padding-top: 10px;
  }

  .el-menu-item, .el-submenu__title, .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
  }

  .el-menu-item {
    margin-bottom: 5px;
  }

  .el-submenu .el-menu-item:last-child {
    margin-bottom: 0px;
  }

  .el-menu-item, .el-submenu__title {
    color: #b8c7ce;
  }

  .el-menu-item i, .el-submenu__title i {
    margin-right: 5px;
    color: #b8c7ce;
  }

  .el-menu-item.is-active i, .el-submenu.is-active i {
    color: #fff;
  }

  .el-menu-item:hover i {
    color: #01ABF7;
  }

  .el-menu-item.is-active i {
    color: #01ABF7;
  }

  .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:hover {
    color: #01ABF7;
    background: #eeeeee;
  }

  .el-menu-item.is-active {
    color: #01ABF7;
    background: #eeeeee;
  }

  .el-submenu.is-active.is-opened .el-submenu__title {
    color: #fff;
    background: #1e282c;
  }

  .el-submenu .el-menu-item.is-active, .el-submenu .el-menu-item.is-active:hover {
    color: #ffb556;
    background: #1e282c;
  }

  .el-submenu__icon-arrow {
    color: #ffffff !important;
  }
  #contentWrap{
    padding: 25px;
  }
  #content{
    margin-top: 60px;
  }
  .block{
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 25px;
  }
  .gt25{
    margin-top: 25px;
  }
</style>
