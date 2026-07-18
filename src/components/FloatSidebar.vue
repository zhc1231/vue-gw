<template>
  <!-- 悬浮侧边栏 -->
  <div class="float-sidebar">
    <div class="float-btn float-btn-green" data-panel="panel-kefu">
      <div class="float-btn-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </div>
      <div class="float-btn-text">客服</div>
    </div>
    <div class="float-btn float-btn-primary" data-panel="panel-youyue">
      <div class="float-btn-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
      </div>
      <div class="float-btn-text">有约</div>
    </div>
    <div class="float-btn float-btn-dark" data-panel="panel-anxinyun">
      <div class="float-btn-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
      </div>
      <div class="float-btn-text">安心云</div>
    </div>
    <div class="float-btn float-btn-orange" data-panel="panel-daili">
      <div class="float-btn-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      </div>
      <div class="float-btn-text">代理</div>
    </div>
    <div class="float-btn float-btn-primary" @click="go('/minjiang')">
      <div class="float-btn-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </div>
      <div class="float-btn-text">首页</div>
    </div>
  </div>

  <!-- 悬浮面板 -->
  <div class="float-panel" id="panel-kefu">
    <div class="float-panel-header float-panel-header-green">
      <span>在线客服</span>
      <span class="float-panel-status"><span class="float-panel-status-dot"></span>在线</span>
    </div>
    <div class="float-panel-body">
      <div class="float-panel-qr">
        <div class="float-panel-qr-box">
          <img src="https://oss.minjiangyouyue.com/mjlogo/ewm.png" alt="客服二维码" style="width:100%;height:100%;object-fit:contain;border-radius:14px;">
        </div>
        <div class="float-panel-qr-tip">扫码添加客服微信</div>
      </div>
      <div class="float-panel-links">
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/consult-chat')">
          <div class="float-panel-link-icon" style="background:#E6F4FF;color:#1677FF;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">在线咨询</div>
            <div class="float-panel-link-desc">即时对话，快速响应</div>
          </div>
        </a>
        <a href="tel:400-888-6666" class="float-panel-link">
          <div class="float-panel-link-icon" style="background:#FFF7E6;color:#FA8C16;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">电话咨询</div>
            <div class="float-panel-link-desc">400-888-6666</div>
          </div>
        </a>
      </div>
      <div class="float-panel-info">
        <div class="float-panel-info-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>工作日 9:00-18:00</span>
        </div>
      </div>
    </div>
  </div>

  <div class="float-panel" id="panel-youyue">
    <div class="float-panel-header float-panel-header-blue">
      <span>民匠有约</span>
    </div>
    <div class="float-panel-body">
      <p style="font-size:13px;color:#595959;line-height:1.6;margin-bottom:12px;">灵活用工智能撮合平台，提供福运宝、如意宝两大结算方案</p>
      <div class="float-panel-links">
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/minjiang')">
          <div class="float-panel-link-icon" style="background:#E6F4FF;color:#1677FF;">约</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">了解产品</div>
            <div class="float-panel-link-desc">灵活用工解决方案</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/minjiang#fuyunbao')">
          <div class="float-panel-link-icon" style="background:#F0F5FF;color:#2F54EB;">福</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">福运宝</div>
            <div class="float-panel-link-desc">即时结算方案</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/minjiang#ruyibao')">
          <div class="float-panel-link-icon" style="background:#F9F0FF;color:#722ED1;">如</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">如意宝</div>
            <div class="float-panel-link-desc">周期结算方案</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/minjiang-emergency')">
          <div class="float-panel-link-icon" style="background:#FFF2F0;color:#F53F3F;">急</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">智慧应急</div>
            <div class="float-panel-link-desc">15分钟极速响应</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="float-panel" id="panel-anxinyun">
    <div class="float-panel-header float-panel-header-dark">
      <span>民匠安心云</span>
    </div>
    <div class="float-panel-body">
      <p style="font-size:13px;color:#595959;line-height:1.6;margin-bottom:12px;">企业数字化管理平台，审批考勤、组织架构、数据分析一站式搞定</p>
      <div class="float-panel-links">
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/anxinyun')">
          <div class="float-panel-link-icon" style="background:#E6F0FF;color:#0F52BA;">云</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">了解产品</div>
            <div class="float-panel-link-desc">企业管理解决方案</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/anxinyun#features')">
          <div class="float-panel-link-icon" style="background:#E6FFFB;color:#13C2C2;">功</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">功能特性</div>
            <div class="float-panel-link-desc">审批考勤组织架构</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/anxinyun#pricing')">
          <div class="float-panel-link-icon" style="background:#FFF7E6;color:#FA8C16;">价</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">版本价格</div>
            <div class="float-panel-link-desc">多版本可选</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="float-panel" id="panel-daili">
    <div class="float-panel-header float-panel-header-orange">
      <span>城市代理合伙人</span>
    </div>
    <div class="float-panel-body">
      <p style="font-size:13px;color:#595959;line-height:1.6;margin-bottom:12px;">一城一代理独家权益，全方位总部扶持，零经验也能轻松创业</p>
      <div class="float-panel-links">
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/agent')">
          <div class="float-panel-link-icon" style="background:#FFF7E6;color:#FA8C16;">代</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">了解计划</div>
            <div class="float-panel-link-desc">合伙人加盟政策</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/agent#cases')">
          <div class="float-panel-link-icon" style="background:#F6FFED;color:#52C41A;">案</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">合伙人案例</div>
            <div class="float-panel-link-desc">成功故事分享</div>
          </div>
        </a>
        <a href="javascript:void(0)" class="float-panel-link" @click="go('/agent#join')">
          <div class="float-panel-link-icon" style="background:#FFF0F6;color:#EB2F96;">加</div>
          <div class="float-panel-link-text">
            <div class="float-panel-link-title">立即加盟</div>
            <div class="float-panel-link-desc">申请成为合伙人</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- 退出登录确认弹窗 -->
  <div class="modal-overlay" id="logoutModal">
    <div class="modal">
      <div class="modal-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <h3 class="modal-title">确认退出</h3>
      <p class="modal-desc">退出后您需要重新登录才能继续使用平台功能</p>
      <div class="modal-actions">
        <button class="btn btn-default" id="logoutCancel">取消</button>
        <button class="btn-danger" id="logoutConfirm">确认退出</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function go(path) {
  router.push(path)
}
</script>
