import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)
app.use(router)

// 全局链接拦截：将 a[href="xxx.html"] 转为 SPA 内部导航
document.addEventListener('click', (e) => {
  const link = e.target.closest && e.target.closest('a[href]')
  if (!link) return
  const href = link.getAttribute('href')
  if (!href) return
  if (/^(https?:|tel:|mailto:|#|javascript:)/i.test(href)) return
  const clean = href.replace(/\.html$/i, '')
  if (/^[a-zA-Z0-9_-]+(#.*)?$/.test(clean)) {
    e.preventDefault()
    e.stopPropagation()
    router.push('/' + clean)
  }
}, true)

app.mount('#app')
