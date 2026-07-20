import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)
app.use(router)

// base 路径（来自 vite.config.js 的 base 配置，构建后为 '/vue-gw/'）
const BASE = import.meta.env.BASE_URL

// 全局链接拦截：将 a[href="xxx.html"] 转为 SPA 内部导航
// 已知的 SPA 路由（对应 .html 页面）
const SPA_ROUTES = [
  'index', 'minjiang', 'minjiang-emergency', 'minjiang-features',
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
  const routeName = clean.replace(/^\//, '').replace(/^vue-gw\//, '')
  if (SPA_ROUTES.includes(routeName)) {
    e.preventDefault()
    e.stopPropagation()
    // index 路由跳转到根路径
    const targetPath = routeName === 'index' ? '/' : ('/' + routeName + hashPart)
    router.push(targetPath)
    return
  }
  // 其他 .html 页面（如 login.html, contact.html 等）
  // 如果是相对路径，转换为基于 base 的绝对路径，避免在子路径下解析错误
  // 例如在 /vue-gw/minjiang/ 下点击 login.html 会被解析为 /vue-gw/minjiang/login.html
  if (!pathPart.startsWith('/') && !/^(https?:|tel:|mailto:|javascript:)/i.test(pathPart)) {
    const fileName = pathPart.split('/').pop() // 取文件名部分，忽略任何相对目录
    e.preventDefault()
    e.stopPropagation()
    window.location.href = BASE + fileName + hashPart
  }
}, true)

app.mount('#app')
