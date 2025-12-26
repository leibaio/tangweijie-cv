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
    resume: {
      backToHome: "返回首页",
      print: "打印简历",
      jobTarget: "求职方向",
      phone: "电话",
      email: "邮箱",
      location: "地址",
      age: "年龄",
      english: "英语",
      education: "教育背景",
      skills: "专业技能",
      workExperience: "工作经历",
      projects: "项目经历",
      selfComment: "自我评价",
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
    resume: {
      backToHome: "Back to Home",
      print: "Print Resume",
      jobTarget: "Position",
      phone: "Phone",
      email: "Email",
      location: "Location",
      age: "Age",
      english: "English",
      education: "Education",
      skills: "Skills",
      workExperience: "Work Experience",
      projects: "Projects",
      selfComment: "About Me",
    },
  },
};

export const defaultLocale: Locale = "zh";
