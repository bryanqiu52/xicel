/**
 * xicel 公共导航栏组件
 * 用法：在页面 <body> 顶部放置 <div id="navbar-container"></div>，然后引入此脚本即可。
 * 自动注入完整导航 HTML、高亮当前页面、初始化滚动阴影。
 */
(function () {
  'use strict';

  /* ============================
     0. 当前页面判断
     ============================ */
  var path = window.location.pathname;
  // 兼容本地 file:// 协议以及尾部 /
  var fileName = path.split('/').pop() || 'index.html';
  if (fileName.indexOf('?') !== -1) fileName = fileName.split('?')[0];

  /**
   * 判断某个 href 是否为当前页面
   * @param {string} href 链接地址，如 "products.html"
   * @returns {boolean}
   */
  function isActive(href) {
    var target = href.split('#')[0];            // 去掉 hash
    if (target.indexOf('?') !== -1) target = target.split('?')[0];
    if (!target) return false;                  // 空链接不算
    // index.html / 空白路径
    if ((target === 'index.html' || target === '' || target === '/') && (fileName === 'index.html' || fileName === '' || fileName === '/')) return true;
    return fileName === target;
  }

  /**
   * 为导航链接生成 class
   * @param {string} href
   * @param {string} baseClass 默认 tailwind class
   * @returns {string}
   */
  function navClass(href, baseClass) {
    return isActive(href)
      ? baseClass.replace('text-body/70', 'text-primary')
      : baseClass;
  }

  /**
   * 判断是否在产品服务相关页面（用于高亮"产品服务"标签）
   */
  var productPages = ['products.html', 'products-hosting.html', 'products-design.html', 'products-compute.html', 'products-network.html', 'domain-pricing.html'];
  var isProductPage = productPages.indexOf(fileName) !== -1;

  /* ============================
     1. 构建导航 HTML
     ============================ */

  /*
   * 桌面端产品菜单排序：
   *   品牌基石 → 站点构建 → 算力底座 → 全球连接 → 设计服务(col-span-2)
   *
   * 移动端产品菜单排序：
   *   品牌基石 → 站点构建 → 设计服务 → 算力底座 → 全球连接
   */

  var navbarHTML = [
    /* ---------- 主导航栏 ---------- */
    '<nav id="navbar" class="bg-white border-b border-slate-100 sticky top-0 z-50">',
    '  <div class="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">',

    /* -- Logo -- */
    '    <a href="index.html" class="flex items-center gap-2.5 shrink-0">',
    '      <img src="assets/images/logo.png" alt="xicel Logo" class="h-8 w-auto" />',
    '    </a>',

    /* -- 桌面端导航链接 -- */
    '    <div class="hidden lg:flex items-center gap-8">',

    /* 产品服务下拉 */
    '      <div class="relative group">',
    '        <span class="nav-link ' + (isProductPage ? 'text-primary' : 'text-body/70') + ' hover:text-primary cursor-default text-sm font-medium transition-colors">产品服务 ▾</span>',
    '        <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 grid grid-cols-2 gap-3 border border-slate-100">',

    /* 1. 品牌基石 */
    '          <a href="products.html" class="bg-slate-50 rounded-xl p-3 hover:bg-primary/5 transition-colors cursor-pointer block no-underline">',
    '            <div class="flex items-center gap-2 mb-1"><div class="w-1 h-4 bg-primary rounded-full"></div><span class="font-semibold text-sm text-body">品牌基石</span></div>',
    '            <div class="text-xs text-muted ml-3">域名注册 · 商标注册 · WHOIS · 品牌保护</div>',
    '          </a>',

    /* 2. 站点构建 */
    '          <a href="products-hosting.html" class="bg-slate-50 rounded-xl p-3 hover:bg-accent/5 transition-colors cursor-pointer block no-underline">',
    '            <div class="flex items-center gap-2 mb-1"><div class="w-1 h-4 bg-accent rounded-full"></div><span class="font-semibold text-sm text-body">站点构建</span></div>',
    '            <div class="text-xs text-muted ml-3">网站建设 · SSL证书 · 企业邮箱</div>',
    '          </a>',

    /* 3. 算力底座 */
    '          <a href="products-compute.html" class="bg-slate-50 rounded-xl p-3 hover:bg-purple-50 transition-colors cursor-pointer block no-underline">',
    '            <div class="flex items-center gap-2 mb-1"><div class="w-1 h-4 bg-purple-500 rounded-full"></div><span class="font-semibold text-sm text-body">算力底座</span></div>',
    '            <div class="text-xs text-muted ml-3">云服务器 · GPU算力 · 服务器租用</div>',
    '          </a>',

    /* 4. 全球连接 */
    '          <a href="products-network.html" class="bg-slate-50 rounded-xl p-3 hover:bg-amber-50 transition-colors cursor-pointer block no-underline">',
    '            <div class="flex items-center gap-2 mb-1"><div class="w-1 h-4 bg-amber-500 rounded-full"></div><span class="font-semibold text-sm text-body">全球连接</span></div>',
    '            <div class="text-xs text-muted ml-3">网络专线 · 硬件采购 · 机房托管</div>',
    '          </a>',

    /* 5. 设计服务 (col-span-2，最后一行) */
    '          <a href="products-design.html" class="bg-slate-50 rounded-xl p-3 hover:bg-rose-50 transition-colors cursor-pointer block no-underline col-span-2">',
    '            <div class="flex items-center gap-2 mb-1"><div class="w-1 h-4 bg-rose-400 rounded-full"></div><span class="font-semibold text-sm text-body">设计服务</span></div>',
    '            <div class="text-xs text-muted ml-3">LOGO · VI · UI设计 · 海报 · 包装</div>',
    '          </a>',

    /* 分隔线 + 域名价格 */
    '          <div class="col-span-2 border-t border-slate-100 my-1"></div>',
    '          <a href="domain-pricing.html" class="col-span-2 block px-3 py-2 text-sm text-muted hover:text-primary rounded-lg hover:bg-slate-50 transition-colors text-center">域名价格</a>',
    '        </div>',
    '      </div>',

    /* 解决方案 */
    '      <a href="solutions.html" class="nav-link ' + navClass('solutions.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">解决方案</a>',

    /* 新闻动态 */
    '      <a href="news.html" class="nav-link ' + navClass('news.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">新闻动态</a>',

    /* 关于我们 */
    '      <a href="about.html" class="nav-link ' + navClass('about.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">关于我们</a>',

    '    </div>',

    /* -- 右侧功能区 -- */
    '    <div class="flex items-center gap-3">',

    /* 购物车 */
    '      <div class="cart-wrapper hidden sm:flex">',
    '        <a href="user.html#panel-orders" class="nav-icon-btn" title="购物车/订单">',
    '          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>',
    '          <span class="cart-badge">5</span>',
    '        </a>',
    '        <div class="cart-dropdown">',
    '          <div class="cart-dropdown-header"><span class="cart-dropdown-title">我的订单</span><span class="cart-dropdown-count">共 5 笔</span></div>',
    '          <div class="cart-list">',
    '            <div class="cart-item"><div class="cart-item-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div><div class="cart-item-info"><div class="cart-item-name">xicel.com 域名注册</div><div class="cart-item-meta"><span>域名注册</span><span>·</span><span class="text-green-500">已完成</span></div></div><div class="cart-item-price">¥89.00</div></div>',
    '            <div class="cart-item"><div class="cart-item-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div><div class="cart-item-info"><div class="cart-item-name">ECS 通用型 4核8G 云服务器</div><div class="cart-item-meta"><span>云服务器</span><span>·</span><span class="text-red-500">处理中</span></div></div><div class="cart-item-price">¥3,580.00</div></div>',
    '          </div>',
    '          <div class="cart-dropdown-footer"><a href="user.html#panel-orders" class="cart-view-all">查看全部订单 →</a></div>',
    '        </div>',
    '      </div>',

    /* 用户菜单 */
    '      <div class="user-menu-wrapper hidden sm:flex">',
    '        <a href="user.html" class="user-avatar" title="个人中心"><img src="assets/images/avatars/men_32.jpg" alt="Paul"></a>',
    '        <div class="user-dropdown">',
    '          <div class="user-dropdown-header"><div class="user-dropdown-name-row"><span class="user-dropdown-name">Paul</span><div class="user-edit-icon" title="编辑资料"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width:14px;height:14px;"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div></div><div class="user-dropdown-status"><span class="status-label">认证状态</span><span class="status-badge">已认证</span></div></div>',
    '          <div class="user-dropdown-menu">',
    '            <div class="user-menu-item" onclick="window.location.href=\'user.html#panel-account\'"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>基本信息</div>',
    '            <div class="user-menu-item" onclick="window.location.href=\'user.html#panel-wallet\'"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="5" y1="8" x2="5" y2="8.01"/><circle cx="12" cy="14" r="2"/><path d="M19 10v4"/></svg>我的钱包</div>',
    '            <div class="user-menu-item" onclick="window.location.href=\'user.html#panel-security\'"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>安全设置</div>',
    '            <div class="user-menu-item logout" onclick="handleLogout(event)"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>退出登录</div>',
    '          </div>',
    '        </div>',
    '      </div>',

    /* 登录按钮（默认隐藏） */
    '      <a href="login.html" id="loginLinkBtn" class="text-primary hover:text-primary-dark text-sm font-medium transition-colors hidden sm:inline" style="display:none;">登录</a>',

    /* 立即咨询 */
    '      <button onclick="openConsultModal()" class="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 whitespace-nowrap">立即咨询</button>',

    /* 汉堡菜单按钮 */
    '      <button id="hamburgerBtn" class="lg:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors" onclick="toggleMobileMenu()">',
    '        <span class="block w-5 h-0.5 bg-body rounded transition-all duration-300" id="ham-line1"></span>',
    '        <span class="block w-5 h-0.5 bg-body rounded transition-all duration-300" id="ham-line2"></span>',
    '        <span class="block w-5 h-0.5 bg-body rounded transition-all duration-300" id="ham-line3"></span>',
    '      </button>',

    '    </div>',  /* end 右侧功能区 */
    '  </div>',    /* end max-w-7xl */
    '</nav>',      /* end #navbar */

    /* ---------- 移动端菜单 ---------- */
    '<div id="mobileMenu" class="lg:hidden fixed inset-0 top-[65px] bg-white z-40 transform translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto overflow-x-hidden">',
    '  <div class="px-6 py-6 flex flex-col gap-2">',

    /* 产品服务（移动端排序：品牌基石 → 站点构建 → 设计服务 → 算力底座 → 全球连接） */
    '    <div class="py-3 border-b border-slate-100">',
    '      <span class="text-sm font-semibold text-body block mb-3">产品服务</span>',

    /* 1. 品牌基石 */
    '      <a href="products.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products.html') ? 'text-primary' : 'text-muted') + ' hover:text-primary border-l-2 border-primary transition-colors" onclick="closeMobileMenu()">品牌基石</a>',

    /* 2. 站点构建 */
    '      <a href="products-hosting.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-hosting.html') ? 'text-accent' : 'text-muted') + ' hover:text-accent border-l-2 border-accent transition-colors" onclick="closeMobileMenu()">站点构建</a>',

    /* 3. 设计服务 */
    '      <a href="products-design.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-design.html') ? 'text-rose-400' : 'text-muted') + ' hover:text-rose-400 border-l-2 border-rose-400 transition-colors" onclick="closeMobileMenu()">设计服务</a>',

    /* 4. 算力底座 */
    '      <a href="products-compute.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-compute.html') ? 'text-purple-500' : 'text-muted') + ' hover:text-purple-500 border-l-2 border-purple-500 transition-colors" onclick="closeMobileMenu()">算力底座</a>',

    /* 5. 全球连接 */
    '      <a href="products-network.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-network.html') ? 'text-amber-500' : 'text-muted') + ' hover:text-amber-500 border-l-2 border-amber-500 transition-colors" onclick="closeMobileMenu()">全球连接</a>',

    /* 域名价格 */
    '      <a href="domain-pricing.html" class="block py-2.5 pl-4 text-sm ' + (isActive('domain-pricing.html') ? 'text-slate-700' : 'text-muted') + ' hover:text-slate-700 border-l-2 border-slate-300 transition-colors" onclick="closeMobileMenu()">域名价格</a>',

    '    </div>',

    /* 解决方案 */
    '    <a href="solutions.html" class="block py-3 text-sm font-semibold ' + (isActive('solutions.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">解决方案</a>',

    /* 新闻动态 */
    '    <a href="news.html" class="block py-3 text-sm font-semibold ' + (isActive('news.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">新闻动态</a>',

    /* 关于我们 */
    '    <a href="about.html" class="block py-3 text-sm font-semibold ' + (isActive('about.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">关于我们</a>',

    /* 底部快捷入口 */
    '    <div class="flex flex-col gap-3 mt-4">',
    '      <a href="user.html" class="flex items-center gap-2 py-2.5 text-sm text-muted hover:text-primary"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>个人中心</a>',
    '      <a href="user.html#panel-orders" class="flex items-center gap-2 py-2.5 text-sm text-muted hover:text-primary"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>我的订单</a>',
    '    </div>',

    '  </div>',
    '</div>'
  ].join('\n');

  /* ============================
     2. 注入 DOM
     ============================ */
  var container = document.getElementById('navbar-container');
  if (container) {
    container.innerHTML = navbarHTML;
  }

  /* ============================
     3. 导航滚动阴影
     ============================ */
  var nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        nav.classList.add('shadow-sm');
      } else {
        nav.classList.remove('shadow-sm');
      }
    });
  }

  /* ============================
     4. 全局函数定义
     ============================ */

  /** 域名搜索跳转 */
  function handleDomainSearch() {
    var input = document.getElementById('domainSearchInput');
    var query = input ? input.value.trim() : '';
    if (!query) { window.location.href = 'domain-search.html'; return; }
    if (query.indexOf('.') === 0) {
      window.location.href = 'domain-order.html?domain=' + encodeURIComponent(query);
    } else {
      window.location.href = 'domain-search.html?q=' + encodeURIComponent(query);
    }
  }

  /** 移动端菜单 - 切换 */
  function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    var l1 = document.getElementById('ham-line1');
    var l2 = document.getElementById('ham-line2');
    var l3 = document.getElementById('ham-line3');
    if (menu.classList.contains('translate-x-full')) {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
      l1.style.transform = 'rotate(45deg) translate(5px,5px)';
      l2.style.opacity = '0';
      l3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
      document.body.style.overflow = 'hidden';
    } else {
      closeMobileMenu();
    }
  }

  /** 移动端菜单 - 关闭 */
  function closeMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.add('translate-x-full');
    menu.classList.remove('translate-x-0');
    var l1 = document.getElementById('ham-line1');
    if (l1) l1.style.transform = '';
    var l2 = document.getElementById('ham-line2');
    if (l2) l2.style.opacity = '';
    var l3 = document.getElementById('ham-line3');
    if (l3) l3.style.transform = '';
    document.body.style.overflow = '';
  }

  /** 退出登录 */
  function handleLogout(e) {
    e.stopPropagation();
    var wrapper = document.querySelector('.user-menu-wrapper');
    if (wrapper) wrapper.style.display = 'none';
    var loginBtn = document.getElementById('loginLinkBtn');
    if (loginBtn) loginBtn.style.display = '';
    var badge = document.querySelector('.cart-badge');
    if (badge) badge.style.display = 'none';
    var cartWrapper = document.querySelector('.cart-wrapper');
    if (cartWrapper) cartWrapper.classList.add('logged-out');
  }

  /* 挂载到 window */
  window.handleDomainSearch = handleDomainSearch;
  window.toggleMobileMenu = toggleMobileMenu;
  window.closeMobileMenu = closeMobileMenu;
  window.handleLogout = handleLogout;

  /* 咨询弹窗：如果页面没有定义 openConsultModal，提供兜底（仅做提醒） */
  window.openConsultModal = window.openConsultModal || function () {
    // 如果页面已有咨询弹窗 DOM，由页面自身控制
    // 此处提供 alert 兜底
    alert('请先在页面中配置咨询弹窗组件');
  };

})();
