<template>
  <div class="text-[#ddd] bg-black w-full h-screen flex flex-col">
    <dv-full-screen-container>
      <div class="p-4 flex flex-col">
        <!-- 顶部区域 -->
        <div class="flex h-[50px]">
          <div class="flex-[30%]">
            <dv-decoration-10 class="!h-[5px]" />
          </div>
          <div class="flex-[40%]">
            <div class="flex">
              <dv-decoration-8 class="flex-1 !h-[50px]" />
              <div class="flex-1 text-center leading-[50px]">
                <dv-decoration-11 style="height: 60px"
                  >智慧工厂数据中心</dv-decoration-11
                >
              </div>
              <dv-decoration-8 :reverse="true" class="flex-1 !h-[50px]" />
            </div>
          </div>
          <div class="flex-[30%]">
            <dv-decoration-10 class="!h-[5px] rotate-180" />
          </div>
        </div>
        <!-- 中间内容区域 -->
        <div class="flex mt-2 flex-1">
          <div class="flex-[25%]">
            <dv-border-box-13 class="!h-[300px]">
              <div class="h-full flex flex-col p-4">
                <p>设备能耗监测</p>
                <div ref="ecChart" class="flex-1"></div>
              </div>
            </dv-border-box-13>

            <dv-border-box-1 class="!h-[300px]">
              <div class="h-full flex flex-col p-4">
                <p>仓库库存量</p>
                <dv-capsule-chart :config="config1" class="flex-1" />
              </div>
            </dv-border-box-1>

            <dv-border-box-2 class="!h-[300px]">
              <div class="h-full flex flex-col p-4">
                <p>设备运转负载率</p>
                <dv-water-level-pond :config="config2" class="flex-1" />
              </div>
            </dv-border-box-2>
          </div>
          <div class="flex-[50%]">
            <dv-border-box-9 class="!h-[900px]">
              <div class="h-full px-6 py-4 flex flex-col">
                <ul class="flex text-center">
                  <li class="flex-1">
                    <dv-border-box-9>
                      <div class="p-2">
                        <p>设备管理</p>
                        <p>100%</p>
                        <p>100%</p>
                      </div>
                    </dv-border-box-9>
                  </li>
                  <li class="flex-1">
                    <dv-border-box-9>
                      <div class="p-2">
                        <p>生产管理</p>
                        <p>100%</p>
                        <p>100%</p>
                      </div></dv-border-box-9
                    >
                  </li>
                  <li class="flex-1">
                    <dv-border-box-9>
                      <div class="p-2">
                        <p>物流管理</p>
                        <p>100%</p>
                        <p>100%</p>
                      </div></dv-border-box-9
                    >
                  </li>
                  <li class="flex-1">
                    <dv-border-box-9
                      ><div class="p-2">
                        <p>人员管控</p>
                        <p>100%</p>
                        <p>100%</p>
                      </div></dv-border-box-9
                    >
                  </li>
                </ul>
                <div class="mt-8 flex-1 flex flex-col">
                  <p>设备数据统计</p>
                  <dv-flyline-chart :config="config3" class="mt-2 flex-1" />
                </div>
              </div>
            </dv-border-box-9>
          </div>
          <div class="flex-[25%]">
            <dv-border-box-1 class="!h-[400px]">
              <div class="h-full flex flex-col p-4">
                <p>销售额时间轴</p>
                <dv-conical-column-chart
                  :config="config4"
                  class="flex-1 mt-4"
                />
              </div>
            </dv-border-box-1>

            <dv-border-box-8 class="!h-[500px]">
              <div class="h-full flex flex-col p-4">
                <p>车间设备能耗排行</p>
                <dv-scroll-ranking-board :config="config5" class="flex-1" />
              </div>
            </dv-border-box-8>
          </div>
        </div>
        <!-- 底部区域 -->
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
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import * as echarts from "echarts";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      config1: {
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
      },
      config2: {
        data: [66]
      },
      config3: {
        centerPoint: [0.48, 0.35],
        points: [
          {
            position: [0.52, 0.235],
            text: "新乡"
          },
          {
            position: [0.43, 0.29],
            text: "焦作"
          },
          {
            position: [0.59, 0.35],
            text: "开封"
          },
          {
            position: [0.53, 0.47],
            text: "许昌"
          },
          {
            position: [0.45, 0.54],
            text: "平顶山"
          },
          {
            position: [0.36, 0.38],
            text: "洛阳"
          },
          {
            position: [0.62, 0.55],
            text: "周口"
          },
          {
            position: [0.56, 0.56],
            text: "漯河"
          },
          {
            position: [0.37, 0.66],
            text: "南阳"
          },
          {
            position: [0.55, 0.81],
            text: "信阳"
          },
          {
            position: [0.55, 0.67],
            text: "驻马店"
          },
          {
            position: [0.37, 0.29],
            text: "济源"
          },
          {
            position: [0.2, 0.36],
            text: "三门峡"
          },
          {
            position: [0.76, 0.41],
            text: "商丘"
          },
          {
            position: [0.59, 0.18],
            text: "鹤壁"
          },
          {
            position: [0.68, 0.17],
            text: "濮阳"
          },
          {
            position: [0.59, 0.1],
            text: "安阳"
          }
        ],
        bgImgUrl: "http://datav.jiaminghi.com/img/flylineChart/map.jpg",
        centerPointImg: {
          url: "http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png"
        },
        pointsImg: {
          url: "http://datav.jiaminghi.com/img/flylineChart/mapPoint.png"
        }
      },
      config4: {
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
            value: 71
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          },
          {
            name: "信阳",
            value: 35
          },
          {
            name: "漯河",
            value: 15
          }
        ],
        img: [
          "http://datav.jiaminghi.com/img/conicalColumnChart/1st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/2st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/3st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/4st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/5st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/6st.png",
          "http://datav.jiaminghi.com/img/conicalColumnChart/7st.png"
        ]
      },
      config5: {
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
          },
          {
            name: "信阳",
            value: 45
          },
          {
            name: "漯河",
            value: 29
          }
        ]
      },
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
    this.initEcChart();
    this.initCpChart();
  },
  methods: {
    initEcChart() {
      setTimeout(() => {
        const chartDom = this.$refs.ecChart;
        const myChart = echarts.init(chartDom);
        const option = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar"
            }
          ]
        };
        myChart.setOption(option);
      });
    },
    initCpChart() {
      setTimeout(() => {
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
      });
    }
  }
};
</script>
