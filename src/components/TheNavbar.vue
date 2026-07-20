<template>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <div class="nav-left">
        <a href="javascript:void(0)" class="nav-brand" @click="go('/')">
          <img src="https://oss.minjiangyouyue.com/mjlogo/logo02.png" alt="民匠有约" style="height:36px;border-radius:8px;">
          民匠有约
        </a>
        <div class="nav-links" v-if="isIndexPage">
          <a href="javascript:void(0)" class="nav-link" @click="go('/minjiang')">民匠有约</a>
          <a href="javascript:void(0)" class="nav-link" @click="go('/anxinyun')">民匠安心云</a>
          <a href="javascript:void(0)" class="nav-link" @click="go('/agent')">城市代理</a>
        </div>
        <div class="nav-links" v-else-if="isMinjiang">
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'home' }" @click="go('/minjiang')">首页</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'emergency' }" @click="go('/minjiang-emergency')">智慧应急</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'features' }" @click="go('/minjiang-features')">服务方案</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'solutions' }" @click="go('/minjiang-solutions')">行业方案</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'cases' }" @click="go('/minjiang-cases')">客户案例</a>
          <a href="javascript:void(0)" class="nav-link" :class="{ active: route.name === 'help' }" @click="go('/minjiang-help')">帮助中心</a>
        </div>
        <div class="nav-links" v-else>
          <a href="javascript:void(0)" class="nav-link" @click="go('/minjiang')">民匠有约</a>
          <a href="javascript:void(0)" class="nav-link" @click="go('/anxinyun')">民匠安心云</a>
          <a href="javascript:void(0)" class="nav-link" @click="go('/agent')">城市代理</a>
        </div>
      </div>
      <div class="nav-right" id="navRight"></div>
    </div>
  </nav>
</template>

<script setup>
import { computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { initGlobalScripts, refreshNavRight } from '../assets/main.js'

const route = useRoute()
const router = useRouter()

const isIndexPage = computed(() => route.name === 'index')
const isMinjiang = computed(() => ['home', 'emergency', 'features', 'solutions', 'cases', 'help'].includes(route.name))

function go(path) {
  router.push(path)
}

function reinitNav() {
  nextTick(() => {
    try {
      refreshNavRight()
    } catch (e) {
      console.warn(e)
    }
  })
}

onMounted(reinitNav)
watch(() => route.path, reinitNav)
</script>
