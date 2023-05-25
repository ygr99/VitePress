import { defineConfig } from "vitepress";
import { page } from "./const/links";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/VitePress/",
  title: "一个人丶99",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/picture/avatar.jpg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/picture/avatar.jpg',
    nav: [
      // { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "博客",
        items: [
          { text: "Hexo 博客", link: "https://喜欢上一个人.fun/archives/" },
          {
            text: "FlowUs 博客",
            link: "https://flowus.cn/ygr_99/share/494cda99-322c-4e38-98af-122f02ce016f",
          },
          // { text: "文章归档", collapsed: true },
        ],
      },
      {
        text: '2023',
        collapsed: true,
        items: page
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
