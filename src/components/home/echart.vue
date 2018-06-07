<template>
  <div class="echartPage block">
    <chart :options="polar" :autoResize="true" ref="chart" theme="macarons" style="width:100%;height:500px"></chart>
  </div>
</template>

<script>
  export default {
    name: 'echart',
    data() {
      return {
        polar: {
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data: []
          },
          grid: {
            left: "3%",
            right: '3%',
            top:'15%',
            containLabel: true
          },
          calculable : true,
          xAxis : [{
              type : 'category',
              boundaryGap : false,
              data : []
          }],
          yAxis : [{
            name:'(单位：次数)',
            type : 'value',
            position: 'left',
          },{
            name: '(单位：人数)',
            type: 'value',
            position: 'right'
          }],
          series : []
        }
      }
    },
    props: ['legend', 'category', 'leftSeries', 'rightSeries'],
    mounted() {
      if(this.$refs.chart){
        this.$refs.chart.mergeOptions({
          legend: {
            data: this.legend
          },
          xAxis: {
            data : this.category
          },
          series: [{
            name: this.legend[0],
            type:'line',
            smooth:true,
            symbolSize:12,
            itemStyle: {
              normal: {
                areaStyle: {type: 'default'},
                label: {
                  "show": true,
                  "position": "top",
                  "fontSize": 14
                }
              },
            },
            data: this.leftSeries
          },
            {
              name: this.legend[1],
              type:'line',
              yAxisIndex: 1,
              smooth:true,
              symbolSize:12,
              itemStyle: {
                normal: {
                  areaStyle: {type: 'default'},
                  label: {
                    "show": true,
                    "position": "top",
                    "fontSize": 14
                  }
                },
              },
              data: this.rightSeries
            }]
        })
      }
    }
  }
</script>