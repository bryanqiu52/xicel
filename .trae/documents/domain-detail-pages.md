# 域名详情页创建计划

## 概述
为每种域名后缀创建独立的信息展示页面，包含域名特点、适用场景、注册要求等文字与图片信息。点击 index.html 和 domain-pricing.html 中的域名卡片可跳转至对应详情页。

## 当前状态分析

### 现有域名卡片
**index.html 首页轮播**（12个）：.com, .cn, .net, .com.cn, .top, .xyz, .site, .shop, .vip, .club, .work, .link

**domain-pricing.html 价格页**（35+个），按分区：
- 热门推荐：.com, .cn, .net, .com.cn
- 新顶级域名：.top, .xyz, .site, .shop, .vip, .club, .work, .link, .ai
- 中国地区：.中国, .hk, .com.hk, .com.tw
- 亚太地区：.jp, .sg, .kr, .au, .in, .my, .com.my, .id
- 欧洲地区：.uk, .de, .fr, .eu, .it, .pl, .ru, .fi, .pt, .lu
- 美洲地区：.us, .ca, .mx
- 中东/其他：.ae, .sa, .am, .ua, .com.tr

### 当前卡片行为
- 卡片中的"注册 →"链接指向 `domain-order.html?domain=.xxx`
- 整个卡片有 `data-domain` 属性和 `cursor-pointer`，但目前无点击跳转

### 项目技术模式
- 静态 HTML + Tailwind CSS + 原生 JS，无后端
- 页面共享 `components/navbar.js` + `components/footer.js`
- CSS 分离：`css/style.css` 为公共样式，各页面可有独立 `<style>`
- 配色：primary/#0A66FF, accent/#00D4AA
- 板块标题格式：inline-flex + text-sm 英文标签 + 3xl/4xl 中文标题 + text-lg 副标题

## 实施方案

### 核心设计：单模板 + URL 参数 + JS 数据驱动
创建 **1个模板页面** `domain-detail.html`，通过 URL 参数 `?tld=com` 动态渲染不同域名的内容。域名数据集中在 JS 文件 `js/domain-data.js` 中管理。

**理由**：35+ 种域名若每种单独建 HTML 文件，维护成本极高；单模板 + 数据驱动更符合项目规范，且用户体验与独立页面完全一致（URL 不同、内容不同）。

### 新增文件

#### 1. `js/domain-data.js` — 域名数据源
为每种域名后缀定义以下字段：
```js
window.DOMAIN_DATA = {
  com: {
    tld: '.com',
    fullName: '通用顶级域名',
    category: '热门推荐',       // 对应 domain-pricing.html 的分区
    categoryTag: 'POPULAR',
    iconBg: 'bg-blue-600',
    iconText: 'CO',
    flag: null,                  // 国旗图标路径，null 则用 iconBg/iconText
    price: 98,
    promoPrice: null,            // 促销价，null 则显示原价
    promoTag: null,              // 促销标签文字
    description: '...',          // 域名一句话简介
    features: ['...'],           // 特点列表（4-6条）
    useCases: ['...'],           // 适用场景（3-5条）
    requirements: '...',         // 注册要求说明
    advantages: ['...'],         // 优势亮点（带图标）
    priceTable: [                // 多年价格表
      { years: 1, price: 98 },
      { years: 2, price: 196 },
      { years: 3, price: 285 },
      { years: 5, price: 450 },
      { years: 10, price: 780 }
    ]
  },
  cn: { ... },
  // ... 所有域名
};
```

#### 2. `domain-detail.html` — 域名详情模板页
页面结构：
1. **Hero 区域**：蓝色渐变背景，显示域名后缀大标题 + 全称 + 一句话描述 + 价格 + 立即注册按钮
2. **域名概览**：左侧域名图标/国旗大图 + 右侧关键信息卡片（首年价格、注册要求、所属分类、管理规则）
3. **域名特点**：卡片网格展示 features，每个特点配图标
4. **适用场景**：场景卡片，每个场景配图标和描述文字
5. **多年价格表**：表格展示 1/2/3/5/10 年续费价格
6. **同类域名推荐**：同 category 下的其他域名卡片（点击可跳转）
7. **CTA 区域**：立即注册 + 域名查询入口

#### 3. `css/domain-detail.css` — 详情页独立样式
包含 Hero 区域、概览布局、特点卡片、场景卡片、价格表等特有样式。

### 修改文件

#### 4. `index.html` — 首页域名卡片添加跳转
- 给轮播区域的域名卡片容器添加点击事件：点击卡片（非"注册 →"按钮区域）跳转 `domain-detail.html?tld=xxx`
- 保持"注册 →"按钮原有跳转 `domain-order.html` 不变

#### 5. `domain-pricing.html` — 价格页域名卡片添加跳转
- 同样给卡片容器添加点击跳转到详情页
- 保持"注册 →"按钮原有跳转不变

### 域名数据内容规划
为每种域名后缀撰写真实的中文内容（特点、适用场景、注册要求等），参考业界常见域名信息描述。

## 假设与决策
1. **单模板方案**：用 URL 参数而非多 HTML 文件，降低维护成本
2. **数据文件独立**：`js/domain-data.js` 单独管理，不内嵌 HTML 中
3. **卡片点击行为**：点击卡片整体跳转详情页，"注册 →"仍跳注册页
4. **图片处理**：使用 icon/国旗图标 + Tailwind 色块，不引入新图片资源
5. **SEO/分享**：静态页面无服务端渲染，标题通过 JS 动态设置 document.title

## 验证步骤
1. 刷新 index.html，点击任意域名卡片，确认跳转至 domain-detail.html 且显示对应域名信息
2. 刷新 domain-pricing.html，点击任意分区域名卡片，确认同样可跳转
3. 在 domain-detail.html 中，点击"同类域名推荐"卡片，确认可跳转到另一个域名详情页
4. 点击"立即注册"按钮，确认跳转到 domain-order.html?domain=.xxx
5. 输入不存在的 tld 参数，确认显示友好提示或回退到 domain-pricing.html
6. 移动端响应式检查
