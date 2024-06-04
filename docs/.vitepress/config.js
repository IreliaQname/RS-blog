import nav from "./config/nav";
import sidebar from "./config/sidebar";

const chineLanguage = {
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  sidebarMenuLabel: "菜单",
  outline: {
    label: "目录",
  },
  returnToTopLabel: "返回顶部",
};
export default {
  title: "超级无敌胡求帅",
  description: "关注web前端开发为主的博客网站和前端网址大全",
  // 打包目录
  outDir: "../dist",
  base: "/vitePress-project/",
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    logo: {
      src: "/image/logo.svg",
      width: 24,
      height: 24,
    },
    // 隐藏logo右边的标题
    siteTitle: false,
    // 右侧边栏配置，默认值是"In hac pagina"
    outlineTitle: "本页目录",
    // 编辑链接
    editLink: {
      pattern: "https://github.com/msyuan/vitePress-project",
      text: "在 github 上编辑此页",
    },
    // 站点页脚配置
    footer: {
      // message: "Released under the MIT License",
      // copyright: "Copyright © 2023-present",
    },
    // 社交和项目链接地址配置
    socialLinks: [
      { icon: "github", link: "https://github.com/msyuan/vitePress-project" },
    ],
    // 搜索
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    // returnToTopLabel: "返回顶部", 未生效，所以自己手动写了一些返回顶部的组件
    lastUpdatedText: "最后更新",
    // 默认是 next page
    ...chineLanguage,
  },
};
