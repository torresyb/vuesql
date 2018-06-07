<template>
  <div class="tablePage block">
    <div class="tableBox">
      搜索页面<el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="searchHandle"></el-button>
    </el-input>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="pageName"
        label="访问页面"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="访问url"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="访问次数"
        sortable
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="访问次数占比"
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="访问人数"
        sortable
        min-width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="访问人数占比"
        min-width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click = "dialogOpen(scope.row.id)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size = "pageSize"
      :total="totalData.length">
    </el-pagination>

    <!--弹框-->
    <el-dialog title="" width="80%" :lock-scroll="false" :visible.sync="dialogTableVisible">
      <echart-page v-if="leftSeries.length>0" class="gt25" :legend="legend" :category = 'category' :leftSeries = 'leftSeries' :rightSeries = 'rightSeries'></echart-page>
      <div v-else class="echartLoading" v-loading="loading"></div>
    </el-dialog>
  </div>
</template>

<script>
  import EchartPage from './echart.vue'

  export default {
    name: 'tablePage',
    components: {
      EchartPage
    },
    data() {
      return {
        loading: true,
        dialogTableVisible: false,
        currentPage: 1,
        pageSize: 2,
        searchText: '',
        legend: ['浏览量(PV)','访问数(PV)'],
        category: [],
        leftSeries: [],
        rightSeries: [],
        tableData: [],
        totalData: [],
        letData: []
      }
    },
    mounted() {
      this.initHandle()
    },
    methods: {
      initHandle() {
        this.totalData = this.letData = [{
          id: '1',
          pageName: '风火轮6164期',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: '2',
          pageName: '唐小僧6164期',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: '3',
          pageName: '获奖详情',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: '4',
          pageName: '重置支付密码',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
        this.handleCurrentChange(1)
      },
      dialogOpen(id) {
        this.category = []
        this.leftSeries = []
        this.rightSeries = []
        this.dialogTableVisible = true

        setTimeout(() => {
          this.category = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
          this.leftSeries = [210, 312, 121,654, 500, 830, 710, 521, 304, 560, 330, 410]
          this.rightSeries = [6101, 3121, 2211,6514, 9110, 6301, 3101, 5211, 3514, 5610, 8310, 3110]
        }, 2000)
      },
      // 分页
      handleCurrentChange(val) {
        this.tableData = this.totalData.slice(this.pageSize * (val - 1), this.pageSize * (val - 1) + this.pageSize)
        this.currentPage = val
      },
      // 搜索
      searchHandle() {
        // 过滤
        this.totalData = this.letData.filter((val) => {
          const reg_name = new RegExp(this.searchText.replace(/([.*+?\\])/g, '\\$1'), 'i')
          return reg_name.test(val.pageName)
        })
        // 分页
        this.handleCurrentChange(1)
      }
    }
  }
</script>

<style scoped>
  .tableBox .el-input{
    width: 300px;
    margin-left: 20px;
  }
  .echartLoading{
    height: 552px;
  }
</style>