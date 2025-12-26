export type Locale = "zh" | "en";

export const i18n = {
  zh: {
    nav: {
      siteName: "汤伟杰的个人站点",
    },
    hero: {
      badge: "全栈开发工程师 · 求职中",
      title: "Hello, World!",
      subtitle: "我是汤伟杰",
      description: "专注于 Web 全栈开发，热爱用代码创造价值",
      viewResume: "查看简历",
      contactMe: "联系我",
    },
    features: {
      resume: {
        title: "个人简历",
        description: "在线简历展示，支持响应式布局、主题切换和打印导出",
      },
      showcase: {
        title: "组件展示",
        description: "项目中使用的各种组件展示和演示",
      },
    },
    techStack: "技术栈",
    footer: {
      rights: "All rights reserved.",
    },
  },
  en: {
    nav: {
      siteName: "Tang Weijie's Portfolio",
    },
    hero: {
      badge: "Full Stack Developer · Open to Work",
      title: "Hello, World!",
      subtitle: "I'm Tang Weijie",
      description: "Passionate about Web Full Stack Development",
      viewResume: "View Resume",
      contactMe: "Contact Me",
    },
    features: {
      resume: {
        title: "Resume",
        description: "Online resume with responsive layout, theme switching and print export",
      },
      showcase: {
        title: "Showcase",
        description: "Component demos and examples from my projects",
      },
    },
    techStack: "Tech Stack",
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export const defaultLocale: Locale = "zh";
