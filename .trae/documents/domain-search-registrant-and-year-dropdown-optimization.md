# domain-search.html 注册人模板/年限下拉/滚动问题优化方案

## 概要

对 domain-search.html 页面进行四项优化：
1. 注册人下拉菜单中的【管理模板】/【创建模板】按钮改为编辑图标，跳转到 user.html#panel-domain-registrant 新窗口
2. 移除批量控件中的【管理注册人】按钮
3. 年限选择下拉选项改为 1-10 年（无折扣文案）
4. 修复下拉框滚动时的定位/关闭/页面滚动问题

## 现状分析

### 文件
- `d:\Users\123\Desktop\xicel网站\xicel\domain-search.html`

### 关键代码段

| 功能 | 位置 | 说明 |
|---|---|---|
| 批量操作栏 | HTML 第 80-96 行 | 包含"管理注册人"按钮（第 94 行） |
| 行内年限下拉 | `toggleTableYearsDropdown()` 第 719-791 行 | YEARS_OPTIONS 在 723-729 行 |
| 批量年限下拉 | `toggleBatchYearsDropdown()` 第 1140-1221 行 | YEARS_OPTIONS 在 1144-1150 行 |
| 行内注册人下拉 | `toggleTableRegistrantDropdown()` 第 1060-1137 行 | "创建模板"（1076 行）/"管理模板"（1088 行）使用 + 号图标，点击调 `openBatchRegistrant()` |
| 批量注册人下拉 | `toggleBatchRegistrantDropdown()` 第 1224-1316 行 | 同上，"创建模板"（1240 行）/"管理模板"（1252 行） |
| 注册人弹窗函数 | 第 1527-1696 行 | 包含 open/close/create/switch/collect/save/apply 共 7 个函数 |
| 下拉面板 CSS | style.css 第 90-106 行 | `position: fixed`，打开时用 `getBoundingClientRect()` 定位 |

### 下拉滚动问题根因
- 所有下拉使用 `position: fixed` + 打开瞬间的 `getBoundingClientRect()` 定位，滚动页面后位置不更新导致"乱跑"
- 点击外部关闭逻辑只处理 click 事件，未处理 scroll 事件，但用户感知为"滚动时自动关闭"
- `.dropdown-panel-inner` 未阻止 wheel 事件冒泡，滚动面板时页面也会滚动

## 变更内容

### 1. 【管理模板】改为编辑图标并跳转

**修改位置**：`toggleTableRegistrantDropdown()` 和 `toggleBatchRegistrantDropdown()` 函数中的 `data-action="manage"` 选项

**变更**：
- SVG 图标从加号（`M12 4v16m8-8H4`）改为编辑/修改图标（`M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z`）
- 点击事件从 `openBatchRegistrant()` 改为 `window.open('user.html#panel-domain-registrant', '_blank')`
- 涉及 4 处（行内无模板/有模板 × 批量无模板/有模板）

### 2. 移除批量控件中的【管理注册人】按钮

**修改位置**：HTML 第 94 行

**变更**：删除整行 `<button onclick="openBatchRegistrant()" ...>管理注册人</button>`

### 3. 年限选择改为 1-10 年

**修改位置**：
- `toggleTableYearsDropdown()` 第 723-729 行的 `YEARS_OPTIONS`
- `toggleBatchYearsDropdown()` 第 1144-1150 行的 `YEARS_OPTIONS`

**变更**：
```js
// 旧
{value:'1', label:'1 年'},
{value:'2', label:'2 年 省10%'},
{value:'3', label:'3 年 省15%'},
{value:'5', label:'5 年 省20%'},
{value:'10', label:'10 年 省25%'}

// 新
{value:'1', label:'1 年'},
{value:'2', label:'2 年'},
{value:'3', label:'3 年'},
{value:'4', label:'4 年'},
{value:'5', label:'5 年'},
{value:'6', label:'6 年'},
{value:'7', label:'7 年'},
{value:'8', label:'8 年'},
{value:'9', label:'9 年'},
{value:'10', label:'10 年'}
```

### 4. 修复下拉框滚动问题

**修改位置**：所有下拉创建函数中的 dropdown 定位和事件处理

**具体变更**：

#### 4a. 阻止 dropdown-panel-inner 的 wheel 事件冒泡
在每个 dropdown 创建后、append 到 body 前，添加：
```js
// 阻止滚动事件冒泡到页面
inner.addEventListener('wheel', function(ev) {
  ev.stopPropagation();
}, { passive: false });
```

#### 4b. 滚动时重新定位下拉框
在每个 dropdown 创建后，添加 scroll 事件监听器：
```js
function repositionDropdown() {
  if (!document.body.contains(dropdown)) {
    window.removeEventListener('scroll', repositionDropdown);
    return;
  }
  var newRect = btn.getBoundingClientRect();
  dropdown.style.top = (newRect.bottom + 4) + 'px';
  dropdown.style.left = newRect.left + 'px';
}
window.addEventListener('scroll', repositionDropdown, { passive: true });
```

同时需要在 dropdown 移除时清理 scroll 监听。

**涉及函数**：
- `toggleTableYearsDropdown()` (第 719 行)
- `toggleTableRegistrantDropdown()` (第 1060 行)
- `toggleBatchYearsDropdown()` (第 1140 行)
- `toggleBatchRegistrantDropdown()` (第 1224 行)
- `togglePageSizeDropdown()` (第 1384 行)

### 5. 移除废弃的注册人弹窗代码

**修改位置**：第 1526-1696 行

**变更**：删除以下函数（不再被任何代码引用）：
- `openBatchRegistrant()` (1527-1537)
- `closeBatchRegistrantModal()` (1539-1545)
- `createBatchRegistrantModal()` (1547-1602)
- `switchBatchRegType()` (1605-1612)
- `collectBatchRegistrant()` (1614-1641)
- `saveBatchRegTemplate()` (1643-1656)
- `applyBatchRegistrant()` (1658-1696)
- 变量 `batchRegType` (1604)

## 验证步骤

1. 打开 domain-search.html，搜索域名
2. 点击行内注册人下拉 → 验证【管理模板】选项显示编辑图标 → 点击后在新窗口打开 user.html#panel-domain-registrant
3. 验证批量控件中没有【管理注册人】按钮
4. 点击行内/批量年限下拉 → 验证选项为 1-10 年，无折扣文案
5. 打开下拉框后滚动页面 → 验证下拉框跟随按钮位置移动
6. 在年限/注册人下拉面板内部滚动 → 验证页面不随之滚动
