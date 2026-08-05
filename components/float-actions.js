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
    '        <img src="assets/images/Customer%20Service.jpg" alt="客服头像" class="float-avatar-img">',
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
     浮动购物车按钮 HTML（手机版专用）
     ============================ */
  var floatCartHTML = [
    '<div class="float-cart-btn" id="floatCartBtn" title="购物车">',
    '  <a href="cart-confirm.html" class="float-cart-link">',
    '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>',
    '    </svg>',
    '    <span class="float-cart-badge" data-cart-badge>0</span>',
    '  </a>',
    '</div>'
  ].join('\n');

  /* ============================
     初始化
     ============================ */
  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('float-actions-container');
    if (!container) return;

    // ---- 限制条件：用户关闭过一次客服弹窗后不自动再次打开 ----
    var userClosedBefore = localStorage.getItem('xicel_kefu_closed') === 'true';

    // 默认显示卡片 + 回到顶部 + 浮动购物车
    container.innerHTML = baoboxHTML + cardHTML + floatCartHTML + backtopHTML;

    // 浮动购物车已渲染，同步刷新角标数字
    if (typeof window.cartUtils !== 'undefined' && window.cartUtils.refresh) {
      window.cartUtils.refresh();
    }

    if (userClosedBefore) {
      document.getElementById('floatCard').classList.add('float-card-hidden');
      document.getElementById('floatBaobox').classList.add('float-baobox-show');
    }

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

    // --- 关闭卡片 → 显示百宝箱，并记录关闭状态 ---
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        card.classList.add('float-card-hidden');
        baobox.classList.add('float-baobox-show');
        // 记录用户已关闭，其他页面不再自动打开
        localStorage.setItem('xicel_kefu_closed', 'true');
      });
    }

    // --- 点击百宝箱 → 显示卡片，清除关闭记录 ---
    if (baoboxBtn) {
      baoboxBtn.addEventListener('click', function () {
        card.classList.remove('float-card-hidden');
        baobox.classList.remove('float-baobox-show');
        // 用户主动打开，清除关闭记录
        localStorage.removeItem('xicel_kefu_closed');
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
