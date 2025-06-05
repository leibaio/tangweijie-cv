import { Contact } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function ContactInfo() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={Contact} title={"联系方式"} />
      <div className="">
        <ul>
          <li>Tel: 18101831982</li>
          <li>Email: leibaio@foxmail.com</li>
          <li>Loc: 上海</li>
        </ul>
      </div>
    </section>
  );
}
