import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)
app.use(router)

// 全局链接拦截：将 a[href="xxx.html"] 转为 SPA 内部导航
// 已知的 SPA 路由（对应 .html 页面）
const SPA_ROUTES = [
  'minjiang', 'minjiang-emergency', 'minjiang-features',
  'minjiang-solutions', 'minjiang-cases', 'minjiang-help',
  'agent', 'anxinyun'
];

document.addEventListener('click', (e) => {
  const link = e.target.closest && e.target.closest('a[href]')
  if (!link) return
  const href = link.getAttribute('href')
  if (!href) return
  if (/^(https?:|tel:|mailto:|javascript:)/i.test(href)) return
  // 纯锚点链接：交给浏览器处理（配合 router 的 scrollBehavior）
  if (href.startsWith('#')) return
  // 解析路径和 hash
  let pathPart = href
  let hashPart = ''
  const hashIdx = href.indexOf('#')
  if (hashIdx !== -1) {
    pathPart = href.substring(0, hashIdx)
    hashPart = href.substring(hashIdx)
  }
  // 去除 .html 后缀
  let clean = pathPart.replace(/\.html$/i, '')
  // 处理相对路径和绝对路径
  if (clean.startsWith('./') || clean.startsWith('../')) {
    const base = window.location.pathname
    const baseDir = base.substring(0, base.lastIndexOf('/') + 1)
    const url = new URL(clean, window.location.origin + baseDir)
    clean = url.pathname
  } else if (!clean.startsWith('/')) {
    clean = '/' + clean
  }
  // 只拦截已知的 SPA 路由
  const routeName = clean.replace(/^\//, '')
  if (SPA_ROUTES.includes(routeName)) {
    e.preventDefault()
    e.stopPropagation()
    router.push(clean + hashPart)
  }
  // 其他 .html 页面（如 login.html, contact.html 等）让浏览器正常跳转
}, true)

app.mount('#app')
