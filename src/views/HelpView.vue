<template>
  <!-- HERO -->
  <section class="page-hero">
    <div class="page-hero-inner">
      <h1 class="page-hero-title">
        帮助中心<br>
        <span class="page-hero-title-grad">常见问题解答</span>
      </h1>
      <p class="page-hero-desc">
        我们整理了用户最常遇到的问题，希望能帮助您快速了解和使用民匠有约
      </p>
    </div>
  </section>

  <!-- 常见问题 -->
  <section class="section">
    <div class="section-header reveal">
      <span class="section-tag">常见问题</span>
      <h2 class="section-title">你可能想知道的</h2>
    </div>
    <div class="help-wrap reveal">
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('active')">
          民匠有约是什么平台？
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div class="faq-a">民匠有约是专注于灵活用工的数字化服务平台，为企业提供从招聘、匹配、签约到结算的一站式用工解决方案，帮助企业降低用工成本，提升用工效率。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('active')">
          如何使用民匠有约发布用工需求？
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div class="faq-a">企业注册并完成实名认证后，即可在平台发布用工需求。填写岗位信息、用工时间、薪酬标准等，平台 AI 会自动匹配合适的候选人。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('active')">
          福运宝和如意宝有什么区别？
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div class="faq-a">福运宝是基础版，结算费率为 7.72%，无需额外费用。如意宝是 SVIP 版，支付 598 元/席位/年后，结算费率降至 6.72%，并享受更多增值服务。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('active')">
          结算周期是多久？
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div class="faq-a">支持 D+0 即时到账。任务验收通过后，系统自动触发结算，资金秒到服务者账户，无需等待。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('active')">
          如何保障用工质量？
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div class="faq-a">平台实行实名认证+技能认证双认证体系，建立信用评价体系，服务质量可追溯可评价。同时提供全程保险保障，最高 100 万保障。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="this.parentElement.classList.toggle('active')">
          资金安全如何保障？
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <div class="faq-a">平台资金由持牌金融机构托管，监管账户确保资金安全，全程透明可追溯，让每一笔资金都安全可靠。</div>
      </div>
    </div>
  </section>

  <!-- 联系我们 -->
  <section class="section section-soft-grad">
    <div class="section-header reveal">
      <span class="section-tag">联系我们</span>
      <h2 class="section-title">需要帮助？随时联系</h2>
      <p class="section-desc">我们的客服团队 7x24 小时为您服务</p>
    </div>
    <div class="contact-grid reveal">
      <div class="contact-card">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #1677FF, #4096FF); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#fff" stroke-width="2"/></svg>
        </div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">客服热线</h3>
        <p style="font-size: 14px; color: var(--text-secondary);">400-158-7877</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">周一至周日 9:00-21:00</p>
      </div>
      <div class="contact-card">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #722ED1, #9254DE); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#fff" stroke-width="2"/><polyline points="22,6 12,13 2,6" stroke="#fff" stroke-width="2"/></svg>
        </div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">企业邮箱</h3>
        <p style="font-size: 14px; color: var(--text-secondary);">service@minjiang.com</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">工作日 24 小时内回复</p>
      </div>
      <div class="contact-card">
        <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #13C2C2, #08979C); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#fff" stroke-width="2"/></svg>
        </div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">在线客服</h3>
        <p style="font-size: 14px; color: var(--text-secondary);">7x24 小时在线</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">即时响应您的咨询</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// 页面特定逻辑（如有）
</script>

<style>
:root {
  --brand-primary: #1677FF;
  --brand-primary-dark: #0958D9;
  --brand-primary-50: #E6F4FF;
  --brand-primary-100: #BAE0FF;
  --brand-grad: linear-gradient(135deg, #1677FF 0%, #4096FF 100%);
  --brand-grad-light: linear-gradient(180deg, #E6F4FF 0%, #FFFFFF 100%);
}
</style>

<style scoped>
.page-hero {
  position: relative;
  padding: 80px 24px 60px;
  background: var(--brand-grad-light);
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(22,119,255,0.1) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
}
.page-hero-inner {
  max-width: var(--container);
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: center;
}
.page-hero-title {
  font-size: 42px;
  font-weight: 800;
  color: var(--text);
  line-height: 1.2;
  margin-bottom: 16px;
}
.page-hero-title-grad {
  background: var(--brand-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.page-hero-desc {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 600px;
  margin: 0 auto 32px;
}
.brand-cta {
  background: var(--brand-grad);
}
.help-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}
.faq-item {
  background: #fff;
  border-radius: var(--radius-xl);
  border: 1px solid var(--gray-200);
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.3s;
}
.faq-item:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.faq-q {
  padding: 20px 24px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text);
}
.faq-a {
  padding: 0 24px 20px;
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 14px;
  display: none;
}
.faq-item.active .faq-a {
  display: block;
}
.faq-icon {
  transition: transform 0.3s;
}
.faq-item.active .faq-icon {
  transform: rotate(180deg);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}
.contact-card {
  background: #fff;
  border-radius: var(--radius-xl);
  padding: 32px;
  border: 1px solid var(--gray-200);
  text-align: center;
  transition: all 0.3s;
}
.contact-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-4px);
}
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .page-hero-title { font-size: 32px; }
}
</style>
