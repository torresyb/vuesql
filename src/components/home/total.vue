<template>
  <div class="totalPage block">
    <h2>
      汇总数据
      <el-tooltip class="item" placement="right">
        <div slot="content">
          PV：所有页面浏览总数<br>
          UV：访问site的总人数（同一个用户多次访问记一次）<br>
          注册完成率：完成注册的用户数占注册页访问用户数比<br>
          求购完成率：填写完成求购需求的用户数占我要求购页访问用户数比<br>
          融资完成率：填写完成融资需求的用户数占我要求融资访问用户数比<br>
          入驻完成率：填写完成入驻需求的用户数占我要入驻页访问用户数比<br>
          参观完成率：填写完成预约参观的用户数占预约参观页访问用户数比
        </div>
        <el-button class="iconsTip">?</el-button>
      </el-tooltip>
    </h2>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <dl>
          <dt>浏览量（PV）</dt>
          <dd>9,683,190</dd>
        </dl>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <dl>
          <dt>访问数（PV）</dt>
          <dd>9,683,190</dd>
        </dl>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="col-5">
      <el-col :xs="12" :sm="4" :md="4" :lg="4" :xl="4">
        <a href="javascript:;">
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <dl>
              <dt>注册完成率</dt>
              <dd>9,683,190</dd>
            </dl>
          </el-tooltip>
        </a>
      </el-col>
      <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
        <a href="javascript:;">
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <dl>
              <dt>求购完成率</dt>
              <dd>9,683,190</dd>
            </dl>
          </el-tooltip>
        </a>
      </el-col>
      <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
        <a href="javascript:;">
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <dl>
              <dt>融资完成率</dt>
              <dd>9,683,190</dd>
            </dl>
          </el-tooltip>
        </a>
      </el-col>
      <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
        <a href="javascript:;">
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <dl>
              <dt>入驻完成率</dt>
              <dd>9,683,190</dd>
            </dl>
          </el-tooltip>
        </a>
      </el-col>
      <el-col :xs="12" :sm="5" :md="5" :lg="5" :xl="5">
        <a href="javascript:;">
          <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <dl>
              <dt>参观完成率</dt>
              <dd>9,683,190</dd>
            </dl>
          </el-tooltip>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'total',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .totalPage h2{
    font-size: 14px;
    font-weight: normal;
  }
  .totalPage .el-row{
    text-align: center;
    margin-top: 25px;
  }
  .totalPage .el-row dt{
    color: #666666;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .totalPage .col-5{
    border-top: 1px dashed #dddddd;
    padding-top: 10px;
  }
  .totalPage .col-5 dt{
    font-size: 12px;
  }
  .totalPage .col-5 a{
    display: block;
  }
  .totalPage .col-5 a:hover, .totalPage .col-5 a:hover dt{
    color: #1fbeda;
  }
  .totalPage .el-row dl{
    margin-top: 20px;
  }
  .totalPage .el-row dd{
    font-size: 24px;
  }
</style>
<style>
  .iconsTip, .iconsTip:hover{
    border-radius: 10px;
    background-color: #1fbeda;
    color: #fff;
    width: 20px;
    height: 20px;
    padding: 0;
  }
  .el-tooltip__popper.is-dark{
    line-height: 18px;
  }
</style>