import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../Docs",
  
  title: "SequoiaMC 文档",
  description: "A Minecraft Server Docs",
  lang: 'zh-CN',
  base: '/', //网站部署的路径，默认根目录
  head: [
    ['link',{ rel: 'icon', href: '/logo.svg'}],
  ],
  
  cleanUrls:true, //开启纯净链接
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '使用文档', link: '/markdown-examples' },
          { text: '常见问题', link: '/api-examples' }
        ]
      }
    ],

    sitemap: {
      hostname: 'https://docs.sequoiamc.cn',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SequoiaMC-CN/Docs' }
    ],

    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '总览' // 文字显示
    },

    editLink: { 
      pattern: 'https://github.com/SequoiaMC-CN/Docs/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },


    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "深浅模式",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",

    //本地搜索
    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-2026 SequoiaMC-CN | ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2025139441号-2</a>', 
      // 自动更新时间
      // copyright: `Copyright © 2023-${new Date().getFullYear()} 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>`, 
    },
  }
})
