import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "轻松漫游用户指南",
  description: "轻松漫游使用指南",
  base: "/boring-lab-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '收藏地点', link: '/markdown-examples' },
      { text: '地点收藏夹', link: '/markdown-examples' },
      { text: '与朋友协作', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '主页', link: '/' },
          { text: '收藏地点', link: '/markdown-examples' },
          { text: '地点收藏夹', link: '/markdown-examples' },
          { text: '与朋友协作', link: '/markdown-examples' }
        ]
      }
    ],
  }
})
