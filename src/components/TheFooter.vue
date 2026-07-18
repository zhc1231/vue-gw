<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-brand">
            <img src="https://oss.minjiangyouyue.com/mjlogo/logo02.png" alt="民匠有约" style="height:36px;border-radius:8px;">
            民匠有约
          </div>
          <p class="footer-desc">构建全民共享的智能化服务平台，连接每一次专业服务，让用工更简单，让服务更安心</p>
          <div class="footer-contact">
            <div class="footer-contact-row">
              <span class="icon icon-phone icon-sm"></span>
              <span class="footer-hotline">400-158-7877</span>
            </div>
            <div class="footer-tip">服务时间：周一至周日 9:00-21:00</div>
            <div><span class="icon icon-mail icon-sm"></span> service@minjiang.com</div>
            <div><span class="icon icon-map-pin icon-sm"></span> 杭州市钱塘区下沙街道学源街 1366 号</div>
          </div>
        </div>
        <div>
          <div class="footer-title">产品服务</div>
          <ul class="footer-links">
            <li><a href="javascript:void(0)" @click="go('/minjiang')">首页</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-emergency')">智慧应急</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-features')">产品功能</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-solutions')">行业方案</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-cases')">客户案例</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">解决方案</div>
          <ul class="footer-links">
            <li><a href="javascript:void(0)" @click="go('/minjiang-solutions')">零售连锁</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-solutions')">物流仓储</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-solutions')">物业管理</a></li>
            <li><a href="javascript:void(0)" @click="go('/minjiang-solutions')">生产制造</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">支持</div>
          <ul class="footer-links">
            <li><a href="javascript:void(0)" @click="go('/minjiang-help')">帮助中心</a></li>
            <li><a href="javascript:void(0)" @click="go('/agreement')">服务协议</a></li>
            <li><a href="javascript:void(0)" @click="go('/privacy')">隐私政策</a></li>
            <li><a href="javascript:void(0)" @click="go('/contact')">投诉建议</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">商务合作</div>
          <ul class="footer-links">
            <li>企业邮箱：bd@minjiang.com</li>
            <li>代理合作：agent@minjiang.com</li>
            <li>媒体合作：pr@minjiang.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2024 民匠有约 版权所有 浙江良巧匠网络科技</span>
        <div>
          <a href="javascript:void(0)">浙ICP备XXXXXXXX号-1</a>
          <a href="javascript:void(0)">浙公网安备XXXXXXXX号</a>
          <a href="javascript:void(0)">电子营业执照</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function go(path) {
  router.push(path)
}
</script>
