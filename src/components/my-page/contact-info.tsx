import { Contact } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function ContactInfo() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={Contact} title={"Contact"} />
      <div className="">
        <ul>
          <li>Tel: 12312311231</li>
          <li>Email: xxxxxx@xxx.com</li>
          <li>Location: Shanghai, China Mainland</li>
        </ul>
      </div>
    </section>
  );
}
