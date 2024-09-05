import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "漫游家用户指南",
  description: "漫游家用户指南",
  base: "/boring-lab-docs/",
  appearance: {
    valueDark: 'false'
  },
  themeConfig: {
    logo: "/doc_logo.png",
    logoLink: "/boring-lab-docs/roamer",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '漫游家使用指南', link: '/roamer' },
      { text: '关于', link: '/roamer/about/about-app' }
    ],
    sidebar: [
      {
        text: '地点收藏',
        items: [
          { text: '手动添加', link: '/roamer/point/map' },
          { text: '内容 AI 解析', link: '/roamer/point/parse' },
          { text: '使用地点', link: '/roamer/point/use' },
        ]
      },
      {
        text: '收藏夹',
        items: [
          { text: '收藏夹管理', link: '/roamer/collection/collection' },
          { text: '与朋友协作收藏', link: '/roamer/collection/collaborate' },
        ]
      },

      {
        text: '关于',
        items: [
          { text: '关于应用', link: '/roamer/about/about-app' },
          // { text: '更新计划', link: '/roamer/about/update-plan' },
          { text: '联系我们', link: '/roamer/about/contact' },
        ]
      },
      {
        text: '协议',
        items: [
          { text: '用户协议', link: '/roamer/agreement/user-agreement' },
          { text: '隐私协议', link: '/roamer/agreement/user-privacy' },
        ]
      }
    ],
    footer: {
      message: 'Copyright ©2024 Boring Lab',
      copyright: '<a href="https://beian.miit.gov.cn/">鲁ICP备2022015256号-1</a>',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: { label: '页内导航'},
    darkModeSwitchLabel: '切换主题',
    notFound: {
      title: '页面走失了...',
      quote: '',
      linkText: '返回首页',
    }
  }
})
