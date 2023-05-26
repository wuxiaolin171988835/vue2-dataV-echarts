<!--
 * @Author: wuxiaolin xiaolin.wu@eeoa.com
 * @Date: 2023-05-26 13:52:19
 * @LastEditors: wuxiaolin xiaolin.wu@eeoa.com
 * @LastEditTime: 2023-05-26 13:57:27
 * @FilePath: /vue2-dataV-echarts/src/components/moduleTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
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
</template>
<script>
export default {
  name: "ModuleTitle",
  data() {
    return {};
  }
};
</script>
