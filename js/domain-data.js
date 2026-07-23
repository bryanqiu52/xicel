/**
 * 域名详情数据源
 * 键名为域名后缀去掉点号（如 .com → com, .com.cn → comcn）
 * 查找时通过 getDomainData(tld) 函数，tld 带点号
 */
window.DOMAIN_DATA = {

  // ===== 热门推荐 =====
  com: {
    tld: '.com',
    fullName: '通用顶级域名',
    category: '热门推荐',
    categoryTag: 'POPULAR',
    iconBg: 'bg-blue-600',
    iconText: 'CO',
    flag: null,
    price: 98,
    promoPrice: null,
    promoTag: null,
    description: '全球最广泛使用的域名后缀，国际品牌与商业网站的首选标识',
    features: [
      { icon: 'globe', title: '全球通用', desc: '全球注册量超过1.5亿，认知度最高的域名后缀' },
      { icon: 'shield', title: '品牌保护', desc: '国际品牌首选，拥有.com域名是品牌专业性的象征' },
      { icon: 'zap', title: 'SEO友好', desc: '搜索引擎对.com域名权重较高，有利于自然排名' },
      { icon: 'users', title: '用户信任', desc: '用户对.com域名有天然信任感，提升点击率' },
      { icon: 'refresh', title: '注册简单', desc: '无特殊资质要求，个人和企业均可注册' },
      { icon: 'clock', title: '生效快速', desc: '注册后DNS即时生效，最快数分钟即可解析' }
    ],
    useCases: [
      { icon: 'building', title: '企业官网', desc: '展示企业形象与产品服务的首选域名' },
      { icon: 'shopping-bag', title: '电商平台', desc: '在线商城与电商网站的标准配置' },
      { icon: 'globe-2', title: '国际化业务', desc: '面向全球市场的跨国企事业组织' },
      { icon: 'briefcase', title: '专业服务', desc: '咨询、法律、金融等专业服务行业' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。域名长度3-63个字符，支持英文字母、数字和连字符。',
    priceTable: [
      { years: 1, price: 98 },
      { years: 2, price: 196 },
      { years: 3, price: 285 },
      { years: 5, price: 450 },
      { years: 10, price: 780 }
    ]
  },

  cn: {
    tld: '.cn',
    fullName: '中国国家顶级域名',
    category: '热门推荐',
    categoryTag: 'POPULAR',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/cn.svg',
    price: 35,
    promoPrice: 35,
    promoTag: '促销',
    description: '中国国家顶级域名，在中国市场具有权威地位和法律效力',
    features: [
      { icon: 'flag', title: '国家标识', desc: '代表中国的国家顶级域名，具有官方权威性' },
      { icon: 'shield', title: '品牌保护', desc: '在中国境内受CNNIC管理，法律保障完善' },
      { icon: 'map-pin', title: '本土优势', desc: '面向中国用户，本地搜索引擎收录友好' },
      { icon: 'file-text', title: '实名认证', desc: '需提交实名认证材料，确保域名使用规范' },
      { icon: 'trending-up', title: '注册量高', desc: '中国注册量最大的域名后缀之一' }
    ],
    useCases: [
      { icon: 'building', title: '国内企业', desc: '面向国内市场的企业官网与品牌网站' },
      { icon: 'landmark', title: '政府机构', desc: '政府部门与事业单位的官方网站' },
      { icon: 'graduation-cap', title: '教育机构', desc: '学校与教育机构的在线门户' },
      { icon: 'briefcase', title: '本土业务', desc: '专注中国市场的业务与服务' }
    ],
    requirements: '需实名认证。个人需提供身份证信息，企业需提供营业执照。域名长度3-63个字符。',
    priceTable: [
      { years: 1, price: 35 },
      { years: 2, price: 70 },
      { years: 3, price: 99 },
      { years: 5, price: 155 },
      { years: 10, price: 280 }
    ]
  },

  net: {
    tld: '.net',
    fullName: '网络服务机构域名',
    category: '热门推荐',
    categoryTag: 'POPULAR',
    iconBg: 'bg-blue-600',
    iconText: 'NE',
    flag: null,
    price: 79,
    promoPrice: null,
    promoTag: null,
    description: '最初为网络服务机构设计，现已成为与.com并列的经典通用域名',
    features: [
      { icon: 'wifi', title: '网络属性', desc: '天然具有网络、技术、基础设施的行业联想' },
      { icon: 'globe', title: '国际通用', desc: '全球认可的通用顶级域名，无地域限制' },
      { icon: 'shield', title: '品牌补充', desc: '常作为.com的品牌保护域名一并注册' },
      { icon: 'code', title: '技术社区', desc: '开源项目、技术社区常选用.net域名' },
      { icon: 'refresh', title: '注册简单', desc: '无资质限制，注册流程与.com一致' }
    ],
    useCases: [
      { icon: 'wifi', title: '网络服务商', desc: 'ISP、CDN、云计算等网络基础设施企业' },
      { icon: 'code', title: '技术社区', desc: '开源项目、开发者社区和技术文档站' },
      { icon: 'shield', title: '品牌保护', desc: '与.com搭配注册，防止品牌域名被抢注' },
      { icon: 'server', title: '基础设施', desc: '邮件服务器、DNS等网络基础设施' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。域名长度3-63个字符。',
    priceTable: [
      { years: 1, price: 79 },
      { years: 2, price: 158 },
      { years: 3, price: 225 },
      { years: 5, price: 355 },
      { years: 10, price: 630 }
    ]
  },

  'comcn': {
    tld: '.com.cn',
    fullName: '中国商业域名',
    category: '热门推荐',
    categoryTag: 'POPULAR',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/cn.svg',
    price: 39,
    promoPrice: 39,
    promoTag: '促销',
    description: '中国商业机构专用域名，适合在中国市场开展商业活动的企业',
    features: [
      { icon: 'shopping-bag', title: '商业属性', desc: '明确标识商业性质，适合企业与电商' },
      { icon: 'flag', title: '中国标识', desc: '具有中国特色的商业域名，本土认可度高' },
      { icon: 'shield', title: '法律保障', desc: '受CNNIC管理，在中国法律框架下运营' },
      { icon: 'file-text', title: '实名认证', desc: '需实名认证，确保域名归属清晰' },
      { icon: 'trending-up', title: '性价比高', desc: '价格低于.com，是本土商业的优选' }
    ],
    useCases: [
      { icon: 'shopping-bag', title: '国内电商', desc: '面向中国消费者的电商网站' },
      { icon: 'building', title: '中小企业', desc: '国内中小企业的品牌官网' },
      { icon: 'store', title: '本地商户', desc: '本地生活服务与零售企业' },
      { icon: 'truck', title: '国内贸易', desc: '从事国内贸易与服务的企业' }
    ],
    requirements: '需实名认证。个人需提供身份证，企业需提供营业执照。域名长度3-63个字符。',
    priceTable: [
      { years: 1, price: 39 },
      { years: 2, price: 78 },
      { years: 3, price: 111 },
      { years: 5, price: 175 },
      { years: 10, price: 310 }
    ]
  },

  // ===== 新顶级域名 =====
  top: {
    tld: '.top',
    fullName: '巅峰顶级域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-amber-600',
    iconText: 'TO',
    flag: null,
    price: 9,
    promoPrice: null,
    promoTag: null,
    description: '寓意"顶级、巅峰"，简短好记，价格亲民，适合个人和小企业',
    features: [
      { icon: 'trending-up', title: '寓意巅峰', desc: '"top"含义积极向上，传达领先、卓越的理念' },
      { icon: 'zap', title: '价格亲民', desc: '首年仅需9元，入门门槛极低' },
      { icon: 'hash', title: '短后缀', desc: '仅3个字符，域名整体更短更好记' },
      { icon: 'refresh', title: '注册简单', desc: '无需实名认证，即开即用' }
    ],
    useCases: [
      { icon: 'user', title: '个人博客', desc: '个人博客与作品展示站' },
      { icon: 'rocket', title: '创业项目', desc: '初创项目的测试站与官网' },
      { icon: 'star', title: '排名榜单', desc: '各类排行榜与评选网站' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 9 },
      { years: 2, price: 18 },
      { years: 3, price: 25 },
      { years: 5, price: 40 },
      { years: 10, price: 70 }
    ]
  },

  xyz: {
    tld: '.xyz',
    fullName: '新一代通用域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-purple-600',
    iconText: 'XY',
    flag: null,
    price: 8,
    promoPrice: null,
    promoTag: null,
    description: '新一代通用顶级域名，不限行业与创意，极低价格即可拥有',
    features: [
      { icon: 'sparkles', title: '创意无限', desc: '不受行业限制，适合各类创意与实验项目' },
      { icon: 'zap', title: '超低价格', desc: '首年仅8元，是目前最经济的域名选择之一' },
      { icon: 'hash', title: '短后缀', desc: '3字符后缀，域名简短易记' },
      { icon: 'globe', title: '全球通用', desc: '国际通用域名，无地域限制' }
    ],
    useCases: [
      { icon: 'code', title: '开发者项目', desc: '开源项目与开发者个人站点' },
      { icon: 'lightbulb', title: '创意实验', desc: '创意项目与MVP的测试域名' },
      { icon: 'user', title: '个人站点', desc: '个人博客与简历站' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 8 },
      { years: 2, price: 16 },
      { years: 3, price: 22 },
      { years: 5, price: 35 },
      { years: 10, price: 60 }
    ]
  },

  site: {
    tld: '.site',
    fullName: '建站专属域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-emerald-600',
    iconText: 'SI',
    flag: null,
    price: 15,
    promoPrice: null,
    promoTag: null,
    description: '直述"网站"含义，语义明确，适合各类网站建设场景',
    features: [
      { icon: 'layout', title: '语义明确', desc: '"site"直译为"站点"，含义一目了然' },
      { icon: 'globe', title: '国际通用', desc: '无地域限制，全球可用' },
      { icon: 'zap', title: '价格实惠', desc: '首年15元，性价比出众' },
      { icon: 'refresh', title: '注册简单', desc: '无资质要求，快速注册' }
    ],
    useCases: [
      { icon: 'layout', title: '通用网站', desc: '各类信息展示与营销网站' },
      { icon: 'building', title: '企业建站', desc: '中小企业建站的优选域名' },
      { icon: 'user', title: '个人站点', desc: '个人博客与兴趣站' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 15 },
      { years: 2, price: 30 },
      { years: 3, price: 42 },
      { years: 5, price: 68 },
      { years: 10, price: 120 }
    ]
  },

  shop: {
    tld: '.shop',
    fullName: '电商专属域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-orange-600',
    iconText: 'SH',
    flag: null,
    price: 68,
    promoPrice: null,
    promoTag: null,
    description: '专为电商与在线零售设计的域名，语义直白，消费者一看即知',
    features: [
      { icon: 'shopping-bag', title: '电商属性', desc: '"shop"直译为"商店"，天然适合电商' },
      { icon: 'trending-up', title: '行业趋势', desc: '电商域名正在成为在线零售的新标配' },
      { icon: 'users', title: '用户识别', desc: '消费者对.shop域名的购物属性一目了然' },
      { icon: 'globe', title: '全球通用', desc: '不限地域，适合跨境电商' }
    ],
    useCases: [
      { icon: 'shopping-bag', title: '在线商城', desc: 'B2C与C2C电商网站' },
      { icon: 'store', title: '品牌旗舰店', desc: '品牌在线旗舰店与专区' },
      { icon: 'truck', title: '跨境电商', desc: '面向海外市场的电商网站' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 68 },
      { years: 2, price: 136 },
      { years: 3, price: 192 },
      { years: 5, price: 306 },
      { years: 10, price: 540 }
    ]
  },

  vip: {
    tld: '.vip',
    fullName: '尊贵身份域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-amber-600',
    iconText: 'VI',
    flag: null,
    price: 29,
    promoPrice: null,
    promoTag: null,
    description: '寓意"尊贵、专属"，适合会员制服务和高端品牌',
    features: [
      { icon: 'crown', title: '尊贵含义', desc: '"VIP"象征尊贵与专属，传达高端定位' },
      { icon: 'users', title: '会员标识', desc: '适合会员制平台与专属服务' },
      { icon: 'star', title: '品牌溢价', desc: '自带高端标签，提升品牌调性' },
      { icon: 'zap', title: '价格合理', desc: '首年29元，兼具品质与性价比' }
    ],
    useCases: [
      { icon: 'crown', title: '会员服务', desc: '会员制平台与专属内容站' },
      { icon: 'star', title: '高端品牌', desc: '高端品牌官网与专属入口' },
      { icon: 'gift', title: '专属权益', desc: '权益中心与客户服务专区' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 29 },
      { years: 2, price: 58 },
      { years: 3, price: 81 },
      { years: 5, price: 130 },
      { years: 10, price: 230 }
    ]
  },

  club: {
    tld: '.club',
    fullName: '社群俱乐部域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-pink-600',
    iconText: 'CL',
    flag: null,
    price: 19,
    promoPrice: null,
    promoTag: null,
    description: '专为社群、俱乐部和兴趣组织设计的域名，凝聚力的线上标识',
    features: [
      { icon: 'users', title: '社群属性', desc: '"club"直译为"俱乐部"，天然适合社群' },
      { icon: 'heart', title: '兴趣聚集', desc: '适合各类兴趣小组与爱好者社区' },
      { icon: 'globe', title: '国际通用', desc: '全球可用，无地域限制' },
      { icon: 'zap', title: '价格实惠', desc: '首年19元，低门槛建站' }
    ],
    useCases: [
      { icon: 'users', title: '社群组织', desc: '兴趣社群与会员俱乐部' },
      { icon: 'dumbbell', title: '健身会所', desc: '健身房与运动俱乐部' },
      { icon: 'music', title: '文艺团体', desc: '音乐、艺术与创作团体' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 19 },
      { years: 2, price: 38 },
      { years: 3, price: 54 },
      { years: 5, price: 86 },
      { years: 10, price: 152 }
    ]
  },

  work: {
    tld: '.work',
    fullName: '职场个人站域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-cyan-600',
    iconText: 'WO',
    flag: null,
    price: 12,
    promoPrice: null,
    promoTag: null,
    description: '面向职场与工作的域名，适合个人简历与职业展示',
    features: [
      { icon: 'briefcase', title: '职业属性', desc: '"work"直译为"工作"，语义明确' },
      { icon: 'user', title: '个人品牌', desc: '适合个人简历与作品集网站' },
      { icon: 'zap', title: '价格低廉', desc: '首年12元，经济实惠' },
      { icon: 'globe', title: '全球通用', desc: '无地域限制，国际可用' }
    ],
    useCases: [
      { icon: 'user', title: '个人简历', desc: '在线简历与求职展示站' },
      { icon: 'briefcase', title: '自由职业', desc: '自由职业者作品与服务展示' },
      { icon: 'file-text', title: '工作日志', desc: '工作记录与职场博客' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 12 },
      { years: 2, price: 24 },
      { years: 3, price: 34 },
      { years: 5, price: 54 },
      { years: 10, price: 96 }
    ]
  },

  link: {
    tld: '.link',
    fullName: '链接跳转域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-indigo-600',
    iconText: 'LI',
    flag: null,
    price: 25,
    promoPrice: null,
    promoTag: null,
    description: '意为"链接"，适合短链接服务与多平台统一入口',
    features: [
      { icon: 'link', title: '链接属性', desc: '"link"直译为"链接"，适合跳转与聚合' },
      { icon: 'share-2', title: '分享入口', desc: '社交媒体统一入口与短链接服务' },
      { icon: 'smartphone', title: '移动友好', desc: '短域名适合移动端分享与传播' },
      { icon: 'globe', title: '全球通用', desc: '无地域与资质限制' }
    ],
    useCases: [
      { icon: 'share-2', title: '链接聚合', desc: '多平台链接统一入口（如Linktree）' },
      { icon: 'smartphone', title: '短链接', desc: 'URL缩短服务与营销追踪' },
      { icon: 'share-2', title: '社交入口', desc: '社交媒体个人主页跳转' }
    ],
    requirements: '无特殊限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 25 },
      { years: 2, price: 50 },
      { years: 3, price: 70 },
      { years: 5, price: 112 },
      { years: 10, price: 200 }
    ]
  },

  ai: {
    tld: '.ai',
    fullName: '人工智能专属域名',
    category: '新顶级域名',
    categoryTag: 'NEW gTLD',
    iconBg: 'bg-purple-600',
    iconText: 'AI',
    flag: null,
    price: 1280,
    promoPrice: null,
    promoTag: null,
    description: '人工智能领域的标志性域名，AI企业与项目的首选标识',
    features: [
      { icon: 'cpu', title: 'AI属性', desc: '".ai"是人工智能领域最具辨识度的域名' },
      { icon: 'trending-up', title: '行业热门', desc: 'AI浪潮下需求暴增，具有投资价值' },
      { icon: 'shield', title: '行业权威', desc: '拥有.ai域名象征在AI领域的专业地位' },
      { icon: 'globe', title: '国际通用', desc: '原为安圭拉国家ccTLD，现广泛用于AI行业' }
    ],
    useCases: [
      { icon: 'cpu', title: 'AI企业', desc: '人工智能公司与AI产品官网' },
      { icon: 'code', title: 'AI项目', desc: '开源AI项目与研究机构' },
      { icon: 'graduation-cap', title: 'AI工具', desc: 'AI SaaS工具与API服务' }
    ],
    requirements: '无特殊限制，但注册价格较高。域名长度3-63个字符。',
    priceTable: [
      { years: 1, price: 1280 },
      { years: 2, price: 2560 },
      { years: 3, price: 3648 },
      { years: 5, price: 5760 },
      { years: 10, price: 10240 }
    ]
  },

  // ===== 中国地区 =====
  zhongguo: {
    tld: '.中国',
    fullName: '中文顶级域名',
    category: '中国地区',
    categoryTag: 'CHINA',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/cn.svg',
    price: 480,
    promoPrice: null,
    promoTag: null,
    description: '中文顶级域名，支持中文域名解析，体现中国文化特色',
    features: [
      { icon: 'type', title: '中文标识', desc: '纯中文域名，符合中文用户使用习惯' },
      { icon: 'flag', title: '国家特色', desc: '体现中国文化特色的顶级域名' },
      { icon: 'globe', title: '国际支持', desc: '主流浏览器与DNS均支持中文域名' },
      { icon: 'shield', title: '品牌保护', desc: '保护中文品牌在互联网上的权益' }
    ],
    useCases: [
      { icon: 'building', title: '中文品牌', desc: '以中文品牌为主的企业官网' },
      { icon: 'landmark', title: '文化机构', desc: '文化传承与教育机构' },
      { icon: 'flag', title: '政府机构', desc: '使用中文名称的政府部门' }
    ],
    requirements: '需实名认证，且需提交中文域名使用说明。',
    priceTable: [
      { years: 1, price: 480 },
      { years: 2, price: 960 },
      { years: 3, price: 1368 },
      { years: 5, price: 2160 },
      { years: 10, price: 3840 }
    ]
  },

  hk: {
    tld: '.hk',
    fullName: '香港地区域名',
    category: '中国地区',
    categoryTag: 'CHINA',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/cn.svg',
    price: 299,
    promoPrice: null,
    promoTag: null,
    description: '香港特别行政区域名，适合面向香港市场的企业与个人',
    features: [
      { icon: 'map-pin', title: '地域标识', desc: '明确标识香港地区，提升本地信任度' },
      { icon: 'globe', title: '国际窗口', desc: '香港作为国际金融中心，.hk域名国际认可度高' },
      { icon: 'shield', title: '品牌保护', desc: '保护品牌在香港市场的线上权益' },
      { icon: 'file-text', title: '本地要求', desc: '需提供香港本地地址证明' }
    ],
    useCases: [
      { icon: 'building', title: '港企官网', desc: '香港企业品牌网站' },
      { icon: 'briefcase', title: '金融服务', desc: '香港金融与保险机构' },
      { icon: 'globe', title: '跨境业务', desc: '内地-香港跨境业务企业' }
    ],
    requirements: '需提供香港本地地址证明。个人与企业均可注册。',
    priceTable: [
      { years: 1, price: 299 },
      { years: 2, price: 598 },
      { years: 3, price: 849 },
      { years: 5, price: 1345 },
      { years: 10, price: 2390 }
    ]
  },

  'comhk': {
    tld: '.com.hk',
    fullName: '香港商业域名',
    category: '中国地区',
    categoryTag: 'CHINA',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/cn.svg',
    price: 298,
    promoPrice: null,
    promoTag: null,
    description: '香港商业机构专用域名，明确商业属性与香港市场定位',
    features: [
      { icon: 'shopping-bag', title: '商业属性', desc: '明确标识商业性质，适合在港经营企业' },
      { icon: 'map-pin', title: '香港标识', desc: '面向香港市场的商业首选' },
      { icon: 'shield', title: '合规保障', desc: '受HKDNR管理，合规运营有保障' },
      { icon: 'file-text', title: '资质要求', desc: '需香港商业登记证明' }
    ],
    useCases: [
      { icon: 'shopping-bag', title: '港商企业', desc: '在香港注册的商业企业' },
      { icon: 'briefcase', title: '贸易公司', desc: '进出口与贸易企业' },
      { icon: 'building', title: '品牌官网', desc: '在港品牌的官方展示站' }
    ],
    requirements: '需提供香港商业登记证（BR），仅商业实体可注册。',
    priceTable: [
      { years: 1, price: 298 },
      { years: 2, price: 596 },
      { years: 3, price: 846 },
      { years: 5, price: 1341 },
      { years: 10, price: 2382 }
    ]
  },

  'comtw': {
    tld: '.com.tw',
    fullName: '台湾商业域名',
    category: '中国地区',
    categoryTag: 'CHINA',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/cn.svg',
    price: 368,
    promoPrice: null,
    promoTag: null,
    description: '台湾商业机构域名，适合面向台湾市场的商业活动',
    features: [
      { icon: 'shopping-bag', title: '商业属性', desc: '明确商业性质，适合台湾市场企业' },
      { icon: 'map-pin', title: '地域标识', desc: '面向台湾地区的商业标识' },
      { icon: 'globe', title: '两岸三地', desc: '适合两岸三地业务布局' },
      { icon: 'file-text', title: '资质要求', desc: '需提供有效证件与联系方式' }
    ],
    useCases: [
      { icon: 'building', title: '台企官网', desc: '台湾企业品牌网站' },
      { icon: 'shopping-bag', title: '台电商城', desc: '面向台湾消费者的电商平台' },
      { icon: 'briefcase', title: '两岸业务', desc: '两岸贸易与服务企业' }
    ],
    requirements: '需提供有效证件与联络信息。无本地居住限制。',
    priceTable: [
      { years: 1, price: 368 },
      { years: 2, price: 736 },
      { years: 3, price: 1044 },
      { years: 5, price: 1656 },
      { years: 10, price: 2940 }
    ]
  },

  // ===== 亚太地区 =====
  jp: {
    tld: '.jp',
    fullName: '日本国家域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/jp.svg',
    price: 688,
    promoPrice: null,
    promoTag: null,
    description: '日本国家顶级域名，面向日本市场，要求日本本地地址',
    features: [
      { icon: 'map-pin', title: '日本标识', desc: '日本国家顶级域名，地域属性强' },
      { icon: 'shield', title: '管理严格', desc: '受JPRS管理，运营规范严格' },
      { icon: 'file-text', title: '本地要求', desc: '需提供日本本地地址' },
      { icon: 'globe', title: '市场广阔', desc: '日本互联网市场规模全球前列' }
    ],
    useCases: [
      { icon: 'building', title: '日企官网', desc: '日本企业品牌与产品网站' },
      { icon: 'shopping-bag', title: '对日电商', desc: '面向日本消费者的电商网站' },
      { icon: 'briefcase', title: '中日贸易', desc: '中日贸易与服务企业' }
    ],
    requirements: '需提供日本本地地址。可通过代理服务注册。',
    priceTable: [
      { years: 1, price: 688 },
      { years: 2, price: 1376 },
      { years: 3, price: 1956 },
      { years: 5, price: 3100 },
      { years: 10, price: 5504 }
    ]
  },

  sg: {
    tld: '.sg',
    fullName: '新加坡域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/sg.svg',
    price: 499,
    promoPrice: null,
    promoTag: null,
    description: '新加坡国家域名，东南亚金融科技中心的地域标识',
    features: [
      { icon: 'map-pin', title: '新加坡标识', desc: '东南亚金融中心的地域标识' },
      { icon: 'globe', title: '国际窗口', desc: '新加坡国际化程度高，.sg域名认可度好' },
      { icon: 'file-text', title: '本地要求', desc: '需提供新加坡本地地址' },
      { icon: 'shield', title: '管理规范', desc: '受SGNIC管理，运营规范' }
    ],
    useCases: [
      { icon: 'building', title: '新企官网', desc: '新加坡企业官网' },
      { icon: 'briefcase', title: '金融服务', desc: '金融科技与财富管理机构' },
      { icon: 'globe', title: '东南亚业务', desc: '以新加坡为基地的东南亚业务' }
    ],
    requirements: '需提供新加坡本地地址或通过代理注册。',
    priceTable: [
      { years: 1, price: 499 },
      { years: 2, price: 998 },
      { years: 3, price: 1419 },
      { years: 5, price: 2248 },
      { years: 10, price: 3992 }
    ]
  },

  kr: {
    tld: '.kr',
    fullName: '韩国域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/kr.svg',
    price: 499,
    promoPrice: null,
    promoTag: null,
    description: '韩国国家域名，面向韩国市场，适合韩企与中韩贸易',
    features: [
      { icon: 'map-pin', title: '韩国标识', desc: '韩国国家顶级域名' },
      { icon: 'globe', title: '文化输出', desc: '韩流文化影响下，.kr域名辨识度高' },
      { icon: 'file-text', title: '本地要求', desc: '需提供韩国本地地址或证件' },
      { icon: 'shield', title: '管理规范', desc: '受KRNIC管理' }
    ],
    useCases: [
      { icon: 'building', title: '韩企官网', desc: '韩国企业品牌网站' },
      { icon: 'music', title: '文化娱乐', desc: '韩流文化与娱乐内容站' },
      { icon: 'briefcase', title: '中韩贸易', desc: '中韩贸易与服务企业' }
    ],
    requirements: '需提供韩国本地地址或居民编号。可通过代理注册。',
    priceTable: [
      { years: 1, price: 499 },
      { years: 2, price: 998 },
      { years: 3, price: 1419 },
      { years: 5, price: 2248 },
      { years: 10, price: 3992 }
    ]
  },

  au: {
    tld: '.au',
    fullName: '澳大利亚域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/au.svg',
    price: 300,
    promoPrice: null,
    promoTag: null,
    description: '澳大利亚国家域名，大洋洲市场的地域标识',
    features: [
      { icon: 'map-pin', title: '澳洲标识', desc: '澳大利亚国家顶级域名' },
      { icon: 'file-text', title: '本地要求', desc: '需提供澳大利亚本地地址或ABN' },
      { icon: 'globe', title: '英语市场', desc: '英语国家市场，国际化程度高' },
      { icon: 'shield', title: '管理严格', desc: '受auDA管理，政策严格' }
    ],
    useCases: [
      { icon: 'building', title: '澳企官网', desc: '澳大利亚企业品牌网站' },
      { icon: 'briefcase', title: '中澳贸易', desc: '中澳贸易与服务企业' },
      { icon: 'graduation-cap', title: '教育机构', desc: '澳大利亚教育机构' }
    ],
    requirements: '需提供澳大利亚本地地址或ABN（澳洲商业编号）。',
    priceTable: [
      { years: 1, price: 300 },
      { years: 2, price: 600 },
      { years: 3, price: 852 },
      { years: 5, price: 1350 },
      { years: 10, price: 2400 }
    ]
  },

  'in': {
    tld: '.in',
    fullName: '印度域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/in.svg',
    price: 138,
    promoPrice: null,
    promoTag: null,
    description: '印度国家域名，面向全球人口第一大国的互联网市场',
    features: [
      { icon: 'map-pin', title: '印度标识', desc: '印度国家顶级域名' },
      { icon: 'globe', title: '市场广阔', desc: '印度互联网用户超7亿，市场潜力大' },
      { icon: 'refresh', title: '注册简单', desc: '无本地居住限制，全球可注册' },
      { icon: 'zap', title: '价格适中', desc: '首年138元，性价比合理' }
    ],
    useCases: [
      { icon: 'building', title: '印度业务', desc: '面向印度市场的企业网站' },
      { icon: 'code', title: 'IT外包', desc: '印度IT与外包服务企业' },
      { icon: 'briefcase', title: '中印贸易', desc: '中印贸易与服务企业' }
    ],
    requirements: '无本地居住限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 138 },
      { years: 2, price: 276 },
      { years: 3, price: 392 },
      { years: 5, price: 621 },
      { years: 10, price: 1104 }
    ]
  },

  my: {
    tld: '.my',
    fullName: '马来西亚域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/my.svg',
    price: 618,
    promoPrice: null,
    promoTag: null,
    description: '马来西亚国家域名，面向东南亚市场',
    features: [
      { icon: 'map-pin', title: '马来西亚标识', desc: '马来西亚国家顶级域名' },
      { icon: 'file-text', title: '本地要求', desc: '需提供马来西亚本地地址或注册证明' },
      { icon: 'globe', title: '东南亚市场', desc: '马来西亚是东南亚重要经济体' },
      { icon: 'shield', title: '管理规范', desc: '受MYNIC管理' }
    ],
    useCases: [
      { icon: 'building', title: '马企官网', desc: '马来西亚企业品牌网站' },
      { icon: 'briefcase', title: '中马贸易', desc: '中马贸易与投资企业' },
      { icon: 'shopping-bag', title: '东南亚电商', desc: '面向马来西亚的电商平台' }
    ],
    requirements: '需提供马来西亚本地注册证明。',
    priceTable: [
      { years: 1, price: 618 },
      { years: 2, price: 1236 },
      { years: 3, price: 1758 },
      { years: 5, price: 2784 },
      { years: 10, price: 4944 }
    ]
  },

  'commy': {
    tld: '.com.my',
    fullName: '马来西亚商业域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/my.svg',
    price: 618,
    promoPrice: null,
    promoTag: null,
    description: '马来西亚商业机构域名，明确商业属性',
    features: [
      { icon: 'shopping-bag', title: '商业属性', desc: '明确商业性质，适合在马经营企业' },
      { icon: 'map-pin', title: '马来西亚标识', desc: '面向马来西亚商业市场' },
      { icon: 'file-text', title: '资质要求', desc: '需马来西亚商业注册证明' },
      { icon: 'shield', title: '合规运营', desc: '受MYNIC管理，合规有保障' }
    ],
    useCases: [
      { icon: 'shopping-bag', title: '马企电商', desc: '马来西亚商业企业网站' },
      { icon: 'building', title: '品牌官网', desc: '在马品牌的官方展示站' },
      { icon: 'briefcase', title: '商业服务', desc: '商业咨询与服务企业' }
    ],
    requirements: '需提供马来西亚商业注册证明（SSM）。',
    priceTable: [
      { years: 1, price: 618 },
      { years: 2, price: 1236 },
      { years: 3, price: 1758 },
      { years: 5, price: 2784 },
      { years: 10, price: 4944 }
    ]
  },

  id: {
    tld: '.id',
    fullName: '印度尼西亚域名',
    category: '亚太地区',
    categoryTag: 'ASIA-PACIFIC',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/id.svg',
    price: 398,
    promoPrice: null,
    promoTag: null,
    description: '印度尼西亚国家域名，面向东南亚最大经济体',
    features: [
      { icon: 'map-pin', title: '印尼标识', desc: '印度尼西亚国家顶级域名' },
      { icon: 'globe', title: '市场广阔', desc: '印尼人口超2.7亿，东南亚最大市场' },
      { icon: 'file-text', title: '本地要求', desc: '需提供印尼本地身份证明' },
      { icon: 'shield', title: '管理规范', desc: '受PANDI管理' }
    ],
    useCases: [
      { icon: 'building', title: '印尼企业', desc: '面向印尼市场的企业网站' },
      { icon: 'shopping-bag', title: '印尼电商', desc: '印尼电商与数字服务' },
      { icon: 'briefcase', title: '中印尼贸易', desc: '中印尼贸易与投资企业' }
    ],
    requirements: '需提供印尼本地身份证明或注册证明。',
    priceTable: [
      { years: 1, price: 398 },
      { years: 2, price: 796 },
      { years: 3, price: 1131 },
      { years: 5, price: 1791 },
      { years: 10, price: 3182 }
    ]
  },

  // ===== 欧洲地区 =====
  uk: {
    tld: '.uk',
    fullName: '英国域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/gb.svg',
    price: 200,
    promoPrice: null,
    promoTag: null,
    description: '英国国家域名，英语市场的重要地域标识',
    features: [
      { icon: 'map-pin', title: '英国标识', desc: '英国国家顶级域名' },
      { icon: 'globe', title: '英语市场', desc: '英语核心市场，国际认可度高' },
      { icon: 'refresh', title: '注册简单', desc: '无本地居住限制，全球可注册' },
      { icon: 'shield', title: '管理成熟', desc: '受Nominet管理，体系成熟' }
    ],
    useCases: [
      { icon: 'building', title: '英企官网', desc: '英国企业品牌网站' },
      { icon: 'briefcase', title: '金融法律', desc: '金融、法律等传统优势行业' },
      { icon: 'graduation-cap', title: '教育机构', desc: '英国大学与教育机构' }
    ],
    requirements: '无本地居住限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 200 },
      { years: 2, price: 400 },
      { years: 3, price: 568 },
      { years: 5, price: 900 },
      { years: 10, price: 1600 }
    ]
  },

  de: {
    tld: '.de',
    fullName: '德国域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/de.svg',
    price: 139,
    promoPrice: null,
    promoTag: null,
    description: '德国国家域名，注册量全球第二，欧洲最大域名市场',
    features: [
      { icon: 'map-pin', title: '德国标识', desc: '德国国家顶级域名' },
      { icon: 'trending-up', title: '注册量高', desc: '全球注册量仅次于.com' },
      { icon: 'file-text', title: '本地要求', desc: '需提供德国本地地址' },
      { icon: 'globe', title: '欧盟市场', desc: '德国是欧盟最大经济体' }
    ],
    useCases: [
      { icon: 'building', title: '德企官网', desc: '德国企业品牌网站' },
      { icon: 'briefcase', title: '制造业', desc: '德国制造业与工业企业' },
      { icon: 'shopping-bag', title: '对欧贸易', desc: '面向欧洲市场的贸易企业' }
    ],
    requirements: '需提供德国本地地址（Administrative Contact）。',
    priceTable: [
      { years: 1, price: 139 },
      { years: 2, price: 278 },
      { years: 3, price: 395 },
      { years: 5, price: 626 },
      { years: 10, price: 1112 }
    ]
  },

  fr: {
    tld: '.fr',
    fullName: '法国域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/fr.svg',
    price: 400,
    promoPrice: null,
    promoTag: null,
    description: '法国国家域名，面向法语市场与欧盟业务',
    features: [
      { icon: 'map-pin', title: '法国标识', desc: '法国国家顶级域名' },
      { icon: 'file-text', title: '本地要求', desc: '需提供欧盟地址证明' },
      { icon: 'globe', title: '法语市场', desc: '面向法国及法语区市场' },
      { icon: 'shield', title: '管理规范', desc: '受AFNIC管理' }
    ],
    useCases: [
      { icon: 'building', title: '法企官网', desc: '法国企业品牌网站' },
      { icon: 'briefcase', title: '奢侈品', desc: '法国奢侈品与时尚品牌' },
      { icon: 'graduation-cap', title: '教育文化', desc: '法国教育与文化机构' }
    ],
    requirements: '需提供欧盟地址证明（个人或企业）。',
    priceTable: [
      { years: 1, price: 400 },
      { years: 2, price: 800 },
      { years: 3, price: 1136 },
      { years: 5, price: 1800 },
      { years: 10, price: 3200 }
    ]
  },

  eu: {
    tld: '.eu',
    fullName: '欧盟域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/eu.svg',
    price: 198,
    promoPrice: null,
    promoTag: null,
    description: '欧盟统一域名，面向整个欧洲市场的泛欧标识',
    features: [
      { icon: 'globe', title: '泛欧标识', desc: '代表整个欧盟，超越单一国家' },
      { icon: 'file-text', title: '欧盟要求', desc: '需提供欧盟成员国地址' },
      { icon: 'shield', title: '品牌保护', desc: '保护品牌在欧洲的线上权益' },
      { icon: 'trending-up', title: '市场广阔', desc: '覆盖4.5亿欧盟人口' }
    ],
    useCases: [
      { icon: 'globe', title: '泛欧业务', desc: '面向整个欧洲的业务' },
      { icon: 'building', title: '欧盟企业', desc: '欧盟成员国企业' },
      { icon: 'shield', title: '品牌保护', desc: '保护欧洲市场品牌权益' }
    ],
    requirements: '需提供欧盟成员国地址或注册证明。',
    priceTable: [
      { years: 1, price: 198 },
      { years: 2, price: 396 },
      { years: 3, price: 562 },
      { years: 5, price: 891 },
      { years: 10, price: 1584 }
    ]
  },

  it: {
    tld: '.it',
    fullName: '意大利域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/it.svg',
    price: 299,
    promoPrice: null,
    promoTag: null,
    description: '意大利国家域名，面向意大利市场与地中海地区',
    features: [
      { icon: 'map-pin', title: '意大利标识', desc: '意大利国家顶级域名' },
      { icon: 'file-text', title: '本地要求', desc: '需提供欧盟地址与证件' },
      { icon: 'globe', title: '地中海市场', desc: '面向意大利及地中海市场' },
      { icon: 'shield', title: '管理规范', desc: '受NIC.it管理' }
    ],
    useCases: [
      { icon: 'building', title: '意企官网', desc: '意大利企业品牌网站' },
      { icon: 'briefcase', title: '时尚设计', desc: '意大利时尚与设计品牌' },
      { icon: 'utensils', title: '餐饮美食', desc: '意大利餐饮与美食品牌' }
    ],
    requirements: '需提供欧盟地址及有效证件号。',
    priceTable: [
      { years: 1, price: 299 },
      { years: 2, price: 598 },
      { years: 3, price: 849 },
      { years: 5, price: 1346 },
      { years: 10, price: 2390 }
    ]
  },

  pl: {
    tld: '.pl',
    fullName: '波兰域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/pl.svg',
    price: 398,
    promoPrice: null,
    promoTag: null,
    description: '波兰国家域名，面向中东欧市场',
    features: [
      { icon: 'map-pin', title: '波兰标识', desc: '波兰国家顶级域名' },
      { icon: 'globe', title: '中东欧市场', desc: '中东欧最大经济体之一' },
      { icon: 'refresh', title: '注册灵活', desc: '注册要求相对宽松' },
      { icon: 'shield', title: '管理规范', desc: '受NASK管理' }
    ],
    useCases: [
      { icon: 'building', title: '波兰企业', desc: '面向波兰市场的企业网站' },
      { icon: 'code', title: 'IT外包', desc: '波兰IT外包与服务企业' },
      { icon: 'briefcase', title: '中东欧业务', desc: '中东欧市场业务企业' }
    ],
    requirements: '无严格本地居住限制，但建议提供本地联络信息。',
    priceTable: [
      { years: 1, price: 398 },
      { years: 2, price: 796 },
      { years: 3, price: 1131 },
      { years: 5, price: 1791 },
      { years: 10, price: 3182 }
    ]
  },

  ru: {
    tld: '.ru',
    fullName: '俄罗斯域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/ru.svg',
    price: 358,
    promoPrice: null,
    promoTag: null,
    description: '俄罗斯国家域名，面向俄语市场与独联体国家',
    features: [
      { icon: 'map-pin', title: '俄罗斯标识', desc: '俄罗斯国家顶级域名' },
      { icon: 'globe', title: '俄语市场', desc: '覆盖俄语区广阔市场' },
      { icon: 'refresh', title: '注册简单', desc: '无本地居住限制' },
      { icon: 'shield', title: '管理成熟', desc: '受RU-CENTER管理' }
    ],
    useCases: [
      { icon: 'building', title: '俄企官网', desc: '俄罗斯企业品牌网站' },
      { icon: 'briefcase', title: '中俄贸易', desc: '中俄贸易企业' },
      { icon: 'globe', title: '独联体业务', desc: '面向独联体国家的业务' }
    ],
    requirements: '无本地居住限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 358 },
      { years: 2, price: 716 },
      { years: 3, price: 1016 },
      { years: 5, price: 1611 },
      { years: 10, price: 2864 }
    ]
  },

  fi: {
    tld: '.fi',
    fullName: '芬兰域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/fi.svg',
    price: 238,
    promoPrice: null,
    promoTag: null,
    description: '芬兰国家域名，面向北欧市场与科技行业',
    features: [
      { icon: 'map-pin', title: '芬兰标识', desc: '芬兰国家顶级域名' },
      { icon: 'code', title: '科技属性', desc: '芬兰科技发达，.fi域名技术含量高' },
      { icon: 'file-text', title: '本地要求', desc: '需提供芬兰本地地址' },
      { icon: 'globe', title: '北欧市场', desc: '面向北欧高福利市场' }
    ],
    useCases: [
      { icon: 'building', title: '芬兰企业', desc: '芬兰企业品牌网站' },
      { icon: 'code', title: '科技企业', desc: '芬兰科技与通信企业' },
      { icon: 'graduation-cap', title: '教育机构', desc: '芬兰教育与研究机构' }
    ],
    requirements: '需提供芬兰本地地址。可通过代理注册。',
    priceTable: [
      { years: 1, price: 238 },
      { years: 2, price: 476 },
      { years: 3, price: 676 },
      { years: 5, price: 1071 },
      { years: 10, price: 1904 }
    ]
  },

  pt: {
    tld: '.pt',
    fullName: '葡萄牙域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/pt.svg',
    price: 637,
    promoPrice: null,
    promoTag: null,
    description: '葡萄牙国家域名，面向葡萄牙与葡语市场',
    features: [
      { icon: 'map-pin', title: '葡萄牙标识', desc: '葡萄牙国家顶级域名' },
      { icon: 'globe', title: '葡语市场', desc: '连接葡萄牙与巴西等葡语市场' },
      { icon: 'file-text', title: '本地要求', desc: '需提供葡萄牙NIF（税号）' },
      { icon: 'shield', title: '管理规范', desc: '受PT.NIC管理' }
    ],
    useCases: [
      { icon: 'building', title: '葡企官网', desc: '葡萄牙企业品牌网站' },
      { icon: 'globe', title: '葡语业务', desc: '面向葡语区的业务' },
      { icon: 'briefcase', title: '中葡贸易', desc: '中葡贸易企业' }
    ],
    requirements: '需提供葡萄牙NIF（纳税识别号）。',
    priceTable: [
      { years: 1, price: 637 },
      { years: 2, price: 1274 },
      { years: 3, price: 1811 },
      { years: 5, price: 2868 },
      { years: 10, price: 5096 }
    ]
  },

  lu: {
    tld: '.lu',
    fullName: '卢森堡域名',
    category: '欧洲地区',
    categoryTag: 'EUROPE',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/lu.svg',
    price: 328,
    promoPrice: null,
    promoTag: null,
    description: '卢森堡国家域名，面向欧盟金融中心',
    features: [
      { icon: 'map-pin', title: '卢森堡标识', desc: '卢森堡国家顶级域名' },
      { icon: 'briefcase', title: '金融中心', desc: '卢森堡是欧盟重要金融中心' },
      { icon: 'file-text', title: '本地要求', desc: '需提供卢森堡本地地址' },
      { icon: 'shield', title: '管理规范', desc: '受DNS-LU管理' }
    ],
    useCases: [
      { icon: 'building', title: '金融机构', desc: '卢森堡金融与基金公司' },
      { icon: 'briefcase', title: '欧盟业务', desc: '以卢森堡为基地的欧盟业务' },
      { icon: 'shield', title: '品牌保护', desc: '在欧洲的域名品牌保护' }
    ],
    requirements: '需提供卢森堡本地地址或注册证明。',
    priceTable: [
      { years: 1, price: 328 },
      { years: 2, price: 656 },
      { years: 3, price: 932 },
      { years: 5, price: 1476 },
      { years: 10, price: 2624 }
    ]
  },

  // ===== 美洲地区 =====
  us: {
    tld: '.us',
    fullName: '美国域名',
    category: '美洲地区',
    categoryTag: 'AMERICAS',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/us.svg',
    price: 198,
    promoPrice: null,
    promoTag: null,
    description: '美国国家域名，面向美国市场的地域标识',
    features: [
      { icon: 'map-pin', title: '美国标识', desc: '美国国家顶级域名' },
      { icon: 'globe', title: '全球最大市场', desc: '美国是全球最大互联网市场' },
      { icon: 'refresh', title: '注册简单', desc: '需声明与美国有联系，但审查宽松' },
      { icon: 'shield', title: '品牌保护', desc: '保护品牌在美国的线上权益' }
    ],
    useCases: [
      { icon: 'building', title: '美企官网', desc: '面向美国市场的企业网站' },
      { icon: 'briefcase', title: '中美贸易', desc: '中美贸易与服务企业' },
      { icon: 'shopping-bag', title: '美国电商', desc: '面向美国消费者的电商平台' }
    ],
    requirements: '需声明注册人与美国有真实联系（Nexus Requirement）。',
    priceTable: [
      { years: 1, price: 198 },
      { years: 2, price: 396 },
      { years: 3, price: 562 },
      { years: 5, price: 891 },
      { years: 10, price: 1584 }
    ]
  },

  ca: {
    tld: '.ca',
    fullName: '加拿大域名',
    category: '美洲地区',
    categoryTag: 'AMERICAS',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/ca.svg',
    price: 328,
    promoPrice: null,
    promoTag: null,
    description: '加拿大国家域名，面向北美英语/法语双语市场',
    features: [
      { icon: 'map-pin', title: '加拿大标识', desc: '加拿大国家顶级域名' },
      { icon: 'file-text', title: '本地要求', desc: '需满足加拿大在场要求' },
      { icon: 'globe', title: '双语市场', desc: '英语和法语双语国家市场' },
      { icon: 'shield', title: '管理规范', desc: '受CIRA管理' }
    ],
    useCases: [
      { icon: 'building', title: '加企官网', desc: '加拿大企业品牌网站' },
      { icon: 'briefcase', title: '中加贸易', desc: '中加贸易与服务企业' },
      { icon: 'graduation-cap', title: '教育机构', desc: '加拿大教育机构' }
    ],
    requirements: '需满足加拿大在场要求（Canadian Presence Requirements）。',
    priceTable: [
      { years: 1, price: 328 },
      { years: 2, price: 656 },
      { years: 3, price: 932 },
      { years: 5, price: 1476 },
      { years: 10, price: 2624 }
    ]
  },

  mx: {
    tld: '.mx',
    fullName: '墨西哥域名',
    category: '美洲地区',
    categoryTag: 'AMERICAS',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/mx.svg',
    price: 659,
    promoPrice: null,
    promoTag: null,
    description: '墨西哥国家域名，面向拉丁美洲第二大经济体',
    features: [
      { icon: 'map-pin', title: '墨西哥标识', desc: '墨西哥国家顶级域名' },
      { icon: 'globe', title: '拉美市场', desc: '拉丁美洲重要市场入口' },
      { icon: 'file-text', title: '本地要求', desc: '需提供墨西哥本地联系方式' },
      { icon: 'shield', title: '管理规范', desc: '受NIC México管理' }
    ],
    useCases: [
      { icon: 'building', title: '墨西哥企业', desc: '面向墨西哥市场的企业网站' },
      { icon: 'shopping-bag', title: '拉美电商', desc: '面向拉丁美洲的电商平台' },
      { icon: 'briefcase', title: '中墨贸易', desc: '中墨贸易企业' }
    ],
    requirements: '需提供墨西哥本地联系方式。可通过代理注册。',
    priceTable: [
      { years: 1, price: 659 },
      { years: 2, price: 1318 },
      { years: 3, price: 1874 },
      { years: 5, price: 2968 },
      { years: 10, price: 5272 }
    ]
  },

  // ===== 中东/其他 =====
  ae: {
    tld: '.ae',
    fullName: '阿联酋域名',
    category: '中东/其他',
    categoryTag: 'MIDDLE EAST',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/ae.svg',
    price: 798,
    promoPrice: null,
    promoTag: null,
    description: '阿联酋国家域名，面向中东商业中心迪拜与阿布扎比',
    features: [
      { icon: 'map-pin', title: '阿联酋标识', desc: '阿联酋国家顶级域名' },
      { icon: 'briefcase', title: '商业中心', desc: '迪拜是全球商业与金融中心' },
      { icon: 'file-text', title: '本地要求', desc: '需提供阿联酋本地地址或营业执照' },
      { icon: 'shield', title: '管理严格', desc: '受.aeDA管理，审核较严格' }
    ],
    useCases: [
      { icon: 'building', title: '中东企业', desc: '阿联酋及中东企业官网' },
      { icon: 'briefcase', title: '金融服务', desc: '迪拜金融区企业' },
      { icon: 'globe', title: '国际贸易', desc: '以迪拜为基地的国际贸易企业' }
    ],
    requirements: '需提供阿联酋本地地址或营业执照。',
    priceTable: [
      { years: 1, price: 798 },
      { years: 2, price: 1596 },
      { years: 3, price: 2268 },
      { years: 5, price: 3591 },
      { years: 10, price: 6384 }
    ]
  },

  sa: {
    tld: '.sa',
    fullName: '沙特阿拉伯域名',
    category: '中东/其他',
    categoryTag: 'MIDDLE EAST',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/sa.svg',
    price: 1800,
    promoPrice: null,
    promoTag: null,
    description: '沙特阿拉伯国家域名，面向中东最大经济体',
    features: [
      { icon: 'map-pin', title: '沙特标识', desc: '沙特阿拉伯国家顶级域名' },
      { icon: 'globe', title: '中东最大', desc: '中东最大经济体，市场潜力大' },
      { icon: 'file-text', title: '审核严格', desc: '需提供沙特本地商业注册证明' },
      { icon: 'shield', title: '品牌保护', desc: '保护品牌在中东市场权益' }
    ],
    useCases: [
      { icon: 'building', title: '沙特企业', desc: '沙特企业品牌网站' },
      { icon: 'briefcase', title: '中东业务', desc: '以沙特为基地的中东业务' },
      { icon: 'globe', title: '能源行业', desc: '能源与石油相关企业' }
    ],
    requirements: '需提供沙特本地商业注册证明，审核严格。',
    priceTable: [
      { years: 1, price: 1800 },
      { years: 2, price: 3600 },
      { years: 3, price: 5120 },
      { years: 5, price: 8100 },
      { years: 10, price: 14400 }
    ]
  },

  am: {
    tld: '.am',
    fullName: '亚美尼亚域名',
    category: '中东/其他',
    categoryTag: 'MIDDLE EAST',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/am.svg',
    price: 979,
    promoPrice: null,
    promoTag: null,
    description: '亚美尼亚国家域名，也可用于AM调幅广播相关领域',
    features: [
      { icon: 'map-pin', title: '亚美尼亚标识', desc: '亚美尼亚国家顶级域名' },
      { icon: 'radio', title: '广播属性', desc: '.am也可关联AM调幅广播' },
      { icon: 'globe', title: '小众市场', desc: '面向亚美尼亚及海外亚美尼亚人' },
      { icon: 'refresh', title: '注册相对宽松', desc: '注册要求相对宽松' }
    ],
    useCases: [
      { icon: 'building', title: '亚美尼亚企业', desc: '亚美尼亚本地企业网站' },
      { icon: 'radio', title: '广播媒体', desc: 'AM广播与播客相关网站' },
      { icon: 'globe', title: '海外社区', desc: '海外亚美尼亚人社区' }
    ],
    requirements: '无严格本地限制，个人和企业均可注册。',
    priceTable: [
      { years: 1, price: 979 },
      { years: 2, price: 1958 },
      { years: 3, price: 2782 },
      { years: 5, price: 4408 },
      { years: 10, price: 7832 }
    ]
  },

  ua: {
    tld: '.ua',
    fullName: '乌克兰域名',
    category: '中东/其他',
    categoryTag: 'MIDDLE EAST',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/ua.svg',
    price: 619,
    promoPrice: null,
    promoTag: null,
    description: '乌克兰国家域名，面向东欧市场与IT行业',
    features: [
      { icon: 'map-pin', title: '乌克兰标识', desc: '乌克兰国家顶级域名' },
      { icon: 'code', title: 'IT属性', desc: '乌克兰IT外包行业发达' },
      { icon: 'file-text', title: '本地要求', desc: '需提供乌克兰本地地址或商标证明' },
      { icon: 'globe', title: '东欧市场', desc: '面向东欧市场入口' }
    ],
    useCases: [
      { icon: 'building', title: '乌克兰企业', desc: '乌克兰企业品牌网站' },
      { icon: 'code', title: 'IT外包', desc: '乌克兰IT外包企业' },
      { icon: 'briefcase', title: '中乌贸易', desc: '中乌贸易企业' }
    ],
    requirements: '需提供乌克兰本地地址或商标注册证明。',
    priceTable: [
      { years: 1, price: 619 },
      { years: 2, price: 1238 },
      { years: 3, price: 1759 },
      { years: 5, price: 2787 },
      { years: 10, price: 4952 }
    ]
  },

  'comtr': {
    tld: '.com.tr',
    fullName: '土耳其商业域名',
    category: '中东/其他',
    categoryTag: 'MIDDLE EAST',
    iconBg: null,
    iconText: null,
    flag: 'assets/flags/tr.svg',
    price: 598,
    promoPrice: null,
    promoTag: null,
    description: '土耳其商业域名，面向欧亚交汇的土耳其市场',
    features: [
      { icon: 'shopping-bag', title: '商业属性', desc: '明确商业性质，适合土耳其商业企业' },
      { icon: 'map-pin', title: '土耳其标识', desc: '欧亚交汇处的地域标识' },
      { icon: 'file-text', title: '本地要求', desc: '需提供土耳其本地地址或商业证明' },
      { icon: 'globe', title: '跨洲市场', desc: '横跨欧亚的独特市场位置' }
    ],
    useCases: [
      { icon: 'building', title: '土耳其企业', desc: '土耳其企业品牌网站' },
      { icon: 'shopping-bag', title: '电商网站', desc: '面向土耳其的电商平台' },
      { icon: 'briefcase', title: '中土贸易', desc: '中土贸易与服务企业' }
    ],
    requirements: '需提供土耳其本地地址或商业注册证明。',
    priceTable: [
      { years: 1, price: 598 },
      { years: 2, price: 1196 },
      { years: 3, price: 1699 },
      { years: 5, price: 2691 },
      { years: 10, price: 4784 }
    ]
  }
};

/**
 * 通过域名后缀（带点号）查找数据
 * @param {string} tld - 域名后缀，如 '.com', '.com.cn'
 * @returns {object|null}
 */
window.getDomainData = function(tld) {
  if (!tld) return null;
  var key = tld.replace(/^\./, '').replace(/\./g, '');
  return window.DOMAIN_DATA[key] || null;
};

/**
 * 获取同一分类下的其他域名（排除自身）
 * @param {string} category
 * @param {string} excludeTld
 * @returns {Array}
 */
window.getSameCategoryDomains = function(category, excludeTld) {
  var results = [];
  for (var key in window.DOMAIN_DATA) {
    var d = window.DOMAIN_DATA[key];
    if (d.category === category && d.tld !== excludeTld) {
      results.push(d);
    }
  }
  return results;
};
