<template>
  <div class="topbar">
    <div class="topbar-inner">
      <div class="topbar-left">
        <span>欢迎来到民匠有约</span>
        <span class="topbar-divider">|</span>
        <a href="javascript:void(0)" @click="go('/service-center')">服务商中心</a>
        <a href="javascript:void(0)" @click="go('/developer-center')">开发者中心</a>
      </div>
      <div class="topbar-right">
        <a href="javascript:void(0)" @click="go('/')">返回主站</a>
        <span class="topbar-divider">|</span>
        <a href="javascript:void(0)" @click="go('/agreement')">服务协议</a>
        <a href="javascript:void(0)" @click="go('/privacy')">隐私政策</a>
        <span class="topbar-divider">|</span>
        <a href="javascript:void(0)">简体中文</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function go(path) {
  router.push(path)
}
</script>
