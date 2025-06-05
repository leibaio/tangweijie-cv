import { Wrench } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function Skills() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={Wrench} title={"专业技能"} />
      <ul className="flex flex-col list-disc list-inside space-y-2">
        <li>
          熟练掌握
          HTML5、CSS3、Less、ES6+、TypeScript、Vue2/3、React，快速还原需求页面
        </li>
        <li>
          熟练掌握 Vue2/3 (Vue-Router、Pinia、Vuex 等)、React（Hooks、React-Router 等），有实际业务项目经历
        </li>
        <li>
          熟练掌握常用样式库如
          ElementUI、AntDesign、TailwindCSS、ShadcnUI、Echarts 等，并能够二次封装
        </li>
        <li>熟悉 Webpack、Vite 等前端工程化工具，完成日常配置开发</li>
        <li>注重用户体验，熟悉响应式设计布局，有移动端 H5、小程序开发经验</li>
        <li>了解前端性能优化如懒加载、虚拟列表、异步上传队列等</li>
        <li>了解 Cocos 游戏开发框架，有实际业务经历</li>
        <li>了解服务端渲染框架如 Nextjs 等，并在个人项目上尝试应用</li>
      </ul>
    </section>
  );
}
