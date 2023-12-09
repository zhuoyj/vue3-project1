vuetemnp
<script setup lang="ts">
defineOptions({
  name: "Dashboard",
  inheritAttrs: false,
});

import { useUserStore } from "@/store/modules/user";
import { useTransition, TransitionPresets } from "@vueuse/core";

const userStore = useUserStore();
const date: Date = new Date();

const greetings = computed(() => {
  const hours = date.getHours();
  if (hours >= 6 && hours < 8) {
    return "晨起披衣出草堂，轩窗已自喜微凉🌅！";
  } else if (hours >= 8 && hours < 12) {
    return "上午好，" + useUserStore().user.nickname + "！";
  } else if (hours >= 12 && hours < 18) {
    return "下午好，" + useUserStore().user.nickname + "！";
  } else if (hours >= 18 && hours < 24) {
    return "晚上好，" + useUserStore().user.nickname + "！";
  } else if (hours >= 0 && hours < 6) {
    return "偷偷向银河要了一把碎星，只等你闭上眼睛撒入你的梦中，晚安🌛！";
  }
});

const duration = 5000;

// 销售额
const amount = ref(0);
//让数值有过渡效果
const amountOutput = useTransition(amount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
amount.value = 2000;

// 访客数
const visitCount = ref(0);
const visitCountOutput = useTransition(visitCount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
visitCount.value = 2000;

// IP数
const dauCount = ref(0);
const dauCountOutput = useTransition(dauCount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
dauCount.value = 2000;

// 订单量
const orderCount = ref(0);
const orderCountOutput = useTransition(orderCount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
orderCount.value = 2000;
</script>

<template>
  <div class="dashboard-container">
    <el-card shadow="never">
      <el-row justify="space-between">
        <el-col :span="18">
          <div class="flex h-full items-center">
            <img
              class="w-20 h-20 mr-5 rounded-full"
              :src="userStore.user.avatar + '?imageView2/1/w/80/h/80'"
            />
            <div>
              <p>{{ greetings }}</p>
              <p class="text-sm text-gray">
                今日天气晴朗，气温在15℃至25℃之间，东南风。
              </p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="flex h-full items-center justify-around">
            <el-statistic :value="99">
              <template #title>
                <div class="flex items-center">
                  <svg-icon icon-class="message" size="20px" />
                  <span class="text-[16px] ml-1">消息</span>
                </div>
              </template>
            </el-statistic>

            <el-statistic :value="50">
              <template #title>
                <div class="flex items-center">
                  <svg-icon icon-class="todolist" size="20px" />
                  <span class="text-[16px] ml-1">待办</span>
                </div>
              </template>
              <template #suffix>/100</template>
            </el-statistic>

            <el-statistic :value="10">
              <template #title>
                <div class="flex items-center">
                  <svg-icon icon-class="project" size="20px" />
                  <span class="text-[16px] ml-1">项目</span>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="10" class="mt-3">
      <el-col :span="6">
        <el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span>访客数</span>
              <el-tag type="success">日</el-tag>
            </div>
          </template>
          <div>
            <div class="flex items-center justify-between mt-5">
              <span class="text-lg text-right">{{
                Math.round(visitCountOutput)
              }}</span>
              <svg-icon icon-class="visit" size="2em" />
            </div>
            <div
              class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
            >
              <span>总访客数</span>
              <span>{{ Math.round(visitCountOutput * 15) }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"
        ><el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span>访客数</span>
              <el-tag type="success">日</el-tag>
            </div>
          </template>
          <div>
            <div class="flex items-center justify-between mt-5">
              <span class="text-lg text-right">{{
                Math.round(dauCountOutput)
              }}</span>
              <svg-icon icon-class="ip" size="2em" />
            </div>
            <div
              class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
            >
              <span>总IP数</span>
              <span>{{ Math.round(dauCountOutput * 15) }}</span>
            </div>
          </div>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span>销售额</span>
              <el-tag>月</el-tag>
            </div>
          </template>
          <div>
            <div class="flex items-center justify-between mt-5">
              <span class="text-lg text-right">{{
                Math.round(amountOutput)
              }}</span>
              <svg-icon icon-class="money" size="2em" />
            </div>
            <div
              class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
            >
              <span>总销售额</span>
              <span>{{ Math.round(amountOutput) * 15 }}</span>
            </div>
          </div>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span>订单量</span>
              <el-tag type="danger">季</el-tag>
            </div>
          </template>
          <div>
            <div class="flex items-center justify-between mt-5">
              <span class="text-lg text-right">{{
                Math.round(orderCountOutput)
              }}</span>
              <svg-icon icon-class="order" size="2em" />
            </div>
            <div
              class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
            >
              <span>总订单量</span>
              <span>{{ Math.round(orderCountOutput * 15) }}</span>
            </div>
          </div>
        </el-card></el-col
      >
    </el-row>
    <el-row :gutter="10" class="mt-3">
      <el-col :sm="24" :lg="8" class="mb-2">
        <BarChart
          id="barChart"
          height="400px"
          width="100%"
          class="bg-[var(--el-bg-color-overlay)]"
        />
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="mb-2">
        <PieChart
          id="pieChart"
          height="400px"
          width="100%"
          class="bg-[var(--el-bg-color-overlay)]"
        />
      </el-col>

      <el-col :xs="24" :sm="12" :lg="8" class="mb-2">
        <RadarChart
          id="radarChart"
          height="400px"
          width="100%"
          class="bg-[var(--el-bg-color-overlay)]"
        />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
.dashboard-container {
  padding: 20px;
}
</style>
