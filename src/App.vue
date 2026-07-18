<template>
  <TheTopbar />
  <TheNavbar />
  <router-view />
  <TheFooter />
  <FloatSidebar />
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import TheTopbar from './components/TheTopbar.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import FloatSidebar from './components/FloatSidebar.vue'
import { initGlobalScripts } from './assets/main.js'

const route = useRoute()

function reinit() {
  nextTick(() => {
    try { initGlobalScripts() } catch (e) { console.warn(e) }
  })
}

onMounted(reinit)
watch(() => route.path, reinit)
</script>
