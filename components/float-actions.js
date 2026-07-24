/**
 * xicel 右侧悬浮客服组件
 * 用法：在页面 <body> 内放置 <div id="float-actions-container"></div>，然后引入此脚本即可。
 * 默认展开客服面板，右上角关闭后折叠为百宝箱图标。
 */
(function () {
  'use strict';

  /* ============================
     百宝箱图标 HTML（折叠时显示）
     ============================ */
  var baoboxHTML = [
    '<div class="float-baobox" id="floatBaobox">',
    '  <div class="float-baobox-btn" id="floatBaoboxBtn" title="客服百宝箱">',
    '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
    '      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>',
    '      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>',
    '      <line x1="12" y1="22.08" x2="12" y2="12"/>',
    '    </svg>',
    '  </div>',
    '</div>'
  ].join('\n');

  /* ============================
     客服面板 HTML（展开时显示）
     ============================ */
  var cardHTML = [
    '<div class="float-card" id="floatCard">',
    '  <div class="float-card-body">',
    '    <!-- 关闭按钮 -->',
    '    <button class="float-card-close" id="floatCardClose" aria-label="收起">',
    '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">',
    '        <path d="M18 6L6 18M6 6l12 12"/>',
    '      </svg>',
    '    </button>',
    '    <!-- 客服头像 & 信息 -->',
    '    <div class="float-agent">',
    '      <div class="float-avatar">',
    '        <svg viewBox="0 0 120 120" fill="none">',
    '          <!-- 圆形渐变背景 -->',
    '          <circle cx="60" cy="60" r="60" fill="url(#fAvatarGrad)"/>',
    '          <defs><linearGradient id="fAvatarGrad" x1="0" y1="0" x2="120" y2="120"><stop stop-color="#0A66FF"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs>',
    '          <!-- 头发（长发） -->',
    '          <path d="M60 14c-13 0-24 8-28 20-2 5-3 12-3 18 0 18 6 34 14 44l-2 12c-1 4 1 8 4 10l15-8 15 8c3-2 5-6 4-10l-2-12c8-10 14-26 14-44 0-6-1-13-3-18-4-12-15-20-28-20z" fill="#1E293B"/>',
    '          <!-- 辫子 -->',
    '          <path d="M36 46c-2 8-3 18-2 28l-4 2c-2-10-1-22 2-30h4z" fill="#1E293B"/>',
    '          <path d="M84 46c2 8 3 18 2 28l4 2c2-10 1-22-2-30h-4z" fill="#1E293B"/>',
    '          <!-- 脸 -->',
    '          <ellipse cx="60" cy="54" rx="18" ry="20" fill="#FDF2F8"/>',
    '          <!-- 耳朵 -->',
    '          <ellipse cx="42" cy="54" rx="3" ry="5" fill="#FCE7F3"/>',
    '          <ellipse cx="78" cy="54" rx="3" ry="5" fill="#FCE7F3"/>',
    '          <!-- 眼睛 -->',
    '          <ellipse cx="52" cy="52" rx="3" ry="3.5" fill="#1E293B"/>',
    '          <ellipse cx="68" cy="52" rx="3" ry="3.5" fill="#1E293B"/>',
    '          <circle cx="53.5" cy="50.5" r="1.2" fill="#fff"/>',
    '          <circle cx="69.5" cy="50.5" r="1.2" fill="#fff"/>',
    '          <!-- 睫毛 -->',
    '          <path d="M49 48l-2-2M71 48l2-2" stroke="#1E293B" stroke-width="0.8"/>',
    '          <!-- 眉毛 -->',
    '          <path d="M49 46c2-2 4-2 6 0M65 46c2-2 4-2 6 0" stroke="#1E293B" stroke-width="1.2" fill="none"/>',
    '          <!-- 腮红 -->',
    '          <ellipse cx="47" cy="60" rx="5" ry="3" fill="#FBCFE8" opacity="0.5"/>',
    '          <ellipse cx="73" cy="60" rx="5" ry="3" fill="#FBCFE8" opacity="0.5"/>',
    '          <!-- 嘴巴（微笑） -->',
    '          <path d="M54 64c2 3 10 3 12 0" stroke="#EC4899" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    '          <!-- 衣领 -->',
    '          <path d="M42 78c0 8 8 14 18 14s18-6 18-14l-6-4c-3 4-7 6-12 6s-9-2-12-6l-6 4z" fill="#fff" opacity="0.9"/>',
    '        </svg>',
    '      </div>',
    '      <div class="float-agent-info">',
    '        <div class="float-agent-name">客服小小</div>',
    '        <div class="float-agent-desc">专业解答 · 用心服务</div>',
    '      </div>',
    '    </div>',
    '    <!-- 联系方式 -->',
    '    <div class="float-contact-list">',
    '      <!-- 电话 -->',
    '      <div class="float-contact-item" id="floatPhoneBtn">',
    '        <div class="float-contact-icon float-icon-phone">',
    '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>',
    '          </svg>',
    '        </div>',
    '        <div class="float-contact-info">',
    '          <div class="float-contact-label">电话咨询</div>',
    '          <div class="float-contact-value" id="floatPhoneValue">184-7548-8381</div>',
    '        </div>',
    '      </div>',
    '      <!-- 立即咨询 -->',
    '      <div class="float-contact-item" id="floatChatBtn">',
    '        <div class="float-contact-icon float-icon-chat">',
    '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
    '          </svg>',
    '        </div>',
    '        <div class="float-contact-info">',
    '          <div class="float-contact-label">立即咨询</div>',
    '          <div class="float-contact-value">点击发起会话</div>',
    '        </div>',
    '        <div class="float-contact-arrow">',
    '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '            <path d="M9 18l6-6-6-6"/>',
    '          </svg>',
    '        </div>',
    '      </div>',
    '      <!-- 微信客服 - 卡片式展示 -->',
    '      <div class="float-wechat-card">',
    '        <div class="float-wechat-card-header">',
    '          <div class="float-wechat-card-icon">',
    '            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
    '              <path d="M16.21 10.25c.43 0 .85.04 1.26.12A6.5 6.5 0 0011.5 5c-3.59 0-6.5 2.69-6.5 6 0 1.12.32 2.16.87 3.05L5 17l2.48-1.24c.79.36 1.66.58 2.58.65"/>',
    '              <path d="M16.21 10.25A6.5 6.5 0 0122 15c0 1.98-.88 3.75-2.27 4.93L21 22l-1.94-.97a5.55 5.55 0 01-1.79.47"/>',
    '            </svg>',
    '          </div>',
    '          <span>微信客服</span>',
    '        </div>',
    '        <div class="float-wechat-card-body">',
    '          <img src="assets/images/sini_qr.png" alt="客服微信二维码" class="float-wechat-card-qr">',
    '          <div class="float-wechat-card-divider"></div>',
    '          <div class="float-wechat-card-text">长按或扫码<br>添加客服微信</div>',
    '        </div>',
    '      </div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');

  /* ============================
     回到顶部按钮 HTML（独立）
     ============================ */
  var backtopHTML = [
    '<div class="float-backtop-btn" id="floatBackTopBtn">',
    '  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M18 15l-6-6-6 6"/>',
    '  </svg>',
    '</div>'
  ].join('\n');

  /* ============================
     初始化
     ============================ */
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('float-actions-container');
    if (!container) return;
    // 默认显示卡片 + 回到顶部
    container.innerHTML = baoboxHTML + cardHTML + backtopHTML;
    initFloatActions();
  });

  function initFloatActions() {
    var card = document.getElementById('floatCard');
    var baobox = document.getElementById('floatBaobox');
    var closeBtn = document.getElementById('floatCardClose');
    var baoboxBtn = document.getElementById('floatBaoboxBtn');
    var phoneBtn = document.getElementById('floatPhoneBtn');
    var chatBtn = document.getElementById('floatChatBtn');
    var backTop = document.getElementById('floatBackTopBtn');

    // --- 关闭卡片 → 显示百宝箱 ---
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        card.classList.add('float-card-hidden');
        baobox.classList.add('float-baobox-show');
      });
    }

    // --- 点击百宝箱 → 显示卡片 ---
    if (baoboxBtn) {
      baoboxBtn.addEventListener('click', function () {
        card.classList.remove('float-card-hidden');
        baobox.classList.remove('float-baobox-show');
      });
    }

    // --- 电话咨询 ---
    if (phoneBtn) {
      phoneBtn.addEventListener('click', function () {
        if (typeof openConsultModal === 'function') {
          openConsultModal();
        } else {
          alert('客服热线：400-000-0000');
        }
      });
    }

    // --- 立即咨询 ---
    if (chatBtn) {
      chatBtn.addEventListener('click', function () {
        if (typeof openConsultModal === 'function') {
          openConsultModal();
        } else {
          alert('客服热线：400-000-0000');
        }
      });
    }

    // --- 回到顶部（独立按钮） ---
    if (backTop) {
      var tickingBt = false;
      window.addEventListener('scroll', function () {
        if (!tickingBt) {
          window.requestAnimationFrame(function () {
            if (window.scrollY > 600) {
              backTop.style.opacity = '1';
              backTop.style.visibility = 'visible';
            } else {
              backTop.style.opacity = '0';
              backTop.style.visibility = 'hidden';
            }
            tickingBt = false;
          });
          tickingBt = true;
        }
      });

      backTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
})();
