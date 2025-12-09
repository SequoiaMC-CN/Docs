// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import './style.css'
import strict from 'assert/strict';
import theme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'SequoiaMC-CN/Docs', //仓库
      repoId: 'R_kgDOQlORMQ', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDOQlORMc4Czkxp', //讨论分类ID
      mapping: 'pathname',
      strict: 0,
      inputPosition: 'top',
      lang: 'zh-CN',
      theme: 'preferred_color_scheme',
      loading: 'lazy',
      crossorigin: 'anonymous',
      async: true,
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },

  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
