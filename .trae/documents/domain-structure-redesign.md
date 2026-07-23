# 优化「什么是域名」板块的域名结构图解

## 1. Summary (任务概述)

当前 `products-domain.html` 中「什么是域名」板块下方的域名结构图解存在视觉缺陷：三张标注卡片宽度不一致（中间 `xicel` 卡片最窄、左右两个最宽）、文字换行不规整（"网页版"被拆成两行、"公司/企业网站"换行）、连接线无法精准指向每张卡片的中心点，整体视觉松散不平衡。

本次改进采用"**重做成三栏卡片式**"方案：横向并排三张等宽的解读卡片（图标 + 名称 + 域名片段 + 通俗解释），域名主体在上方居中展示，每张卡片顶部向上伸出彩色"标签线"精准连到域名对应片段。结构更现代、平衡、易读。

## 2. Current State Analysis (现状分析)

### 文件位置
- HTML: [products-domain.html](file:///d:/Users/123/Desktop/xicel网站/xicel/products-domain.html) 第 125-172 行（域名结构图解区域）
- CSS: [products-domain.css](file:///d:/Users/123/Desktop/xicel网站/xicel/css/products-domain.css)

### 现有实现（问题点）
- 用 `grid grid-cols-3` + `auto` 间隔列布局（`1fr auto 1fr auto 1fr`）
- 每张标注卡片使用 `style="max-width: 110px;"` 硬编码宽度限制
- 连接线是简单的垂直线（`h-5 w-px`），落点在卡片**左缘**而非中心
- 配色：蓝 (`blue-50/200/600`) + 靛 (`indigo-50/200/600`) + 绿 (`emerald-50/200/600`) 三个色系，但缺少统一装饰

### 用户反馈的核心痛点
1. **三张卡片宽度不一致**（中间最窄、左右最宽）
2. **文字换行不规整**（"网页版"换行成"网页""版"，"打开网站"挤几行）
3. **连接线指偏了**（指向卡片边缘而非中心）

## 3. Proposed Changes (具体改动)

### 3.1 重写 HTML 结构（products-domain.html 第 125-172 行）

将现有的 grid 上下连接结构替换为新的"上域名 + 下三栏卡片"结构：

```html
<!-- 域名结构图解 -->
<div class="mt-8 pt-6 border-t border-blue-200/50">
  <p class="text-sm font-medium text-blue-600 mb-6 text-center">
    拿 <strong class="font-mono text-base">www.xicel.com</strong> 举个例子 👇
  </p>

  <!-- 域名主体（上方居中）-->
  <div class="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold font-mono mb-3">
    <span class="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-200">www</span>
    <span class="text-slate-300">.</span>
    <span class="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg border border-indigo-200">xicel</span>
    <span class="text-slate-300">.</span>
    <span class="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg border border-emerald-200">com</span>
  </div>

  <!-- 三张并排解读卡片（强制等宽）-->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- 入口名 -->
    <div class="domain-anno-card domain-anno-blue">
      <div class="anno-line"></div>
      <div class="anno-body">
        <div class="anno-icon">🚪</div>
        <div class="anno-title">入口名</div>
        <div class="anno-frag">www</div>
        <div class="anno-desc">网页版入口，<br>就是"打开网站"的意思</div>
      </div>
    </div>

    <!-- 品牌名 -->
    <div class="domain-anno-card domain-anno-indigo">
      <div class="anno-line"></div>
      <div class="anno-body">
        <div class="anno-icon">🏠</div>
        <div class="anno-title">品牌名</div>
        <div class="anno-frag">xicel</div>
        <div class="anno-desc">你自己的名字，<br>独一无二的标识</div>
      </div>
    </div>

    <!-- 身份标签 -->
    <div class="domain-anno-card domain-anno-emerald">
      <div class="anno-line"></div>
      <div class="anno-body">
        <div class="anno-icon">🏷️</div>
        <div class="anno-title">身份标签</div>
        <div class="anno-frag">com</div>
        <div class="anno-desc">商业/公司，<br>企业的身份证明</div>
      </div>
    </div>
  </div>
</div>
```

### 3.2 新增 CSS 样式（products-domain.css 末尾追加）

```css
/* ===== 域名结构图解 - 三栏卡片 ===== */
.domain-anno-card {
  position: relative;
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 24px 16px 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.domain-anno-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* 顶部"标签线"——从卡片向上伸出的连接线，精准指向域名对应片段 */
.anno-line {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 16px;
  background: currentColor;
  opacity: 0.35;
}
.anno-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}

.domain-anno-blue {
  color: #2563EB;       /* blue-600 */
  border-color: #BFDBFE;
}
.domain-anno-indigo {
  color: #4F46E5;       /* indigo-600 */
  border-color: #C7D2FE;
}
.domain-anno-emerald {
  color: #059669;       /* emerald-600 */
  border-color: #A7F3D0;
}

.anno-body { color: #1E293B; }  /* 卡片正文用深色 */
.anno-icon {
  font-size: 28px;
  margin-bottom: 8px;
  line-height: 1;
}
.anno-title {
  font-size: 15px;
  font-weight: 700;
  color: currentColor;  /* 跟随卡片主色 */
  margin-bottom: 6px;
}
.anno-frag {
  display: inline-block;
  font-family: monospace;
  font-size: 14px;
  font-weight: 700;
  color: currentColor;
  background: rgba(0, 0, 0, 0.04);
  padding: 2px 10px;
  border-radius: 6px;
  margin-bottom: 10px;
}
.anno-desc {
  font-size: 12.5px;
  color: #64748B;
  line-height: 1.6;
}

/* 移动端：三卡堆叠，连接线变短 */
@media (max-width: 768px) {
  .anno-line { height: 12px; top: -6px; }
  .anno-icon { font-size: 24px; }
}
```

### 3.3 设计要点说明

- **三栏等宽**：用 `grid grid-cols-3` 强制等宽，彻底解决宽度不一致问题。
- **连接线精准指向卡片顶部中心**：用 `position: absolute` + `left: 50% transform: translateX(-50%)`，从卡片正中央向上伸出 + 顶端小圆点，天然精准对齐。
- **文字不再奇怪换行**：
  - 标题 `入口名 / 品牌名 / 身份标签` 都很短，3 个字，绝不换行
  - 域名片段用等宽字体 `font-mono`，不会变形
  - 描述文字主动用 `<br>` 精确控制换行，避免浏览器自动换行造成的混乱
- **配色统一**：每张卡片用"主色 = currentColor"贯穿（顶条线、圆点、标题、片段标签），但卡片主体白底保证可读性。
- **响应式**：移动端三卡堆叠，连接线变短，图标变小。

## 4. Assumptions & Decisions (假设与决策)

- **保留域名主体在上方的视觉层级**：用户原意是"举例说明"，所以 `www.xicel.com` 应当显著居于上方。
- **三栏卡片等宽优先于内容自适应**：用户首要痛点是"宽度不一致"，所以选 `grid-cols-3` 而不是 `flex-1`。
- **连接线从卡片顶部中心伸出**：比从域名向下引线更精准，因为卡片的中心点是确定的，域名片段的 X 坐标需要 JS 计算。
- **配色保留三色系**：用户对蓝/靛/绿三色已有视觉记忆，沿用而不强行统一。
- **不动其他板块**：本次只改「什么是域名」板块下方的图解，不影响其他内容。

## 5. Verification (验证步骤)

1. 在浏览器打开 `http://localhost:8080/products-domain.html`，切换到 **域名注册** Tab。
2. 滚到「什么是域名」板块，确认：
   - 三张卡片宽度完全一致
   - "入口名/品牌名/身份标签"标题不换行
   - 域名片段 `www / xicel / com` 用等宽字体展示
   - 描述文字换行规整（每张卡片都是 2 行）
   - 三条彩色连接线从每张卡片顶部中心精准向上伸出
3. 缩窄浏览器至移动端宽度（<768px），确认：
   - 三张卡片自动堆叠为单列
   - 连接线变短但依然精准
   - 整体无横向滚动条
4. 控制台无报错。
