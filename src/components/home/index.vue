<template>
  <div class="indexWrap">
    <div class="dataBox block">
      <h1>页面分析</h1>
      <div class="dataSelect">
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          align="right"
          unlink-panels
          :clearable="false"
          :editable="false"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </div>
    <!--汇总数据-->
    <total-page class="gt25"></total-page>
    <!--折线图-->
    <echart-page class="gt25" :legend="legend" :category = 'category' :leftSeries = 'leftSeries' :rightSeries = 'rightSeries'></echart-page>
    <!--table 表格-->
    <table-page class="gt25"></table-page>
  </div>
</template>

<script>
  import TotalPage from './total.vue'
  import EchartPage from './echart.vue'
  import TablePage from './table.vue'

  import {initHandle} from '../../api/controller/init'

  export default {
    name: 'index',
    components: {
      TotalPage,
      EchartPage,
      TablePage
    },
    data () {
      return {
        dateRange: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        legend: ['浏览量(PV)','访问数(PV)'],
        category: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        leftSeries: [210, 312, 121,654, 500, 830, 710, 521, 304, 560, 330, 410],
        rightSeries: [6101, 3121, 2211,6514, 9110, 6301, 3101, 5211, 3514, 5610, 8310, 3110]
      }
    },
    beforeMount() {
      let currDate = moment().format('YYYY-MM-DD')
      let weekDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
      this.dateRange = [new Date(weekDate), new Date(currDate)]
      this.pickerOptions = Object.assign(this.pickerOptions, {
        disabledDate(time) {
          return time.getTime() > (new Date(currDate)).getTime()
        },
      })
    },
    mounted() {
      initHandle().then(rst => {
        console.log('rst:', rst)
      })
    }
  }
</script>

<style scoped>
.indexWrap h1{
  font-size: 18px;
  line-height: 18px;
  margin: 0px;
  margin-bottom: 20px;
  color: #666666;
  font-weight: normal;
}
</style>
