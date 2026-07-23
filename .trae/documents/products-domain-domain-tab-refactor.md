# products-domain.html【域名注册】Tab内容重构计划

## 一、修改目标

重构 products-domain.html 的【域名注册】标签页内容：
1. 去掉热门域名后缀板块（96-284行）
2. 去掉顶部四个价格卡片（64-93行）
3. 替换为首页的域名搜索模块（包含域名注册搜索 + WHOIS查询）
4. 补充域名知识解释内容（什么是域名、批量注册说明）

---

## 二、当前结构分析

### products-domain.html【域名注册】Tab（61-294行）
```html
<!-- Tab 1: 域名注册 -->
<section class="brand-content py-16 bg-white" id="content-domain">
  <div class="max-w-7xl mx-auto px-6">
    <!-- 副标题 -->
    <p class="text-lg text-muted max-w-3xl mb-12">全球顶级域名覆盖...</p>

    <!-- 【需删除】顶部四个价格卡片（64-93行） -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div class="bg-white rounded-2xl...">域名注册</div>
      <div class="bg-white rounded-2xl...">域名交易</div>
      <div class="bg-white rounded-2xl...">域名批量注册</div>
      <div class="bg-white rounded-2xl...">WHOIS查询</div>
    </div>

    <!-- 【需删除】热门域名后缀板块（96-284行） -->
    <div class="mb-16">
      <h3 class="text-xl font-bold text-body mb-8">🔥 热门域名后缀</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 16张域名卡片 -->
      </div>
      <div class="text-center">
        <a href="domain-pricing.html">查看全部 200+ 域名后缀及价格 →</a>
      </div>
    </div>

    <!-- 保留：常见问题FAQ（286-293行） -->
    <div class="max-w-3xl">
      <h3 class="text-xl font-bold text-body mb-6">常见问题</h3>
      ...
    </div>
  </div>
</section>
```

### index.html 域名搜索模块（202-239行）
```html
<!-- 统一容器 -->
<div class="unified-search relative z-0 bg-white rounded-2xl shadow-sm border border-border p-8">
  <!-- 标签切换栏 -->
  <div class="flex justify-center gap-2 mb-6 flex-wrap" id="searchTabs">
    <button class="search-tab bg-primary text-white..." data-tab="domain-register">域名注册</button>
    <button class="search-tab bg-white text-muted..." data-tab="whois">WHOIS查询</button>
  </div>

  <!-- 域名注册子模式标签 -->
  <div class="flex justify-center gap-2 mb-6 flex-wrap" id="domainRegisterSubTabs">
    <button id="sub-tab-explore" class="search-tab active...">域名探索</button>
    <button id="sub-tab-batch" class="search-tab...">批量查询</button>
  </div>

  <!-- 搜索框行 -->
  <div class="flex items-center gap-2" id="searchRow">
    <div class="flex-1 relative" id="searchInputWrapper">
      <div class="search-input-wrapper...">
        <svg class="...">...</svg>
        <input id="domainSearchInput" type="text" placeholder="..." />
      </div>
    </div>
    <button onclick="handleDomainSearch()" class="search-btn...">
      <svg class="w-4 h-4">...</svg>
      搜索
      <span class="free-ribbon">免费</span>
    </button>
  </div>
</div>
```

### 关键JavaScript函数
- `handleDomainSearch()`：搜索逻辑（index.html 88-164行）
- `switchDomainRegisterMode()`：域名注册子模式切换（index.html 38-79行）
- 标签切换逻辑（index.html 1400-1446行）

---

## 三、修改方案

### 步骤1：删除【热门域名后缀板块】（96-284行）
```diff
- <div class="mb-16">
-   <div class="flex items-center justify-between mb-8">
-     <h3 class="text-xl font-bold text-body">🔥 热门域名后缀</h3>
-     <a href="domain-pricing.html" class="...">查看全部域名价格 →</a>
-   </div>
-   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
-     <!-- 16张域名卡片 -->
-   </div>
-   <div class="text-center">
-     <a href="domain-pricing.html" class="...">查看全部 200+ 域名后缀及价格 →</a>
-   </div>
- </div>
```

### 步骤2：删除【顶部四个价格卡片】（64-93行）
```diff
- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
-   <div class="bg-white rounded-2xl...">域名注册</div>
-   <div class="bg-white rounded-2xl...">域名交易</div>
-   <div class="bg-white rounded-2xl...">域名批量注册</div>
-   <div class="bg-white rounded-2xl...">WHOIS查询</div>
- </div>
```

### 步骤3：替换为【域名搜索模块】
在副标题后（原63行位置）插入域名搜索模块：

```html
<!-- ========== 域名搜索模块 ========== -->
<div class="mb-16">
  <!-- 统一容器 -->
  <div class="unified-search relative z-0 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
    <!-- 标签切换栏 -->
    <div class="flex justify-center gap-2 mb-6 flex-wrap" id="searchTabs">
      <button class="search-tab bg-primary text-white rounded-full px-5 py-2 text-sm font-medium shadow-sm transition-all" data-tab="domain-register" data-placeholder="输入域名前缀（如 mybrand），探索所有后缀的可用性">域名注册</button>
      <button class="search-tab bg-white text-muted rounded-full px-5 py-2 text-sm transition-all" data-tab="whois" data-placeholder="输入域名查询WHOIS信息">WHOIS查询</button>
    </div>

    <!-- 域名注册子模式标签 -->
    <div class="flex justify-center gap-2 mb-6 flex-wrap" id="domainRegisterSubTabs">
      <button id="sub-tab-explore" class="search-tab active bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-medium transition-all" onclick="switchDomainRegisterMode('explore')">域名探索</button>
      <button id="sub-tab-batch" class="search-tab bg-white text-muted rounded-full px-4 py-1.5 text-xs font-medium transition-all" onclick="switchDomainRegisterMode('batch')">批量查询</button>
    </div>

    <!-- 搜索框行 -->
    <div class="flex items-center gap-2" id="searchRow">
      <div class="flex-1 relative" id="searchInputWrapper">
        <div class="search-input-wrapper relative overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-shadow">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none z-10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input id="domainSearchInput" type="text" placeholder="输入域名前缀（如 mybrand），探索所有后缀的可用性" class="w-full min-w-0 pl-10 pr-3 border-0 text-sm text-body placeholder-muted focus:outline-none h-12" style="transition: padding-right 0.2s;" />
        </div>
      </div>
      <button onclick="handleDomainSearch()" class="search-btn relative flex items-center gap-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 h-12 rounded-xl transition-colors whitespace-nowrap overflow-visible">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        搜索
        <span class="free-ribbon">免费</span>
      </button>
    </div>
  </div>
</div>
```

### 步骤4：补充域名知识解释内容
在搜索模块后、常见问题前插入：

```html
<!-- ========== 域名知识解释 ========== -->
<div class="mb-16">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- 什么是域名 -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-start gap-4 mb-4">
        <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-body mb-2">什么是域名？</h3>
          <p class="text-sm text-muted leading-relaxed">域名是互联网上的"门牌号"，用于标识网站、邮箱等网络资源的地址。它由前缀（如 mybrand）和后缀（如 .com）组成，便于用户记忆和访问，替代复杂的 IP 地址。拥有一个好域名，是品牌数字化的第一步。</p>
        </div>
      </div>
      <div class="bg-slate-50 rounded-xl p-4">
        <div class="text-xs text-muted mb-2">域名结构示例</div>
        <div class="flex items-center gap-2">
          <span class="text-sm font-semibold text-primary">mybrand</span>
          <span class="text-sm text-muted">.</span>
          <span class="text-sm font-semibold text-accent">com</span>
          <span class="text-xs text-muted ml-2">→ 前缀 + 后缀</span>
        </div>
      </div>
    </div>

    <!-- 批量注册说明 -->
    <div class="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-start gap-4 mb-4">
        <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"/><path d="M9 12h6M12 9v6"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-bold text-body mb-2">批量注册域名</h3>
          <p class="text-sm text-muted leading-relaxed">需要一次性注册多个域名？使用批量查询功能，一次输入多个完整域名（如 mybrand.com、mybrand.cn），系统自动检测可用性并批量下单。节省时间、提高效率，适合品牌保护、域名投资等场景。</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">支持多域名同时检测</span>
        <span class="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full">一键加入购物车</span>
      </div>
    </div>
  </div>
</div>
```

### 步骤5：引入必要的JavaScript函数
在 `</section>` 之前（FAQ后）添加：

```html
<script>
// ===== 域名注册子模式切换 =====
var currentDomainRegisterMode = 'explore'; // 'explore' | 'batch'

function switchDomainRegisterMode(mode) {
  currentDomainRegisterMode = mode;

  var tabs = document.querySelectorAll('#domainRegisterSubTabs .search-tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active', 'bg-primary/10', 'text-primary');
    tab.classList.add('bg-white', 'text-muted');
  });

  var activeTab = document.getElementById('sub-tab-' + mode);
  activeTab.classList.add('active', 'bg-primary/10', 'text-primary');
  activeTab.classList.remove('bg-white', 'text-muted');

  var wrapper = document.querySelector('#searchInputWrapper .search-input-wrapper');
  if (!wrapper) return;

  if (mode === 'explore') {
    wrapper.innerHTML = '<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none z-10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><input id="domainSearchInput" type="text" placeholder="输入域名前缀（如 mybrand），探索所有后缀的可用性" class="w-full min-w-0 pl-10 pr-3 border-0 text-sm text-body placeholder-muted focus:outline-none h-12" style="transition: padding-right 0.2s;" />';
    var input = document.getElementById('domainSearchInput');
    if (input) {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleDomainSearch();
        }
      });
    }
  } else {
    wrapper.innerHTML = '<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none z-10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><textarea id="domainSearchInput" rows="2" placeholder="输入完整域名，支持批量查询，Enter 换行，每行一个" class="w-full min-w-0 pl-10 pr-3 border-0 text-sm text-body placeholder-muted focus:outline-none resize-none overflow-y-auto overflow-x-hidden" style="min-height:72px;max-height:160px;line-height:1.6;background:transparent;padding-top:calc(36px - 0.8em);"></textarea>';
    var textarea = document.getElementById('domainSearchInput');
    if (textarea) {
      textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            handleDomainSearch();
          }
        }
      });
    }
  }
}

// ===== 搜索处理 =====
function handleDomainSearch() {
  var isBatch = currentDomainRegisterMode === 'batch';
  var inputEl = document.getElementById('domainSearchInput');
  var query = inputEl ? inputEl.value.trim() : '';

  // 批量查询域名格式验证
  if (isBatch && query) {
    var lines = query.split('\n').filter(function(q) { return q.trim(); });
    var invalidLines = lines.filter(function(line) {
      return !line.trim().match(/\.[a-zA-Z0-9]+$/);
    });
    if (invalidLines.length > 0) {
      alert('批量查询模式每行必须包含完整域名（如 mybrand.com）');
      return;
    }
  }

  // 判断当前激活的搜索标签
  var activeTab = document.querySelector('#searchTabs .search-tab.bg-primary');
  var activeTabName = activeTab ? activeTab.getAttribute('data-tab') : 'domain-register';

  // 搜索框为空时，按标签跳转对应页面
  if (!query) {
    if (activeTabName === 'whois') {
      window.location.href = 'whois.html';
    } else {
      window.location.href = 'domain-search.html';
    }
    return;
  }

  // WHOIS 查询 → 跳转 whois.html
  if (activeTabName === 'whois') {
    // 如果没带后缀，自动补 .com
    if (query.indexOf('.') === -1) {
      query = query + '.com';
    }
    window.location.href = 'whois.html?domain=' + encodeURIComponent(query);
    return;
  }

  // 域名注册：如果用户输入的是域名后缀（以 . 开头，如 .com / .cn），直接跳订单页
  if (query.indexOf('.') === 0) {
    window.location.href = 'domain-order.html?domain=' + encodeURIComponent(query);
  } else {
    if (currentDomainRegisterMode === 'explore') {
      // 域名探索模式：判断是否包含完整域名
      var hasFullDomain = query.match(/\.[a-zA-Z0-9]+$/);
      if (hasFullDomain) {
        window.location.href = 'domain-search.html?mode=single&q=' + encodeURIComponent(query);
      } else {
        window.location.href = 'domain-search.html?q=' + encodeURIComponent(query);
      }
    } else {
      // 批量查询模式
      window.location.href = 'domain-search.html?mode=batch&q=' + encodeURIComponent(query);
    }
  }
}

// ===== 标签切换 =====
(function(){
  var tabs = document.querySelectorAll('#searchTabs .search-tab');
  var domainRegisterSubTabs = document.getElementById('domainRegisterSubTabs');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('bg-primary','text-white','font-medium','shadow-sm'); t.classList.add('bg-white','text-muted'); });
      tab.classList.add('bg-primary','text-white','font-medium','shadow-sm');
      tab.classList.remove('bg-white','text-muted');
      var currentInput = document.getElementById('domainSearchInput');
      if (currentInput) currentInput.placeholder = tab.dataset.placeholder || '请输入要查询的内容';
      var isDomainRegister = tab.dataset.tab === 'domain-register';
      if (domainRegisterSubTabs) domainRegisterSubTabs.style.display = isDomainRegister ? '' : 'none';

      // 非域名注册标签时，切回单行输入框
      if (!isDomainRegister) {
        switchDomainRegisterMode('explore');
      }
    });
  });
})();
</script>
```

---

## 四、验证步骤

1. **功能验证**：
   - 域名注册搜索：输入前缀，跳转到 domain-search.html
   - WHOIS查询：输入域名，跳转到 whois.html?domain=参数
   - 子模式切换：域名探索/批量查询切换正常
   - 批量查询：输入多行域名，格式验证正常

2. **样式验证**：
   - 搜索模块样式与首页一致
   - 域名知识解释卡片样式统一
   - 响应式布局正常（mobile/tablet/desktop）

3. **链接验证**：
   - 搜索按钮跳转正确
   - FAQ折叠展开正常

---

## 五、预期结果

修改后，products-domain.html【域名注册】Tab 将包含：
1. ✅ 副标题（保留）
2. ✅ 域名搜索模块（域名注册 + WHOIS）
3. ✅ 域名知识解释（什么是域名、批量注册说明）
4. ✅ 常见问题FAQ（保留）

已删除：
1. ❌ 热门域名后缀板块
2. ❌ 顶部四个价格卡片