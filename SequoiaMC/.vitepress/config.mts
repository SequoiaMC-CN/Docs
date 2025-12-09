import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "..\\Docs",
  
  title: "SequoiaMC 文档",
  description: "A Minecraft Server Docs",
  base: '/', //网站部署的路径，默认根目录
  
  cleanUrls:true, //开启纯净链接

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SequoiaMC-CN/Docs' }
    ]
  }
})
