import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "轻松漫游用户指南",
  description: "轻松漫游使用指南",
  base: "/boring-lab-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '轻松漫游使用指南', link: '/' },
      { text: '关于应用', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '地点收藏',
        items: [
          { text: '地图选点', link: '/markdown-examples' },
          { text: '解析链接/文字', link: '/markdown-examples' },
        ]
      },
      {
        text: '收藏夹',
        items: [
          { text: '收藏夹管理', link: '/markdown-examples' },
          { text: '与朋友协作收藏', link: '/markdown-examples' },
        ]
      }
    ],
  }
})
