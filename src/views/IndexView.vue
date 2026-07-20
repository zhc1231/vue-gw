<template>
  <div class="index-page">
    <!-- Hero 区域 -->
    <section class="index-hero">
      <div class="index-hero-bg"></div>
      <div class="index-hero-content">
        <div class="index-hero-tag">企业数字化服务生态平台</div>
        <h1 class="index-hero-title">民匠有约<br><span class="highlight">让企业数字化更简单</span></h1>
        <p class="index-hero-desc">聚焦灵活用工、智慧应急、城市代理三大业务板块，为企业提供一站式数字化解决方案</p>
        <div class="index-hero-actions">
          <a href="javascript:void(0)" class="btn btn-white btn-large" @click="go('/minjiang')">立即了解</a>
          <a href="javascript:void(0)" class="btn btn-ghost-white btn-large" @click="go('/minjiang#contact')">联系我们</a>
        </div>
      </div>
    </section>

    <!-- 产品选择入口 -->
    <section class="product-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">选择产品入口</h2>
          <p class="section-desc">三大核心产品，满足不同场景的数字化需求</p>
        </div>
        <div class="product-grid">
          <div class="product-select-card" data-platform="minjiang" @click="go('/minjiang')">
            <div class="product-select-icon" style="background:linear-gradient(135deg,#1677FF,#0958D9);">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#fff" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3 class="product-select-title">民匠有约</h3>
            <p class="product-select-desc">灵活用工智能撮合平台，提供福运宝、如意宝两大结算方案，助力企业合规降本增效</p>
            <div class="product-select-tags">
              <span class="product-select-tag">灵活用工</span>
              <span class="product-select-tag">智能撮合</span>
              <span class="product-select-tag">合规结算</span>
            </div>
            <button class="product-select-btn" data-platform="minjiang">进入平台</button>
          </div>

          <div class="product-select-card" data-platform="anxinyun" @click="go('/anxinyun')">
            <div class="product-select-icon" style="background:linear-gradient(135deg,#722ED1,#531DAB);">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#fff" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <h3 class="product-select-title">民匠安心云</h3>
            <p class="product-select-desc">智慧应急安全管理平台，提供隐患排查、实时监控、应急处置等全方位安全服务</p>
            <div class="product-select-tags">
              <span class="product-select-tag">智慧应急</span>
              <span class="product-select-tag">安全管理</span>
              <span class="product-select-tag">实时监控</span>
            </div>
            <button class="product-select-btn" data-platform="anxinyun">进入平台</button>
          </div>

          <div class="product-select-card" data-platform="agent" @click="go('/agent')">
            <div class="product-select-icon" style="background:linear-gradient(135deg,#FA8C16,#D4380D);">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#fff" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <h3 class="product-select-title">城市代理</h3>
            <p class="product-select-desc">诚邀全国城市合伙人，共享数字化红利，携手开拓企业服务蓝海市场</p>
            <div class="product-select-tags">
              <span class="product-select-tag">渠道合作</span>
              <span class="product-select-tag">城市合伙</span>
              <span class="product-select-tag">共创共赢</span>
            </div>
            <button class="product-select-btn" data-platform="agent">进入平台</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-num">10000+</div>
            <div class="stat-label">服务企业</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">500+</div>
            <div class="stat-label">城市覆盖</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">99.9%</div>
            <div class="stat-label">服务可用性</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">7×24</div>
            <div class="stat-label">全天候支持</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function go(path) {
  router.push(path)
}
</script>

<style scoped>
.index-page {
  min-height: 100vh;
}

.index-hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 80px 20px;
}

.index-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1677FF 0%, #0958D9 50%, #0F52BA 100%);
  z-index: 0;
}

.index-hero-bg::before {
  content: '';
  position: absolute;
  width: 800px;
  height: 800px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
  top: -300px;
  right: -200px;
}

.index-hero-bg::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: rgba(255,255,255,0.04);
  border-radius: 50%;
  bottom: -200px;
  left: -200px;
}

.index-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 800px;
}

.index-hero-tag {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.index-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}

.index-hero-title .highlight {
  background: linear-gradient(135deg, #FFE58F, #FFD666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.index-hero-desc {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255,255,255,0.85);
  margin-bottom: 40px;
}

.index-hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.product-section {
  padding: 100px 20px;
  background: #f7f8fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  color: #1F2329;
  margin-bottom: 16px;
}

.section-desc {
  font-size: 16px;
  color: #646A73;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.product-select-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #E5E6EB;
  position: relative;
  overflow: hidden;
}

.product-select-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1677FF, #722ED1);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.product-select-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(22,119,255,0.12);
  border-color: transparent;
}

.product-select-card:hover::before {
  transform: scaleX(1);
}

.product-select-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.product-select-title {
  font-size: 24px;
  font-weight: 700;
  color: #1F2329;
  margin-bottom: 12px;
}

.product-select-desc {
  font-size: 14px;
  color: #646A73;
  line-height: 1.7;
  margin-bottom: 20px;
  min-height: 72px;
}

.product-select-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 28px;
}

.product-select-tag {
  padding: 4px 12px;
  background: #F2F3F5;
  border-radius: 100px;
  font-size: 12px;
  color: #646A73;
  font-weight: 500;
}

.product-select-btn {
  display: inline-block;
  padding: 12px 32px;
  background: linear-gradient(135deg, #1677FF, #0958D9);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.product-select-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22,119,255,0.3);
}

.stats-section {
  padding: 80px 20px;
  background: #fff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 20px;
}

.stat-num {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #1677FF, #722ED1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 15px;
  color: #646A73;
  font-weight: 500;
}

@media (max-width: 768px) {
  .index-hero-title {
    font-size: 36px;
  }
  .index-hero-desc {
    font-size: 15px;
  }
  .section-title {
    font-size: 30px;
  }
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
