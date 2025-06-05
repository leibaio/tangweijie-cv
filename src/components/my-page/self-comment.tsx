import { User } from "lucide-react";
import { SectionHeader } from "./components/section-header";
export default function SelfComment() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={User} title={"自我评价"} />
      <div className="flex flex-col gap-4">
        通过关注 Hacker News、Stack Overflow
        等技术论坛持续英语学习，保持对行业动态的敏锐度。面对新技术和不确定性需求，能够迅速学习并有效解决问题。能够有效沟通和团队协作，共同达成项目目标。保持对技术的热忱，结合业务，通过自学和实践不断提升专业技能，追求个人和职业的持续成长。
      </div>
    </section>
  );
}
