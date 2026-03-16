import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "阿野的野径",
  description: "记录普通人的逆袭之路",
  lastUpdated: true,
  base: '/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'keywords', content: '阿野，双非本，Python 学习，在职读研，个人成长，逆袭' }],
    ['meta', { name: 'author', content: '阿野' }],
    ['link', { rel: 'canonical', href: 'https://youbeile1203.cn/' }],
    // 自定义 CSS
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
  ],
  
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
    },
    
    // 上一篇/下一篇
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
