<template>
  <div class="main_content">
    <div id="bedroom"></div>
    <div id="ads"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        chart: null,
        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好','学习氛围极差'],
        opinionData: [
          {value:26, name:'学习氛围差'},
          {value:50, name:'学习氛围一般'},
          {value:8, name:'学习氛围很好'},
          {value:2, name:'学习氛围极差'}
        ],
          data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ],
         indicator: [
           { name: '销售（sales）', max: 6500},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
      }
    },
    methods: {
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
          title: {
            text: '寝室学习氛围情况调查',
            left: 'center',
            top: 10,
            textStyle: {
              fontSize: 24,
              fontFamily: 'Helvetica',
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatte: "{b}: {c} ({d}%)"
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          legend: {
              orient: 'vertical',
              left: 5,
              top: 10,
              data: this.opinion,
          },
          series: [
            {
              name: '寝室学习氛围',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '60%'],
              avoidLabelOverlap: false,
              label: {
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '24',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.opinionData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffset: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      },
      drawpt(id){
         this.chart = echarts.init(document.getElementById(id))
         this.chart.setOption({
           title: {
        text: '基础雷达图',
        left: 'center',
    },
    tooltip: {},
    legend: {
       orient: 'vertical',
       left: 5,
       top: 10,
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator : this.indicator
       
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
      data: this.data
    }]
        })
      }
     
    },
    mounted() {
      this.$nextTick(function() {
        this.drawPie('bedroom'),
        this.drawpt('ads')
      })
    }
  }
</script>
<style scoped>
#bedroom {
  position: relative;
  left: 50%;
  margin-left: -600px;
  margin-bottom: 70px;
  width: 1200px;
  height: 800px;
  border: solid #D01257 1px;
  box-shadow: 0 0 8px #FB90B7;
  border-radius: 10px;
}   
#ads{
  position: relative;
  left: 50%;
  margin-left: -600px;
  margin-bottom: 70px;
  width: 1200px;
  height: 800px;
  border: solid #D01257 1px;
  box-shadow: 0 0 8px #FB90B7;
  border-radius: 10px;
}   
</style>