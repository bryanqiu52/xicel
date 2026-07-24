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
  var productPages = ['products-idc.html', 'products-domain.html', 'products-ip.html', 'products-design.html'];
  var isProductPage = productPages.indexOf(fileName) !== -1;

  /* ============================
     1. 构建导航 HTML
     ============================ */

  /*
   * 桌面端产品菜单排序：
   *   IDC服务 → 品牌护城河 → 知识产权 → 设计服务
   * 移动端产品菜单排序：
   *   IDC服务 → 品牌护城河 → 知识产权 → 设计服务
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

    /* 首页 */
    '      <a href="index.html" class="nav-link ' + navClass('index.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">首页</a>',

    /* 产品服务下拉 */
    '      <div class="relative group">',
    '        <span class="nav-link ' + (isProductPage ? 'text-primary' : 'text-body/70') + ' hover:text-primary cursor-default text-sm font-medium transition-colors">产品服务 ▾</span>',
    '        <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] bg-white rounded-2xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 grid grid-cols-2 gap-3 border border-slate-100">',

    /* 1. IDC服务 */
    '          <div class="bg-slate-50 rounded-xl p-3 hover:bg-primary/5 transition-colors">',
    '            <a href="products-idc.html" class="no-underline block">',
    '            <div class="flex items-center gap-2">',
    '              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base" style="background:#EFF6FF">🖥️</div>',
    '              <span class="font-bold text-body">IDC服务</span>',
    '            </div>',
    '            </a>',
    '            <div class="flex flex-wrap gap-1.5 mt-2 px-0.5">',
    '              <a href="products-idc.html?subtab=network" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">网络专线</a>',
    '              <a href="products-idc.html?subtab=hosting" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">服务器托管</a>',
    '              <a href="products-idc.html?subtab=web" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">网站建设</a>',
    '              <a href="products-idc.html?subtab=ssl" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">SSL证书</a>',
    '              <a href="products-idc.html?subtab=mail" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">企业邮箱</a>',
    '              <a href="products-idc.html?subtab=cloud" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">云服务器</a>',
    '            </div>',
    '          </div>',

    /* 2. 品牌护城河 */
    '          <div class="bg-slate-50 rounded-xl p-3 hover:bg-primary/5 transition-colors">',
    '            <a href="products-domain.html" class="no-underline block">',
    '            <div class="flex items-center gap-2">',
    '              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base" style="background:#EFF6FF">🛡️</div>',
    '              <span class="font-bold text-body">品牌护城河</span>',
    '            </div>',
    '            </a>',
    '            <div class="flex flex-wrap gap-1.5 mt-2 px-0.5">',
    '              <a href="products-domain.html?subtab=domain" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">域名注册</a>',
    '              <a href="products-domain.html?subtab=buyback" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">域名回购</a>',
    '              <a href="products-domain.html?subtab=dispute" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">域名争议处理</a>',
    '              <a href="products-domain.html?subtab=takedown" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">域名侵权下架</a>',
    '              <a href="products-domain.html?subtab=pricing" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline">域名价格</a>',
    '            </div>',
    '          </div>',

    /* 3. 知识产权 */
    '          <div class="bg-slate-50 rounded-xl p-3 hover:bg-purple-50 transition-colors">',
    '            <a href="products-ip.html" class="no-underline block">',
    '            <div class="flex items-center gap-2">',
    '              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base" style="background:#F5F3FF">📋</div>',
    '              <span class="font-bold text-body">知识产权</span>',
    '            </div>',
    '            </a>',
    '            <div class="flex flex-wrap gap-1.5 mt-2 px-0.5">',
    '              <a href="products-ip.html?subtab=trademark" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-purple-100 hover:text-purple-700 transition-colors no-underline">商标</a>',
    '              <a href="products-ip.html?subtab=patent" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-purple-100 hover:text-purple-700 transition-colors no-underline">专利</a>',
    '              <a href="products-ip.html?subtab=copyright" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-purple-100 hover:text-purple-700 transition-colors no-underline">版权</a>',
    '            </div>',
    '          </div>',

    /* 4. 设计服务 */
    '          <div class="bg-slate-50 rounded-xl p-3 hover:bg-rose-50 transition-colors">',
    '            <a href="products-design.html" class="no-underline block">',
    '            <div class="flex items-center gap-2">',
    '              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base" style="background:#FFF1F2">🎨</div>',
    '              <span class="font-bold text-body">设计服务</span>',
    '            </div>',
    '            </a>',
    '            <div class="flex flex-wrap gap-1.5 mt-2 px-0.5">',
    '              <a href="products-design.html?subtab=brand-design" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline">品牌设计</a>',
    '              <a href="products-design.html?subtab=ui-design" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline">UI/UX设计</a>',
    '              <a href="products-design.html?subtab=ecommerce-design" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline">电商设计</a>',
    '              <a href="products-design.html?subtab=offline-material" class="text-xs px-2 py-0.5 bg-white rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline">线下物料</a>',
    '            </div>',
    '          </div>',

    '        </div>',
    '      </div>',

    /* 解决方案 */
    '      <a href="solutions.html" class="nav-link ' + navClass('solutions.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">解决方案</a>',

    /* 新闻动态 */
    '      <a href="news.html" class="nav-link ' + navClass('news.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">新闻动态</a>',

    /* 关于我们 */
    '      <a href="about.html" class="nav-link ' + navClass('about.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">关于我们</a>',

    /* 联系我们 */
    '      <a href="contact-us.html" class="nav-link ' + navClass('contact-us.html', 'text-body/70 hover:text-primary text-sm font-medium transition-colors') + '">联系我们</a>',

    '    </div>',

    /* -- 右侧功能区 -- */
    '    <div class="flex items-center gap-3">',

    /* 购物车 */
    '      <div class="cart-wrapper hidden sm:flex">',
    '        <a href="cart-confirm.html" class="nav-icon-btn" title="购物车/订单">',
    '          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>',
    '          <span class="cart-badge" data-cart-badge>0</span>',
    '        </a>',
    '        <div class="cart-dropdown">',
    '          <div class="cart-dropdown-header"><span class="cart-dropdown-title">我的订单</span><span class="cart-dropdown-count" data-cart-dropdown-count>共 0 笔</span></div>',
    '          <div class="cart-list" data-cart-dropdown-list>',
    '            <div class="cart-empty">暂无待结算订单</div>',
    '          </div>',
    '          <div class="cart-dropdown-footer"><a href="cart-confirm.html" class="cart-view-all">查看购物车 →</a></div>',
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

    /* 产品服务（移动端：IDC服务 → 品牌护城河 → 知识产权 → 设计服务） */
    '    <div class="py-3 border-b border-slate-100">',
    '      <span class="text-sm font-semibold text-body block mb-3">产品服务</span>',

    /* 1. IDC服务 */
    '      <div class="mb-3">',
    '        <a href="products-idc.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-idc.html') ? 'text-primary' : 'text-muted') + ' hover:text-primary border-l-2 border-primary transition-colors" onclick="closeMobileMenu()">IDC服务</a>',
    '        <div class="flex flex-wrap gap-1.5 pl-4 mt-1.5">',
    '          <a href="products-idc.html?subtab=network" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">网络专线</a>',
    '          <a href="products-idc.html?subtab=hosting" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">服务器托管</a>',
    '          <a href="products-idc.html?subtab=web" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">网站建设</a>',
    '          <a href="products-idc.html?subtab=ssl" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">SSL证书</a>',
    '          <a href="products-idc.html?subtab=mail" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">企业邮箱</a>',
    '          <a href="products-idc.html?subtab=cloud" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">云服务器</a>',
    '        </div>',
    '      </div>',

    /* 2. 品牌护城河 */
    '      <div class="mb-3">',
    '        <a href="products-domain.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-domain.html') ? 'text-primary' : 'text-muted') + ' hover:text-primary border-l-2 border-primary transition-colors" onclick="closeMobileMenu()">品牌护城河</a>',
    '        <div class="flex flex-wrap gap-1.5 pl-4 mt-1.5">',
    '          <a href="products-domain.html?subtab=domain" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">域名注册</a>',
    '          <a href="products-domain.html?subtab=buyback" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">域名回购</a>',
    '          <a href="products-domain.html?subtab=dispute" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">域名争议处理</a>',
    '          <a href="products-domain.html?subtab=takedown" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">域名侵权下架</a>',
    '          <a href="products-domain.html?subtab=pricing" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-primary/10 hover:text-primary transition-colors no-underline" onclick="closeMobileMenu()">域名价格</a>',
    '        </div>',
    '      </div>',

    /* 3. 知识产权 */
    '      <div class="mb-3">',
    '        <a href="products-ip.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-ip.html') ? 'text-purple-500' : 'text-muted') + ' hover:text-purple-500 border-l-2 border-purple-500 transition-colors" onclick="closeMobileMenu()">知识产权</a>',
    '        <div class="flex flex-wrap gap-2 pl-4 mt-1">',
    '          <a href="products-ip.html?subtab=trademark" class="text-xs text-muted hover:text-purple-500 px-2 py-1 rounded bg-slate-50" onclick="closeMobileMenu()">商标</a>',
    '          <a href="products-ip.html?subtab=patent" class="text-xs text-muted hover:text-purple-500 px-2 py-1 rounded bg-slate-50" onclick="closeMobileMenu()">专利</a>',
    '          <a href="products-ip.html?subtab=copyright" class="text-xs text-muted hover:text-purple-500 px-2 py-1 rounded bg-slate-50" onclick="closeMobileMenu()">版权</a>',
    '        </div>',
    '      </div>',

    /* 4. 设计服务 */
    '      <div>',
    '        <a href="products-design.html" class="block py-2.5 pl-4 text-sm ' + (isActive('products-design.html') ? 'text-rose-500' : 'text-muted') + ' hover:text-rose-500 border-l-2 border-rose-500 transition-colors" onclick="closeMobileMenu()">设计服务</a>',
    '        <div class="flex flex-wrap gap-1.5 pl-4 mt-1.5">',
    '          <a href="products-design.html?subtab=brand-design" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline" onclick="closeMobileMenu()">品牌设计</a>',
    '          <a href="products-design.html?subtab=ui-design" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline" onclick="closeMobileMenu()">UI/UX设计</a>',
    '          <a href="products-design.html?subtab=ecommerce-design" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline" onclick="closeMobileMenu()">电商设计</a>',
    '          <a href="products-design.html?subtab=offline-material" class="text-xs px-2 py-0.5 bg-slate-100 rounded text-muted hover:bg-rose-100 hover:text-rose-600 transition-colors no-underline" onclick="closeMobileMenu()">线下物料</a>',
    '        </div>',
    '      </div>',

    '    </div>',

    /* 解决方案 */
    '    <a href="solutions.html" class="block py-3 text-sm font-semibold ' + (isActive('solutions.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">解决方案</a>',

    /* 新闻动态 */
    '    <a href="news.html" class="block py-3 text-sm font-semibold ' + (isActive('news.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">新闻动态</a>',

    /* 关于我们 */
    '    <a href="about.html" class="block py-3 text-sm font-semibold ' + (isActive('about.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">关于我们</a>',

    /* 联系我们 */
    '    <a href="contact-us.html" class="block py-3 text-sm font-semibold ' + (isActive('contact-us.html') ? 'text-primary' : 'text-body') + ' border-b border-slate-100 hover:text-primary transition-colors" onclick="closeMobileMenu()">联系我们</a>',

    /* 底部快捷入口 */
    '    <div class="flex flex-col gap-3 mt-4">',
    '      <a href="user.html" class="flex items-center gap-2 py-2.5 text-sm text-muted hover:text-primary"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>个人中心</a>',
    '      <a href="cart-confirm.html" class="flex items-center gap-2 py-2.5 text-sm text-muted hover:text-primary"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>购物车 <span class="cart-badge" data-cart-badge style="position:static;display:inline-flex;margin-left:4px;">0</span></a>',
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

  /* 挂载到 window（如果页面已有自定义实现则保留，如 index.html 的 WHOIS 标签跳转） */
  window.handleDomainSearch = window.handleDomainSearch || handleDomainSearch;
  window.toggleMobileMenu = toggleMobileMenu;
  window.closeMobileMenu = closeMobileMenu;
  window.handleLogout = handleLogout;

  /* 咨询弹窗：如果页面没有定义 openConsultModal，提供兜底（仅做提醒） */
  window.openConsultModal = window.openConsultModal || function () {
    // 如果页面已有咨询弹窗 DOM，由页面自身控制
    // 此处提供 alert 兜底
    alert('请先在页面中配置咨询弹窗组件');
  };

  /* ============================
     5. 购物车工具（cartUtils）
     ============================ */

  var CART_KEY = 'cartItems';
  var CART_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>';

  function cartRead() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function cartWrite(items) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (e) {}
  }

  function cartRefreshBadge() {
    var count = cartRead().length;
    var badges = document.querySelectorAll('[data-cart-badge]');
    for (var i = 0; i < badges.length; i++) {
      badges[i].textContent = count;
    }
    var countEl = document.querySelector('[data-cart-dropdown-count]');
    if (countEl) countEl.textContent = '共 ' + count + ' 笔';
    var listEl = document.querySelector('[data-cart-dropdown-list]');
    if (listEl) {
      if (count === 0) {
        listEl.innerHTML = '<div class="cart-empty">暂无待结算订单</div>';
      } else {
        var items = cartRead();
        var html = items.slice(0, 3).map(function(it) {
          return '<div class="cart-item">'
            + '<div class="cart-item-icon">' + CART_ICON_SVG + '</div>'
            + '<div class="cart-item-info">'
            +   '<div class="cart-item-name">' + escapeHtml(it.productName || it.productType) + '</div>'
            +   '<div class="cart-item-meta"><span>' + escapeHtml(it.productType) + '</span><span>·</span><span class="text-primary">待结算</span></div>'
            + '</div>'
            + '<div class="cart-item-price">¥' + formatPrice(it.price) + '</div>'
            + '</div>';
        }).join('');
        if (items.length > 3) {
          html += '<div class="cart-empty" style="padding:12px;font-size:12px;">还有 ' + (items.length - 3) + ' 件…</div>';
        }
        listEl.innerHTML = html;
      }
    }
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatPrice(n) {
    var num = Number(n) || 0;
    return num.toLocaleString('zh-CN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  function ensureFlyHost() {
    var host = document.getElementById('flyHost');
    if (!host) {
      host = document.createElement('div');
      host.id = 'flyHost';
      document.body.appendChild(host);
    }
    return host;
  }

  function ensureCartToast() {
    var toast = document.getElementById('cartToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cartToast';
      toast.className = 'cart-toast';
      toast.innerHTML = '<span class="cart-toast-check">✓</span><span class="cart-toast-text">已加入购物车</span>';
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showCartToast(text) {
    var toast = ensureCartToast();
    var textEl = toast.querySelector('.cart-toast-text');
    if (textEl && text) textEl.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function() {
      toast.classList.remove('show');
    }, 2500);
  }

  function cartFlyTo(btnEl) {
    if (!btnEl) return;
    var badge = document.querySelector('.cart-badge');
    if (!badge) { showCartToast('已加入购物车'); return; }
    var host = ensureFlyHost();

    var btnRect = btnEl.getBoundingClientRect();
    var badgeRect = badge.getBoundingClientRect();

    var startX = btnRect.left + btnRect.width / 2 - 28;
    var startY = btnRect.top + btnRect.height / 2 - 28;
    var endX = badgeRect.left + badgeRect.width / 2 - 28;
    var endY = badgeRect.top + badgeRect.height / 2 - 28;

    var fly = document.createElement('div');
    fly.className = 'fly-item';
    fly.innerHTML = CART_ICON_SVG;
    fly.style.left = startX + 'px';
    fly.style.top = startY + 'px';
    fly.style.opacity = '1';
    host.appendChild(fly);

    // 强制回流再加 transform，触发过渡
    void fly.offsetWidth;
    fly.style.transform = 'translate(' + (endX - startX) + 'px, ' + (endY - startY) + 'px) scale(0.2) rotate(360deg)';
    fly.style.opacity = '0.2';

    setTimeout(function() {
      fly.remove();
      badge.classList.remove('cart-badge-pulse');
      // 强制回流以重启动画
      void badge.offsetWidth;
      badge.classList.add('cart-badge-pulse');
      setTimeout(function() { badge.classList.remove('cart-badge-pulse'); }, 600);
    }, 600);
  }

  function cartAddItem(item) {
    if (!item || !item.id) {
      item = item || {};
      item.id = 'item-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }
    var items = cartRead();
    // 同 id 累加 qty，避免重复行
    var existing = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === item.id) { existing = items[i]; break; }
    }
    if (existing) {
      existing.qty = (existing.qty || 1) + (item.qty || 1);
    } else {
      item.qty = item.qty || 1;
      // 申请资料复选框默认不勾选（费用为0）
      if (typeof item.regService === 'undefined') {
        item.regService = false;
      }
      // 商品默认选中（参与结算）
      if (typeof item.selected === 'undefined') {
        item.selected = true;
      }
      items.push(item);
    }
    cartWrite(items);
    cartRefreshBadge();
    return items;
  }

  function cartRemoveItem(id) {
    var items = cartRead();
    items = items.filter(function(it) { return it.id !== id; });
    cartWrite(items);
    cartRefreshBadge();
    return items;
  }

  function cartClear() {
    cartWrite([]);
    cartRefreshBadge();
  }

  function orderRead() {
    try {
      return JSON.parse(localStorage.getItem('orderData') || 'null');
    } catch (e) {
      return null;
    }
  }

  function orderWrite(data) {
    try {
      localStorage.setItem('orderData', JSON.stringify(data));
    } catch (e) {}
  }

  function orderClear() {
    localStorage.removeItem('orderData');
  }

  function registrantRead() {
    try {
      return JSON.parse(localStorage.getItem('registrantInfo') || 'null');
    } catch (e) {
      return null;
    }
  }

  function registrantWrite(data) {
    try {
      localStorage.setItem('registrantInfo', JSON.stringify(data));
    } catch (e) {}
  }

  function registrantClear() {
    localStorage.removeItem('registrantInfo');
  }

  function registrantTemplatesRead() {
    try {
      return JSON.parse(localStorage.getItem('registrantTemplates') || '[]');
    } catch (e) {
      return [];
    }
  }

  function registrantTemplatesWrite(data) {
    try {
      localStorage.setItem('registrantTemplates', JSON.stringify(data));
    } catch (e) {}
  }

  window.cartUtils = {
    addItem: cartAddItem,
    removeItem: cartRemoveItem,
    clear: cartClear,
    getItems: cartRead,
    count: function() { return cartRead().length; },
    flyTo: cartFlyTo,
    refresh: cartRefreshBadge,
    toast: showCartToast,
    order: {
      read: orderRead,
      write: orderWrite,
      clear: orderClear
    },
    registrant: {
      read: registrantRead,
      write: registrantWrite,
      clear: registrantClear
    },
    registrantTemplates: {
      read: registrantTemplatesRead,
      write: registrantTemplatesWrite
    }
  };

  // 页面加载时立即刷新角标和浮窗
  cartRefreshBadge();

  // 监听其他标签页 / 同页修改
  window.addEventListener('storage', function(e) {
    if (e.key === CART_KEY) cartRefreshBadge();
  });

  /* ============================
     6. 通用弹窗工具（modalUtils）
     ============================ */

  var modalOverlay = null;
  var modalDialog = null;
  var currentConfirmCallback = null;
  var currentCloseCallback = null;

  function initModal() {
    if (document.getElementById('xicelModal')) return;

    var modalHTML = [
      '<div id="xicelModal" class="xicel-modal-overlay">',
      '  <div class="xicel-modal-dialog">',
      '    <div class="xicel-modal-header">',
      '      <div class="xicel-modal-icon"></div>',
      '      <div class="xicel-modal-title"></div>',
      '      <div class="xicel-modal-message"></div>',
      '    </div>',
      '    <div class="xicel-modal-body"></div>',
      '    <div class="xicel-modal-footer"></div>',
      '  </div>',
      '</div>'
    ].join('');

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modalOverlay = document.getElementById('xicelModal');
    modalDialog = modalOverlay.querySelector('.xicel-modal-dialog');

    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
        closeModal();
      }
    });
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
    if (currentCloseCallback) {
      currentCloseCallback();
      currentCloseCallback = null;
    }
    currentConfirmCallback = null;
  }

  function showAlert(type, message, onClose) {
    initModal();
    var iconEl = modalOverlay.querySelector('.xicel-modal-icon');
    var titleEl = modalOverlay.querySelector('.xicel-modal-title');
    var msgEl = modalOverlay.querySelector('.xicel-modal-message');
    var bodyEl = modalOverlay.querySelector('.xicel-modal-body');
    var footerEl = modalOverlay.querySelector('.xicel-modal-footer');

    iconEl.className = 'xicel-modal-icon ' + type;
    switch (type) {
      case 'success':
        iconEl.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>';
        titleEl.textContent = '操作成功';
        break;
      case 'error':
        iconEl.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>';
        titleEl.textContent = '操作失败';
        break;
      case 'warning':
        iconEl.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';
        titleEl.textContent = '提示';
        break;
      default:
        iconEl.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';
        titleEl.textContent = '信息';
    }

    msgEl.textContent = message;
    bodyEl.innerHTML = '';
    footerEl.innerHTML = '<button class="xicel-modal-btn ok" onclick="closeModal()">确定</button>';

    currentCloseCallback = onClose || null;
    document.body.style.overflow = 'hidden';
    modalOverlay.classList.add('show');
  }

  function showConfirm(title, message, onConfirm) {
    initModal();
    var iconEl = modalOverlay.querySelector('.xicel-modal-icon');
    var titleEl = modalOverlay.querySelector('.xicel-modal-title');
    var msgEl = modalOverlay.querySelector('.xicel-modal-message');
    var bodyEl = modalOverlay.querySelector('.xicel-modal-body');
    var footerEl = modalOverlay.querySelector('.xicel-modal-footer');

    iconEl.className = 'xicel-modal-icon warning';
    iconEl.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';

    titleEl.textContent = title || '确认操作';
    msgEl.textContent = message || '';
    bodyEl.innerHTML = '';

    footerEl.innerHTML = [
      '<button class="xicel-modal-btn cancel" onclick="closeModal()">取消</button>',
      '<button class="xicel-modal-btn confirm" onclick="handleModalConfirm()">确认</button>'
    ].join('');

    currentConfirmCallback = onConfirm || null;
    currentCloseCallback = null;
    document.body.style.overflow = 'hidden';
    modalOverlay.classList.add('show');
  }

  function handleModalConfirm() {
    if (currentConfirmCallback) {
      currentConfirmCallback();
    }
    closeModal();
  }

  window.showAlert = showAlert;
  window.showConfirm = showConfirm;
  window.closeModal = closeModal;
  window.handleModalConfirm = handleModalConfirm;
  window.initModal = initModal;

})();
