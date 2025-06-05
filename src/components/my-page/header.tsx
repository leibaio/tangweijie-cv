import { ModeToggle } from "../mode-toggle";
export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between w-full items-center md:items-start border-b-2 pb-6 md:pb-4">
      <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-2">
        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0 md:space-x-4">
          <h1 className="text-3xl font-bold">汤伟杰</h1>
          <h2 className="text-xl">求职方向：前端开发</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6">
          <div>电话：18101831982</div>
          <div>
            邮箱：
            <a href="mailto:leibaio@foxmail.com" className="hover:underline">
              leibaio@foxmail.com
            </a>
          </div>
          <div>地址：上海</div>
          <div>年龄：26</div>
          <div>经验：2年+</div>
          <div>英语：CET-6</div>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <ModeToggle />
      </div>
    </header>
  );
}
