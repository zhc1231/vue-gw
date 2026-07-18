<template>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <div class="nav-left">
        <a href="javascript:void(0)" class="nav-brand" @click="go('/minjiang')">
          <img src="https://oss.minjiangyouyue.com/mjlogo/logo02.png" alt="民匠有约" style="height:36px;border-radius:8px;">
          民匠有约
        </a>
        <div class="nav-links">
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'home' }" @click="go('/minjiang')">首页</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'emergency' }" @click="go('/minjiang-emergency')">智慧应急</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'features' }" @click="go('/minjiang-features')">服务方案</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'solutions' }" @click="go('/minjiang-solutions')">行业方案</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'cases' }" @click="go('/minjiang-cases')">客户案例</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'help' }" @click="go('/minjiang-help')">帮助中心</a>
        </div>
      </div>
      <div class="nav-right" id="navRight"></div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
function go(path) {
  router.push(path)
}
</script>
