import { Wrench } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function Skills() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={Wrench} title={"专业技能"} />
      <ul className="flex flex-col list-disc list-inside space-y-2">
        <li>
          熟练掌握	HTML5、CSS3、Less、ES6+、TypeScript、RESTful	API、屏幕适配、浏览器渲染、异步编程、跨域等
        </li>
        <li>
          熟练掌握	Vue2/3	(Vue-Router、Pinia、Vuex	等)、React（Hooks、React-Router	等），快速实现项目搭建
        </li>
        <li>
          熟练掌握常用样式库如	ElementUI、AntDesign、TailwindCSS、ShadcnUI、Echarts	等，并能够二次封装
        </li>
        <li>熟悉	Webpack、Vite	等前端工程化工具，完成日常配置优化例如	Tree	Shaking	等方案减少打包体积</li>
        <li>熟悉 Linux 系统相关操作命令，在 Nginx 等服务器部署前端项目</li>
        <li>注重用户体验，熟悉响应式设计布局</li>
        <li>了解前端性能优化如懒加载、虚拟列表、异步上传队列等</li>
        <li>了解 Cocos 游戏开发框架，能独立完成简单小游戏试玩开发</li>
        <li>
          了解服务端渲染框架如 Nextjs、Nuxtjs 等，能够将 SPA 迁移到
          SSR，提升网站 SEO
        </li>
        <li>
          了解 Python、Nodejs 等相关后端技术，使用 Flask、Express
          等框架实现前后端数据交互
        </li>
        <li>
          能够从技术视角给出产品优化建议，同时落地执行并快速验证，具备高效的学习能力
        </li>
      </ul>
    </section>
  );
}
