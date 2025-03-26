import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function Education() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={GraduationCap} title={"Education"} />
      <div className="lg:whitespace-nowrap">
        <ul>
          <li>
            Shanghai Polytechnic University, Computer and Artificial
            Intelligence, Master, 09/01/2021 - 06/30/2025
          </li>
          <li>
            Shanghai Polytechnic University, Electronic Information Engineering,
            Bachelor, 09/01/2017 - 06/30/2021
          </li>
        </ul>
      </div>
    </section>
  );
}
