import { Wrench } from "lucide-react";
import { SectionHeader } from "./components/section-header";

export default function Skills() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader icon={Wrench} title={"Skills"} />
      <ul className="flex flex-col">
        <li>
          <strong>Frontend Development:</strong> Proficient in HTML5, CSS3, ES6,
          TypeScript, and Photoshop for building responsive, pixel-perfect web
          interfaces.
        </li>
        <li>
          <strong>Frameworks & Libraries:</strong> Experienced in Vue.js (Vue
          2/3, Vue-Router, Vuex, Axios, ElementUI) and React.js (React, TS,
          Less, Antd, Hooks) for developing enterprise-level applications.
          Additionally, skilled in Next.js for server-side rendering and static
          site generation, and proficient in using Tailwind CSS and shadcn for
          modern, utility-first styling and component libraries.
        </li>
        <li>
          <strong>Backend Development:</strong> Skilled in Node.js for
          server-side development and Flask (Python) for backend APIs. Familiar
          with PHP and MySQL for database integration.
        </li>
      </ul>
    </section>
  );
}
