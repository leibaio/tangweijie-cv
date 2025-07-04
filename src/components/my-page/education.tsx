import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function Education() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={GraduationCap} title={"教育背景"} />
      <div className="lg:whitespace-nowrap">
        <ul className="space-y-2">
          <li>
            上海第二工业大学，电子信息（计算机与人工智能方向），硕士，2021/09 -
            2024/06
          </li>
          <li>上海第二工业大学，电子信息工程，本科，2017/09 - 2021/06</li>
          <li>本科和硕士毕业均获得上海市优秀毕业生称号，在校多次获得奖学金、研电赛上海市一等奖、数模全国二等奖等</li>
        </ul>
      </div>
    </section>
  );
}
