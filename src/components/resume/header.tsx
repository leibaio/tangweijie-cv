import { personalInfo } from "@/config";
import { ModeToggle } from "../mode-toggle";
import { ThemeColorToggle } from "../theme-color-toggle";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between w-full items-center md:items-start border-b-2 border-primary/30 pb-6 md:pb-4 print:pb-2 print:border-b">
      <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-2 print:space-y-1">
        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0 md:space-x-4 print:space-x-2">
          <h1 className="text-3xl font-bold print:text-2xl text-primary">{personalInfo.name}</h1>
          <h2 className="text-xl print:text-base">求职方向：{personalInfo.title}</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 print:space-x-4 print:text-sm text-muted-foreground">
          <div>电话：{personalInfo.phone}</div>
          <div>
            邮箱：
            <a href={`mailto:${personalInfo.email}`} className="hover:underline hover:text-primary">
              {personalInfo.email}
            </a>
          </div>
          <div>地址：{personalInfo.location}</div>
          <div>年龄：{personalInfo.age}</div>
          <div>英语：{personalInfo.english}</div>
        </div>
      </div>
      <div className="mt-6 md:mt-0 print:hidden flex items-center gap-2">
        <ThemeColorToggle />
        <ModeToggle />
      </div>
    </header>
  );
}
