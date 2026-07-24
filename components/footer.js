(function() {
  var footerHTML = `
<!-- ========== 页脚 ========== -->
<footer class="bg-white border-t border-slate-200">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

      <!-- Logo & 品牌简介 -->
      <div>
        <div class="flex items-center gap-2.5 mb-4">
          <img src="assets/images/logo.png" alt="xicel" class="h-8 w-auto">
        </div>
        <p class="text-muted text-sm leading-relaxed">全球品牌基建服务商</p>
      </div>

      <!-- 产品服务（含域名价格） -->
      <div>
        <h4 class="font-semibold mb-4 text-sm text-body">产品服务</h4>
        <ul class="space-y-2.5">
          <li><a href="products-idc.html" class="text-muted hover:text-primary text-sm transition-colors">IDC服务</a></li>
          <li><a href="products-domain.html" class="text-muted hover:text-primary text-sm transition-colors">品牌护城河</a></li>
          <li><a href="products-ip.html" class="text-muted hover:text-primary text-sm transition-colors">知识产权</a></li>
          <li><a href="products-design.html" class="text-muted hover:text-primary text-sm transition-colors">设计服务</a></li>
          <li><a href="domain-pricing.html" class="text-muted hover:text-primary text-sm transition-colors">域名价格</a></li>
        </ul>
      </div>

      <!-- 关于我们（含帮助中心） -->
      <div>
        <h4 class="font-semibold mb-4 text-sm text-body">关于我们</h4>
        <ul class="space-y-2.5">
          <li><a href="about.html" class="text-muted hover:text-primary text-sm transition-colors">关于xicel</a></li>
          <li><a href="news.html" class="text-muted hover:text-primary text-sm transition-colors">新闻动态</a></li>
          <li><a href="help.html" class="text-muted hover:text-primary text-sm transition-colors">帮助中心</a></li>
        </ul>
      </div>

      <!-- 联系方式 + 二维码 -->
      <div>
        <h4 class="font-semibold mb-4 text-sm text-body">联系方式</h4>
        <ul class="space-y-2.5 text-sm text-muted mb-6">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span>sales01@xicel.com</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>184-7548-8381</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>深圳市龙华区汇隆大厦</span>
          </li>
        </ul>
        <div class="w-[120px] h-[120px] rounded-xl border border-slate-200 overflow-hidden bg-white">
          <img src="assets/images/sini_qr.png" alt="扫码咨询" class="w-full h-full object-cover">
        </div>
      </div>

    </div>

    <!-- 版权信息 -->
    <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
      <span>&copy; 2026 深圳市希赛乐科技有限公司</span>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">粤ICP备2025412192号</a>
    </div>
  </div>
</footer>
`;

  var container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = footerHTML;
  }
})();
