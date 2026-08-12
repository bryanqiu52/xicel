/**
 * xicel 全站滚动入场动效组件
 * 用法：在页面 <body> 末尾引入此脚本即可（<script src="components/reveal.js"></script>），无需其他配置。
 * 功能：自动为页面中非首屏的 section 板块内的卡片 / 链接卡片添加滚动入场动画，
 *       元素滚入视口时缓缓浮现。
 * 安全降级（避免内容永远不可见）：
 *   1. 老浏览器不支持 IntersectionObserver -> 不做任何动画，元素保持可见
 *   2. JS 加载失败 -> scroll-reveal 类从未被添加，元素保持可见
 *   3. 隐藏容器（tab 面板 / 下拉面板 / 表单 / 表格）内的元素不加动画，避免"切出来是空的"
 */
(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) return;

  // 这些容器内部不参与动画
  var SKIP_SELECTOR = 'form, table, [class*="hero"], [class*="tab-panel"], [class*="subtab"], .dropdown-panel';

  // 收集一个板块内"像卡片"的元素
  function collectCards(root) {
    var nodes = root.querySelectorAll('[class*="card"], .grid > a, .grid > article');
    var list = [];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      // 排除表单 / 表格 / 下拉面板 / tab 面板内的元素
      if (el.closest(SKIP_SELECTOR)) continue;
      // 排除当前不可见（display:none 容器）内的元素，避免永远不触发
      if (el.offsetParent === null) continue;
      // 排除嵌套在其它卡片内部的装饰元素（如 product-card 内的 gradient-bar），
      // 否则内部小元素会单独触发动画，和卡片主体脱节。
      // 注意：el 自身可能也含 "card"（如 gradient-bar），因此要检查父元素是否为卡片
      if (el.parentElement && el.parentElement.closest('[class*="card"]')) continue;
      list.push(el);
    }
    return list;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');

    // 跳过页面第一个 section（通常是首屏 hero / 登录卡片），其余板块逐个处理
    for (var s = 1; s < sections.length; s++) {
      var section = sections[s];
      var cards = collectCards(section);
      cards.forEach(function (el, i) {
        el.classList.add('scroll-reveal');
        el.style.transitionDelay = (i % 4) * 0.1 + 's';
      });

      // 板块标题（居中标题）也加动画，前提是它不在卡片内部
      var heading = section.querySelector('.text-center');
      if (heading && !heading.closest('[class*="card"]')) {
        heading.classList.add('scroll-reveal');
      }
    }

    // 观察所有待动画元素，进入视口后显示并停止观察
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    var targets = document.querySelectorAll('.scroll-reveal');
    for (var j = 0; j < targets.length; j++) {
      observer.observe(targets[j]);
    }
  });
})();
