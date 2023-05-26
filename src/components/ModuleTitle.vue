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
