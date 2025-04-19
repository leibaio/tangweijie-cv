import { SectionHeader } from "./components/section-header";
import { Award } from "lucide-react";

export default function Certification() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader icon={Award} title="Certifications & Awards" />

      <div className="flex flex-col gap-4">
        <ul className="flex flex-col sm:flex-row gap-4 list-none p-0">
          <li className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-2 transition-colors duration-200">
            <span className="text-sm dark:text-gray-200">English (CET-6)</span>
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-2 transition-colors duration-200">
            <span className="text-sm  dark:text-gray-200">
              Shanghai Outstanding Graduate
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
