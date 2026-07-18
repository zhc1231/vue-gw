<template>
  <!-- HERO -->
  <section class="page-hero">
    <div class="page-hero-inner">
      <div class="reveal">
        <span class="page-hero-tag">
          <span class="icon icon-shield icon-sm"></span>
          企业数字化安全管理平台
        </span>
        <h1 class="page-hero-title">
          让企业管理<br>
          <span class="page-hero-title-grad">更智能更高效</span>
        </h1>
        <p class="page-hero-desc">
          民匠安心云为企业提供OA办公、审批流程、考勤打卡、任务管理等一站式内部管理解决方案，助力企业高效协同
        </p>
        <div class="page-hero-actions">
          <a href="login.html" class="btn btn-white btn-large" style="font-weight: 600;">免费试用</a>
          <a href="#features" class="btn btn-ghost-white btn-large">了解功能</a>
        </div>
        <div class="page-hero-stat-row">
          <div class="page-hero-stat-item">
            <div class="page-hero-stat-num">500+</div>
            <div class="page-hero-stat-label">服务企业</div>
          </div>
          <div class="page-hero-stat-item">
            <div class="page-hero-stat-num">10万+</div>
            <div class="page-hero-stat-label">管理员工</div>
          </div>
          <div class="page-hero-stat-item">
            <div class="page-hero-stat-num">40%</div>
            <div class="page-hero-stat-label">效率提升</div>
          </div>
        </div>
      </div>

      <div class="page-hero-visual reveal">
        <div class="hero-mockup hero-mockup-main">
          <div class="mockup-header">
            <div class="mockup-title">
              <span class="icon icon-users icon-sm icon-primary-brand"></span>
              工作台
            </div>
            <span class="mockup-badge">实时</span>
          </div>
          <div class="mockup-stats">
            <div class="mockup-stat-card">
              <div class="mockup-stat-num">156</div>
              <div class="mockup-stat-label">待办审批</div>
            </div>
            <div class="mockup-stat-card">
              <div class="mockup-stat-num" style="color: var(--green);">98%</div>
              <div class="mockup-stat-label">考勤出勤</div>
            </div>
          </div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">近30天审批处理趋势</div>
          <div class="mockup-chart">
            <div class="mockup-bar" style="height: 45%;"></div>
            <div class="mockup-bar primary" style="height: 60%;"></div>
            <div class="mockup-bar" style="height: 50%;"></div>
            <div class="mockup-bar primary" style="height: 72%;"></div>
            <div class="mockup-bar" style="height: 65%;"></div>
            <div class="mockup-bar primary" style="height: 82%;"></div>
            <div class="mockup-bar" style="height: 75%;"></div>
            <div class="mockup-bar primary" style="height: 88%;"></div>
            <div class="mockup-bar" style="height: 80%;"></div>
            <div class="mockup-bar primary" style="height: 95%;"></div>
          </div>
        </div>
        <div class="mockup-float mockup-float-1">
          <div class="mockup-float-icon cyan">
            <span class="icon icon-user-plus icon-sm"></span>
          </div>
          <div>
            <div class="mockup-float-title">审批待办</div>
            <div class="mockup-float-sub">12项待处理</div>
          </div>
        </div>
        <div class="mockup-float mockup-float-2">
          <div class="mockup-float-icon green">
            <span class="icon icon-trophy icon-sm"></span>
          </div>
          <div>
            <div class="mockup-float-title">任务完成</div>
            <div class="mockup-float-sub">本周35/40</div>
          </div>
        </div>
        <a href="#" class="nav-enter-system" id="navEnterSystem">进入系统</a>
      </div>
    </div>
  </section>

  <!-- 核心功能 -->
  <section class="section" id="features">
    <div class="section-header reveal">
      <span class="section-tag">核心功能</span>
      <h2 class="section-title">让企业管理 <span class="section-title-grad" style="background: linear-gradient(135deg, #0F52BA, #1E90FF); -webkit-background-clip: text;">数字化智能化</span></h2>
      <p class="section-desc">安心云依托云计算与大数据技术，为企业打造全方位的数字化内部管理体系</p>
    </div>
    <div class="product-matrix">
      <div class="product-card reveal" style="--accent: #0F52BA; --accent-bg: #EEF4FF;">
        <div class="product-card-icon"><span class="icon icon-file-text"></span></div>
        <div class="product-card-title">审批流程</div>
        <div class="product-card-text">自定义审批模板，灵活配置审批节点，移动端随时审批，提升办公效率</div>
        <span class="product-card-link">了解详情 <span class="icon icon-arrow-right icon-sm"></span></span>
      </div>
      <div class="product-card reveal" style="--accent: #1677FF; --accent-bg: #E6F4FF;">
        <div class="product-card-icon"><span class="icon icon-clock"></span></div>
        <div class="product-card-title">考勤打卡</div>
        <div class="product-card-text">支持GPS定位打卡、WiFi打卡、人脸打卡，自动生成考勤报表</div>
        <span class="product-card-link">了解详情 <span class="icon icon-arrow-right icon-sm"></span></span>
      </div>
      <div class="product-card reveal" style="--accent: #722ED1; --accent-bg: #F0E6FF;">
        <div class="product-card-icon"><span class="icon icon-users"></span></div>
        <div class="product-card-title">组织架构</div>
        <div class="product-card-text">可视化组织架构图，员工档案管理，企业通讯录，人员异动全流程管理</div>
        <span class="product-card-link">了解详情 <span class="icon icon-arrow-right icon-sm"></span></span>
      </div>
      <div class="product-card reveal" style="--accent: #FA8C16; --accent-bg: #FFF7E6;">
        <div class="product-card-icon"><span class="icon icon-check-square"></span></div>
        <div class="product-card-title">任务管理</div>
        <div class="product-card-text">任务创建、分配、跟进、汇报，支持项目看板，团队协作更高效</div>
        <span class="product-card-link">了解详情 <span class="icon icon-arrow-right icon-sm"></span></span>
      </div>
      <div class="product-card reveal" style="--accent: #52C41A; --accent-bg: #F6FFED;">
        <div class="product-card-icon"><span class="icon icon-folder"></span></div>
        <div class="product-card-title">文件管理</div>
        <div class="product-card-text">企业知识库、文档在线预览、权限分级管理，文件安全有保障</div>
        <span class="product-card-link">了解详情 <span class="icon icon-arrow-right icon-sm"></span></span>
      </div>
      <div class="product-card reveal" style="--accent: #EB2F96; --accent-bg: #FFF0F6;">
        <div class="product-card-icon"><span class="icon icon-bell"></span></div>
        <div class="product-card-title">公告通知</div>
        <div class="product-card-text">企业公告发布、通知推送、阅读回执，确保信息传达无遗漏</div>
        <span class="product-card-link">了解详情 <span class="icon icon-arrow-right icon-sm"></span></span>
      </div>
    </div>
  </section>

  <!-- 技术对接说明 -->
  <section class="section section-soft-grad">
    <div class="section-header reveal">
      <span class="section-tag">技术对接</span>
      <h2 class="section-title">第三方系统与应用 <span class="section-title-grad" style="background: linear-gradient(135deg, #0F52BA, #1E90FF); -webkit-background-clip: text;">无缝集成</span></h2>
      <p class="section-desc">民匠安心云支持与各类第三方系统对接，实现数据互通和业务联动</p>
    </div>
    <div class="feature-grid" style="max-width: 1200px; margin: 0 auto;">
      <div class="feature-card cyan reveal">
        <div class="feature-icon"><span class="icon icon-message-circle"></span></div>
        <div class="feature-title">钉钉/企微对接</div>
        <div class="feature-text">与钉钉、企业微信无缝对接，同步组织架构，消息互通，统一办公入口</div>
      </div>
      <div class="feature-card reveal">
        <div class="feature-icon"><span class="icon icon-mail"></span></div>
        <div class="feature-title">企业邮箱集成</div>
        <div class="feature-text">支持主流企业邮箱集成，审批通知、任务提醒自动邮件推送</div>
      </div>
      <div class="feature-card purple reveal">
        <div class="feature-icon"><span class="icon icon-calendar"></span></div>
        <div class="feature-title">会议系统对接</div>
        <div class="feature-text">支持腾讯会议、钉钉会议等对接，一键发起会议，同步会议纪要</div>
      </div>
    </div>
  </section>

  <!-- 功能展示1 -->
  <section class="section section-soft-grad">
    <div class="showcase">
      <div class="reveal">
        <span class="section-tag">审批中心</span>
        <h3 class="showcase-content-title">灵活配置 <br><span class="section-title-grad" style="background: linear-gradient(135deg, #0F52BA, #1E90FF); -webkit-background-clip: text;">高效审批</span></h3>
        <p class="showcase-content-text">自定义审批流程模板，支持会签、或签、转办等多种审批模式，让审批更灵活、更高效</p>
        <ul class="showcase-list">
          <li>可视化流程设计器，拖拽配置审批节点</li>
          <li>支持请假、报销、用车、采购等多种审批类型</li>
          <li>会签、或签、转办、加签等灵活审批模式</li>
          <li>移动端随时审批，待办事项实时提醒</li>
        </ul>
        <a href="login.html" class="btn btn-primary" style="--primary: var(--brand-primary);">立即体验 <span class="icon icon-arrow-right icon-sm"></span></a>
      </div>
      <div class="showcase-visual reveal" style="background: linear-gradient(135deg, #EEF4FF, #D6E4FF);">
        <div style="width:260px;background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(15,82,186,0.12);padding:20px;display:flex;flex-direction:column;gap:12px;position:relative;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
            <div style="font-size:14px;font-weight:700;color:#1F1F1F;">请假申请</div>
            <span style="padding:3px 8px;background:#E6F4FF;color:#0F52BA;border-radius:100px;font-size:10px;font-weight:500;">审批中</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#8C8C8C;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8C8C8C" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            2024-07-15 至 2024-07-17
          </div>
          <div style="font-size:11px;color:#8C8C8C;margin-bottom:4px;">事由：年休假</div>
          <!-- 审批流程 -->
          <div style="display:flex;align-items:flex-start;gap:8px;margin-top:4px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <div style="width:24px;height:24px;border-radius:50%;background:#0F52BA;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">1</div>
              <div style="width:2px;height:20px;background:#0F52BA;"></div>
              <div style="width:24px;height:24px;border-radius:50%;background:#0F52BA;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">2</div>
              <div style="width:2px;height:20px;background:#E5E6EB;"></div>
              <div style="width:24px;height:24px;border-radius:50%;background:#E5E6EB;color:#8C8C8C;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;">3</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:16px;padding-top:2px;">
              <div>
                <div style="font-size:11px;font-weight:600;color:#1F1F1F;">提交申请</div>
                <div style="font-size:9px;color:#8C8C8C;">2024-07-15 09:30</div>
              </div>
              <div>
                <div style="font-size:11px;font-weight:600;color:#1F1F1F;">主管审批</div>
                <div style="font-size:9px;color:#8C8C8C;">王经理 · 2024-07-15 10:15</div>
              </div>
              <div>
                <div style="font-size:11px;font-weight:600;color:#8C8C8C;">人事备案</div>
                <div style="font-size:9px;color:#8C8C8C;">待处理</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 功能展示2 -->
  <section class="section">
    <div class="showcase">
      <div class="showcase-visual reveal" style="background: linear-gradient(135deg, #E6F4FF, #BAE0FF); order: 2;">
        <div style="width:260px;background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(15,82,186,0.12);padding:20px;display:flex;flex-direction:column;gap:12px;position:relative;align-items:center;">
          <div style="font-size:13px;font-weight:700;color:#1F1F1F;">今日考勤</div>
          <div style="font-size:32px;font-weight:800;color:#0F52BA;font-variant-numeric:tabular-nums;">08:58</div>
          <div style="font-size:11px;color:#8C8C8C;margin-bottom:4px;">2024年7月15日 星期一</div>
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#0F52BA,#1E90FF);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;box-shadow:0 4px 16px rgba(15,82,186,0.3);cursor:pointer;">打卡</div>
          <div style="font-size:10px;color:#52C41A;display:flex;align-items:center;gap:4px;">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#52C41A" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            已进入考勤范围
          </div>
          <!-- 打卡记录 -->
          <div style="width:100%;border-top:1px solid #E5E6EB;padding-top:12px;margin-top:4px;">
            <div style="font-size:10px;color:#8C8C8C;margin-bottom:8px;">今日记录</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="width:6px;height:6px;border-radius:50%;background:#52C41A;"></div>
                  <span style="color:#1F1F1F;">上班打卡</span>
                </div>
                <span style="color:#0F52BA;font-weight:600;">08:58:32</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="width:6px;height:6px;border-radius:50%;background:#E5E6EB;"></div>
                  <span style="color:#8C8C8C;">下班打卡</span>
                </div>
                <span style="color:#8C8C8C;">--:--:--</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal" style="order: 1;">
        <span class="section-tag">智能考勤</span>
        <h3 class="showcase-content-title">多方式 <br><span class="section-title-grad" style="background: linear-gradient(135deg, #0F52BA, #1E90FF); -webkit-background-clip: text;">考勤管理</span></h3>
        <p class="showcase-content-text">支持多种打卡方式，智能排班，自动统计考勤数据，让考勤管理更轻松</p>
        <ul class="showcase-list">
          <li>GPS定位打卡、WiFi打卡、人脸打卡多种方式</li>
          <li>智能排班系统，支持轮班、弹性工作制</li>
          <li>自动统计考勤数据，一键导出报表</li>
          <li>异常考勤自动提醒，请假加班一键申请</li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="--primary: var(--brand-primary);">咨询方案 <span class="icon icon-arrow-right icon-sm"></span></a>
      </div>
    </div>
  </section>

  <!-- 应用场景 -->
  <section class="section section-soft-grad" id="scenarios">
    <div class="section-header reveal">
      <span class="section-tag">应用场景</span>
      <h2 class="section-title">多场景 <span class="section-title-grad" style="background: linear-gradient(135deg, #0F52BA, #1E90FF); -webkit-background-clip: text;">内部管理</span></h2>
      <p class="section-desc">覆盖企业内部管理全场景，助力企业高效协同</p>
    </div>
    <div class="feature-grid">
      <div class="feature-card cyan reveal">
        <div class="feature-icon"><span class="icon icon-building"></span></div>
        <div class="feature-title">日常办公审批</div>
        <div class="feature-text">请假、报销、采购、用车等各类审批流程线上化，提升审批效率</div>
      </div>
      <div class="feature-card reveal">
        <div class="feature-icon"><span class="icon icon-users"></span></div>
        <div class="feature-title">人事行政管理</div>
        <div class="feature-text">员工档案、入职离职、考勤排班、薪资核算，人事管理一站式解决</div>
      </div>
      <div class="feature-card purple reveal">
        <div class="feature-icon"><span class="icon icon-check-square"></span></div>
        <div class="feature-title">项目任务协作</div>
        <div class="feature-text">任务分配、进度跟踪、团队协作，项目管理井井有条</div>
      </div>
      <div class="feature-card green reveal">
        <div class="feature-icon"><span class="icon icon-folder"></span></div>
        <div class="feature-title">企业知识管理</div>
        <div class="feature-text">文档存储、知识库建设、文件共享，企业知识资产安全沉淀</div>
      </div>
      <div class="feature-card orange reveal">
        <div class="feature-icon"><span class="icon icon-bell"></span></div>
        <div class="feature-title">内部信息传达</div>
        <div class="feature-text">公告发布、通知推送、阅读回执，确保信息传达到位</div>
      </div>
      <div class="feature-card pink reveal">
        <div class="feature-icon"><span class="icon icon-calendar"></span></div>
        <div class="feature-title">会议资源管理</div>
        <div class="feature-text">会议室预定、会议通知、会议纪要，会议管理高效有序</div>
      </div>
    </div>
  </section>

  <!-- 核心优势数据 -->
  <section class="section">
    <div class="stats-row reveal">
      <div class="stat-item">
        <div class="stat-num">40%</div>
        <div class="stat-label">审批效率提升</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">60%</div>
        <div class="stat-label">纸质单据减少</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">50%</div>
        <div class="stat-label">沟通成本降低</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">99.9%</div>
        <div class="stat-label">系统可用性</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">100万+</div>
        <div class="stat-label">保险保障额度</div>
      </div>
    </div>
  </section>

  <!-- 平台优势 -->
  <section class="section section-soft-grad">
    <div class="section-header reveal">
      <span class="section-tag">平台优势</span>
      <h2 class="section-title">为什么选择 <span class="section-title-grad" style="background: linear-gradient(135deg, #1677FF, #4096FF); -webkit-background-clip: text;">民匠安心云</span></h2>
      <p class="section-desc">已对接浙江省税务局，为企业提供合规、安全、高效的一站式灵活用工税务服务</p>
    </div>
    <div class="product-matrix" style="max-width: 1200px; margin: 0 auto;">
      <div class="product-card reveal" style="--accent: #1677FF; --accent-bg: #E6F4FF;">
        <div class="product-card-icon"><span class="icon icon-file-text"></span></div>
        <div class="product-card-title">合规开票</div>
        <div class="product-card-text">企业按实际用工场景支付报酬后，可开具增值税普通发票，流程合规透明</div>
      </div>
      <div class="product-card reveal" style="--accent: #13C2C2; --accent-bg: #E6FFFB;">
        <div class="product-card-icon"><span class="icon icon-shield"></span></div>
        <div class="product-card-title">税务合规</div>
        <div class="product-card-text">增值税及附加税由个人缴纳，企业申报个税，符合国家税收政策要求</div>
      </div>
      <div class="product-card reveal" style="--accent: #722ED1; --accent-bg: #F0E6FF;">
        <div class="product-card-icon"><span class="icon icon-award"></span></div>
        <div class="product-card-title">政府对接</div>
        <div class="product-card-text">已与浙江省税务局系统完成对接，数据实时同步，申报便捷高效</div>
      </div>
      <div class="product-card reveal" style="--accent: #FA8C16; --accent-bg: #FFF7E6;">
        <div class="product-card-icon"><span class="icon icon-dollar"></span></div>
        <div class="product-card-title">成本优化</div>
        <div class="product-card-text">灵活用工模式帮助企业优化用工结构，降低社保等固定用工成本</div>
      </div>
      <div class="product-card reveal" style="--accent: #52C41A; --accent-bg: #F6FFED;">
        <div class="product-card-icon"><span class="icon icon-check"></span></div>
        <div class="product-card-title">完税凭证</div>
        <div class="product-card-text">平台提供完税凭证查询服务，确保每一笔收入都有据可查</div>
      </div>
      <div class="product-card reveal" style="--accent: #EB2F96; --accent-bg: #FFF0F6;">
        <div class="product-card-icon"><span class="icon icon-users"></span></div>
        <div class="product-card-title">专业服务</div>
        <div class="product-card-text">专业财税团队提供申报指引和计算辅助，让企业用工无后顾之忧</div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section" id="faq">
    <div class="section-header reveal">
      <span class="section-tag">常见问题</span>
      <h2 class="section-title">你可能想知道</h2>
    </div>
    <div class="faq-wrap reveal">
      <div class="faq-item">
        <div class="faq-q">民匠安心云适用于哪些企业？</div>
        <div class="faq-a">民匠安心云适用于所有有安全管理需求的企业，特别是建筑工地、物流仓储、生产制造、户外作业等场景。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">如何接入视频监控？</div>
        <div class="faq-a">民匠安心云支持主流摄像头品牌接入，企业只需提供摄像头 RTSP 地址或 SDK，即可快速接入平台。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">AI 识别准确率如何？</div>
        <div class="faq-a">民匠安心云 AI 识别模型经过海量数据训练，识别准确率超过 95%，持续迭代优化中。</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">保险理赔需要多久？</div>
        <div class="faq-a">在线提交理赔材料后，最快 24 小时完成审核并到账，全程数字化操作。</div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="cta-banner brand-cta reveal">
      <div class="cta-inner">
        <h2 class="cta-title">开启企业安全管理新体验</h2>
        <p class="cta-desc">立即登录民匠安心云，体验数字化安全管理带来的效率提升</p>
        <div class="cta-actions">
          <a href="login.html" class="btn btn-white btn-large">免费试用</a>
          <a href="contact.html" class="btn btn-ghost-white btn-large">预约演示</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 页面特定逻辑（如有）
</script>

<style>
:root {
    --brand-primary: #0F52BA;
    --brand-primary-dark: #0A3A7D;
    --brand-primary-50: #EEF4FF;
    --brand-primary-100: #D6E4FF;
    --brand-grad: linear-gradient(135deg, #0F52BA 0%, #1E90FF 100%);
    --brand-grad-light: linear-gradient(135deg, #EEF4FF 0%, #FFFFFF 60%, #F5F8FF 100%);
    --brand-grad-hero: linear-gradient(135deg, #0A3A7D 0%, #0F52BA 40%, #4169E1 100%);
  }
</style>

<style scoped>
.page-hero {
    position: relative;
    padding: 100px 24px 120px;
    background: var(--brand-grad-hero);
    overflow: hidden;
  }
  .page-hero::before {
    content: '';
    position: absolute;
    top: -300px;
    right: -150px;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
    border-radius: 50%;
    pointer-events: none;
  }
  .page-hero::after {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -150px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    border-radius: 50%;
    pointer-events: none;
  }
  .page-hero-inner {
    max-width: var(--container);
    margin: 0 auto;
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .page-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 20px;
    background: rgba(255,255,255,0.2);
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: var(--radius-full);
    margin-bottom: 24px;
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(4px);
  }
  .page-hero-title {
    font-size: 52px;
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -1.5px;
  }
  .page-hero-title-grad {
    background: linear-gradient(135deg, #E6FFFB 0%, #FFFFFF 50%, #B5F5EC 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .page-hero-desc {
    font-size: 18px;
    color: rgba(255,255,255,0.85);
    line-height: 1.8;
    margin-bottom: 40px;
    max-width: 520px;
  }
  .page-hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
  }
  .page-hero-stat-row {
    display: flex;
    gap: 40px;
  }
  .page-hero-stat-item {
    text-align: left;
  }
  .page-hero-stat-num {
    font-size: 36px;
    font-weight: 900;
    color: #fff;
    line-height: 1;
    margin-bottom: 8px;
  }
  .page-hero-stat-label {
    font-size: 14px;
    color: rgba(255,255,255,0.7);
  }

  .page-hero-visual {
    position: relative;
    height: 420px;
  }
  .hero-mockup {
    position: absolute;
    background: #fff;
    border-radius: var(--radius-2xl);
    box-shadow: 0 20px 50px rgba(22,119,255,0.15);
    border: 1px solid var(--gray-200);
    overflow: hidden;
  }
  .hero-mockup-main {
    top: 0;
    left: 0;
    right: 40px;
    bottom: 20px;
    padding: 20px;
  }
  .mockup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--gray-100);
    margin-bottom: 16px;
  }
  .mockup-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .mockup-badge {
    padding: 3px 10px;
    background: var(--brand-primary-50);
    color: var(--brand-primary);
    font-size: 11px;
    font-weight: 500;
    border-radius: var(--radius-full);
  }
  .mockup-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }
  .mockup-stat-card {
    padding: 14px;
    border-radius: var(--radius);
    background: linear-gradient(135deg, var(--brand-primary-50), #E6FFFB);
  }
  .mockup-stat-num {
    font-size: 20px;
    font-weight: 700;
    color: var(--brand-primary);
  }
  .mockup-stat-label {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 2px;
  }
  .mockup-chart {
    background: var(--gray-50);
    border-radius: var(--radius);
    padding: 14px;
    height: 120px;
    display: flex;
    align-items: flex-end;
    gap: 6px;
  }
  .mockup-bar {
    flex: 1;
    background: var(--brand-primary-100);
    border-radius: 4px 4px 0 0;
    transition: height 0.3s;
  }
  .mockup-bar.primary {
    background: var(--brand-grad);
  }
  .mockup-float {
    position: absolute;
    background: #fff;
    border-radius: var(--radius-xl);
    padding: 14px 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    border: 1px solid var(--gray-100);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .mockup-float-1 {
    top: 30px;
    right: 0;
    animation: floatY 3s ease-in-out infinite;
  }
  .mockup-float-2 {
    bottom: 40px;
    right: 20px;
    animation: floatY 3s ease-in-out infinite 1s;
  }
  .mockup-float-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .mockup-float-icon.cyan { background: var(--brand-grad); }
  .mockup-float-icon.green { background: linear-gradient(135deg, #52C41A, #73D13D); }
  .mockup-float-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }
  .mockup-float-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .section-soft-grad {
    background: linear-gradient(180deg, #FFFFFF 0%, #EEF4FF 30%, #D6E4FF 60%, #FFFFFF 100%);
  }

  .brand-cta {
    background: var(--brand-grad);
  }

  .icon-primary-brand {
    color: var(--brand-primary);
  }

  @media (max-width: 900px) {
    .page-hero-inner {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .page-hero-title { font-size: 32px; }
    .page-hero-visual { height: 320px; }
    .page-hero-stat-row { gap: 24px; flex-wrap: wrap; }
  }
</style>
