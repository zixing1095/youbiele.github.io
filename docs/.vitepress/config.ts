import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "阿野的野径",
  description: "记录普通人的逆袭之路 - 双非本科、在职读研、Python 学习、英语提升、个人成长",
  lastUpdated: true,
  base: '/',
  
  head: [
    // SEO 基础
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'keywords', content: '阿野，双非本，Python 学习，在职读研，个人成长，逆袭，英语学习，自律，博客' }],
    ['meta', { name: 'author', content: '阿野' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://youbeile1203.cn/' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://youbeile1203.cn/' }],
    ['meta', { property: 'og:title', content: '阿野的野径 - 记录普通人的逆袭之路' }],
    ['meta', { property: 'og:description', content: '双非本科逆袭，在职读研，Python 学习，英语提升，个人成长记录' }],
    ['meta', { property: 'og:image', content: 'https://youbeile1203.cn/hero.svg' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '阿野的野径' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://youbeile1203.cn/' }],
    ['meta', { name: 'twitter:title', content: '阿野的野径 - 记录普通人的逆袭之路' }],
    ['meta', { name: 'twitter:description', content: '双非本科逆袭，在职读研，Python 学习，英语提升，个人成长记录' }],
    ['meta', { name: 'twitter:image', content: 'https://youbeile1203.cn/hero.svg' }],
    
    // 搜索引擎验证
    // ['meta', { name: 'google-site-verification', content: 'your_google_verification_code' }],
    // ['meta', { name: 'baidu-site-verification', content: 'your_baidu_verification_code' }],
    
    // 其他 SEO
    ['meta', { name: 'theme-color', content: '#4a9eff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    
    // 自定义 CSS
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    
    // 结构化数据 (JSON-LD)
    ['script', { type: 'application/ld+json' }, `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "阿野的野径",
      "url": "https://youbeile1203.cn/",
      "description": "记录普通人的逆袭之路",
      "author": {
        "@type": "Person",
        "name": "阿野"
      },
      "publisher": {
        "@type": "Person",
        "name": "阿野"
      }
    }`],
  ],
  
  // Sitemap 配置
  sitemap: {
    hostname: 'https://youbeile1203.cn',
  },
  
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '野径日记', link: '/blog/' },
      { text: '学习笔记', link: '/learn/' },
      { text: '工具教程', link: '/tools/' },
    ],
    
    // 侧边栏
    sidebar: {
      '/blog/': [
        { 
          text: '野径日记', 
          items: [
            { text: 'Day1 - 我是阿野', link: '/blog/day1-wild-path' },
          ]
        },
      ],
      '/learn/python/': [
        { 
          text: 'Python 学习', 
          items: [
            { text: 'Day1 - 环境搭建', link: '/learn/python/day1' },
          ]
        },
      ],
      '/learn/english/': [
        { 
          text: '英语学习', 
          items: [
            { text: '学习路线', link: '/learn/english/' },
          ]
        },
      ],
      '/tools/openclaw/': [
        { 
          text: 'OpenClaw', 
          items: [
            { text: 'Day1 - 自动化发布', link: '/tools/openclaw/day1' },
          ]
        },
      ],
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zixing1095' },
    ],
    
    // 页脚
    footer: {
      message: '野径不通，那就踩出一条路',
      copyright: '© 2026 阿野的野径',
    },
    
    // 搜索
    search: {
      provider: 'local',
    },
    
    // 大纲
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    
    // 上一篇/下一篇
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    
    // 社交分享
    socialIcons: true,
  },
  
  // Markdown 优化
  markdown: {
    // 启用 SEO 友好的链接
    linkify: true,
    // 启用标题 ID
    anchor: {
      permalink: true,
      permalinkBefore: true,
    },
  },
})
