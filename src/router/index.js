import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/minjiang' },
  { path: '/minjiang', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: '民匠有约 - 灵活用工数字化平台' } },
  { path: '/minjiang-emergency', name: 'emergency', component: () => import('../views/EmergencyView.vue'), meta: { title: '智慧应急 - 民匠有约' } },
  { path: '/minjiang-features', name: 'features', component: () => import('../views/FeaturesView.vue'), meta: { title: '服务方案 - 民匠有约' } },
  { path: '/minjiang-solutions', name: 'solutions', component: () => import('../views/SolutionsView.vue'), meta: { title: '行业方案 - 民匠有约' } },
  { path: '/minjiang-cases', name: 'cases', component: () => import('../views/CasesView.vue'), meta: { title: '客户案例 - 民匠有约' } },
  { path: '/minjiang-help', name: 'help', component: () => import('../views/HelpView.vue'), meta: { title: '帮助中心 - 民匠有约' } },
  { path: '/agent', name: 'agent', component: () => import('../views/AgentView.vue'), meta: { title: '代理商合作 - 民匠有约' } },
  { path: '/anxinyun', name: 'anxinyun', component: () => import('../views/AnxinyunView.vue'), meta: { title: '民匠安心云 - 民匠有约' } },
  { path: '/:pathMatch(.*)*', redirect: '/minjiang' }
]

const router = createRouter({
  history: createWebHistory('/vue-gw/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        const el = document.querySelector(to.hash)
        if (el) {
          resolve({ el: to.hash, behavior: 'smooth' })
        } else {
          let count = 0
          const interval = setInterval(() => {
            const el2 = document.querySelector(to.hash)
            if (el2 || count > 20) {
              clearInterval(interval)
              if (el2) resolve({ el: to.hash, behavior: 'smooth' })
              else resolve({ top: 0 })
            }
            count++
          }, 50)
        }
      })
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
