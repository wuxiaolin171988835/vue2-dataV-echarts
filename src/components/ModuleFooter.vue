<template>
  <div class="flex mt-2 flex-1">
    <div class="flex-[50%]">
      <dv-border-box-8>
        <div class="h-full flex flex-col p-4">
          <p>车间产线耗电统计</p>
          <div ref="cpChart" class="flex-1"></div>
        </div>
      </dv-border-box-8>
    </div>
    <div class="flex-[25%]">
      <dv-border-box-13>
        <div class="h-full flex flex-col p-4">
          <p>动态环图</p>
          <dv-active-ring-chart :config="config6" class="flex-1" />
        </div>
      </dv-border-box-13>
    </div>
    <div class="flex-[25%]">
      <dv-border-box-8 :reverse="true">
        <div class="h-full flex flex-col p-4">
          <p>胶囊柱图</p>
          <dv-capsule-chart :config="config7" class="flex-1" />
        </div>
      </dv-border-box-8>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "ModuleFooter",
  data() {
    return {
      config6: {
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          }
        ]
      },
      config7: {
        data: [
          {
            name: "南阳",
            value: 167
          },
          {
            name: "周口",
            value: 67
          },
          {
            name: "漯河",
            value: 123
          },
          {
            name: "郑州",
            value: 55
          },
          {
            name: "西峡",
            value: 98
          }
        ]
      }
    };
  },
  mounted() {
    this.initCpChart();
  },
  methods: {
    initCpChart() {
      const chartDom = this.$refs.cpChart;
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: "Stacked Area Chart"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top"
            },
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
