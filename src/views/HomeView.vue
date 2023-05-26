<!--
 * @Author: wuxiaolin xiaolin.wu@eeoa.com
 * @Date: 2023-05-24 16:19:22
 * @LastEditors: wuxiaolin xiaolin.wu@eeoa.com
 * @LastEditTime: 2023-05-26 14:42:25
 * @FilePath: /vue2-dataV-echarts/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="text-[#ddd] bg-black w-full h-screen flex flex-col">
    <dv-full-screen-container>
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div class="p-4 flex flex-col" v-else>
        <!-- 大屏可视化-标题区域 -->
        <module-title></module-title>
        <!-- 大屏可视化-主体区域 -->
        <module-content></module-content>
        <!-- 大屏可视化-底部区域 -->
        <module-footer></module-footer>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ModuleTitle from "@/components/ModuleTitle.vue";
import ModuleContent from "@/components/ModuleContent.vue";
import ModuleFooter from "@/components/ModuleFooter.vue";
export default {
  name: "HomeView",
  components: {
    ModuleTitle,
    ModuleContent,
    ModuleFooter
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    init() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
